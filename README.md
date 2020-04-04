# chipi-r

This is the repo for 2020 Chipi Reborn project ⚡️⚡️⚡️

## Building the client 🏗

Steps to install and run chipi go here

## Tech Stack

* Electron
* React
* React-Redux
* Redux-Thunk
* TypScritp
...
...

## Commit messages

The project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) for commit messages in order to aid in automatic generation of changelogs. As described in the Conventional Commmits specification, commit messages should be of the form:

<type>[optional scope]: <description>

[optional body]

[optional footer]

where the type is one of

- "fix": for bug fixes
- "feat": for new features
- "refactor": for refactors
- "test": for test-only changes
- "docs": for docs-only changes
- "revert": for reverting other changes
- "perf", "style", "build", "ci", or "chore": as described in the [Angular specification](https://github.com/angular/angular/blob/22b96b9/contributing.md#type) for Conventional Commits

### Local Environment
Install `nvm` to manage node version.
    1. Follow this link https://github.com/nvm-sh/nvm#installing-and-updating to install nvm

    2. Install node 10.2.1 
        `nvm install 10.2.1`

    3. Choose node 10 as running node version
        `nvm use 10.2.1`

Install `pyenv` to manage python version
    Follow this link https://github.com/pyenv/pyenv to intall pyenv

Install `yarn`
    `brew install yarn`

### Install dependencies

    `yarn && yarn rebuild-node`

### Environment choose

There are 3 different CHIPI platform environmets available (development, uat and prod). By default the local develoment should use the CHIPI UAT evnviornment. Different environment values are stored within /app/environment folder. 

To choose different environment for running the `yarn dev`, please change the `Environment` alias resolve in the `webpack.config.base.js` file.

### Run development

    `yarn dev`
