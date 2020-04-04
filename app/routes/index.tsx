import React from "react";
import { Route, Switch } from "react-router"; /* react-router v4/v5 */
import { ConnectedRouter } from "connected-react-router";
import MainSearch from "./mainSearch";
import { remote } from "electron";
import List from "collections/list";
import { History } from "history";
import { toggleOff } from "@appWindow/lib/toggleWindow";
import './styles.scss'

interface IRoutesProps {
  history: History<any>;
}

interface IRoutesState {
  hotKeysCollection: any;
  hotKeys: any;
}

class Routes extends React.Component<IRoutesProps, IRoutesState> {
  constructor(props: IRoutesProps) {
    super(props);

    this.state = {
      hotKeysCollection: new List(),
      hotKeys: {}
    };

    this.cleanup = this.cleanup.bind(this);
    this.hideWindow = this.hideWindow.bind(this);

    // Cleanup event listeners on unload
    // NOTE: when page refreshed (location.reload) componentWillUnmount is not called
    window.addEventListener("beforeunload", this.cleanup);
  }

  private electronWindow = remote.getCurrentWindow();

  hideWindow() {
    toggleOff(this.electronWindow);
  }

  componentWillUnmount() {
    this.cleanup();
  }

  cleanup() {
    window.removeEventListener("beforeunload", this.cleanup);
  }

  componentDidMount() {}

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div
          className={`outerContainer process.platform`}
          data-automationid="outerContainer"
        >
          <Route
            render={() => {
              const location = this.props.history.location;
              return (
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={props => <MainSearch {...props} />}
                  />
                </Switch>
              );
            }}
          ></Route>

          <div
            className={`transparentHelper`}
            onClick={() => {
              this.hideWindow();
            }}
            tabIndex={-1}
          />
        </div>
      </ConnectedRouter>
    );
  }
}

export default Routes;
