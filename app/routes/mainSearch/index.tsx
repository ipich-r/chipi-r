/* eslint default-case: 0 */
"use strict";

import React, { Component, RefObject } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { remote, ipcRenderer, shell, BrowserWindow } from "electron";
import cn from "classnames";
import { on } from "@app/lib/rpc";
import "./styles.scss";

import MainInput from "@app/components/mainInput";

import commonStyles from "@app/main/components/Common/styles.css";

import Logger from "@appWindow/lib/logger";
import List from "collections/list";

import { withRouter } from "react-router";
import { CHIPI_WEB_CLIENT } from "Environment";
import * as search from "@app/actions/search";
import { AppState } from "@app/store";
import Logo from "@app/components/logo";

const logger = new Logger("component.Chipi");

interface IMainSearchProps {
  searchActions: {
    updateTerm: typeof search.updateTerm;
  };
  term: string;
  autoSearch: boolean;
  searchingInFlight: true;
}

/**
 * Main search container
 */
class MainSearch extends Component<IMainSearchProps, any> {
  private electronWindow: BrowserWindow;
  private mainChipiActions: any[];
  private mainInput: MainInput;

  constructor(props) {
    super(props);
    this.electronWindow = remote.getCurrentWindow();

    this.onMainInputFocus = this.onMainInputFocus.bind(this);
    this.onMainInputBlur = this.onMainInputBlur.bind(this);
    this.cleanup = this.cleanup.bind(this);
    this.focusMainInput = this.focusMainInput.bind(this);
    this.highlightMainInput = this.highlightMainInput.bind(this);
    this.mouseClickElement = this.mouseClickElement.bind(this);

    this.state = {
      shouldFocusSignIn: false,
      // TODO: move this property down to child component to improve performance
      showActionsForSelectedOutput: true,

      hotKeysCollection: new List(),
      hotKeys: {},
    };

    this.electronWindow.on("show", this.focusMainInput);
    this.electronWindow.on("show", this.highlightMainInput);
    //this.electronWindow.on('show', trackShowWindow)
  }

  componentDidMount() {
    logger.verbose("Chipi main did mount");

    // Once component mounting again, reset the hotkeys collection
    //hotKeysHelper.clear();
    //registerHotKeys("main", this.mainKeys, this.mainKeyHandlers);

    this.focusMainInput();

    // Handle `showTerm` rpc event and replace search term with payload
    on("showTerm", (term) => this.props.searchActions.updateTerm(term));
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    this.cleanup();
  }

  onMainInputFocus() {
    logger.verbose("Main input focus called");
    this.setState({
      mainInputFocused: true,
      shouldFocusSignIn: false,
    });
  }

  onMainInputBlur() {}

  cleanup() {
    this.electronWindow.removeListener("show", this.focusMainInput);
  }

  focusMainInput() {
    logger.verbose("Focus main input function called");
    if (this.mainInput) this.mainInput.focus();
  }

  /**
   * Hightlight all text within the main input field
   */
  highlightMainInput() {
    if (this.mainInput) this.mainInput.highlight();
  }

  focusSignIn() {
    this.setState({ shouldFocusSignIn: true });
  }

  /**
   * Get highlighted result
   * @return {Object}
   */
  getHighlightedResult() {}

  /**
   * Select item from results list
   * @param  {[type]} item [description]
   * @return {[type]}      [description]
   */
  mouseClickElement(item) {
    if (item.onSelect) {
      item.onSelect(event);
    }
  }

  render() {
    const { mainInputFocused } = this.state;
    const { searchActions, term, autoSearch, searchingInFlight } = this.props;

    return (
      <div>
        <div className={`search ${process.platform}`}>
          <div
            className={`inputWrapper unselectable ${
              process.platform === "darwin" && "draggable"
            }`}
            aria-autocomplete="list"
            tabIndex={-1}
            //onKeyDown={this.onKeyDown}
          >
            <div className={`iconWrapper`}>
              <Logo isLoading={searchingInFlight ? true : false} />
            </div>
            <MainInput
              value={term}
              ref={(c) => (this.mainInput = c)}
              onFocus={this.onMainInputFocus}
              onBlur={this.onMainInputBlur}
              searchActions={searchActions}
              autoSearch={autoSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    term: state.search.term,
    searchingInFlight: state.search.searchingInFlight,
    autoSearch: state.search.autoSearch,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(search, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainSearch)
);
