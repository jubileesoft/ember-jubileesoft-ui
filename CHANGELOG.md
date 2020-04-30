# Change Log

All notable changes to this project will be documented in this file. The format ist based on [Keep a Changelog](https://keepachangelog.com) and this project adheres to [Semantic Versioning](https://semver.org/).

An online documentation of the components is available [here](https://ui.jubileesoft.com/).

## <span style="color: #0366d6;">1.1.0</span>

Release Date: 2020-05-01

##### Added

- [#11](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/11) Add light and dark theme to JubileeInput.

##### Changed

- [#9](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/9) Bump different dependencies
  - Bump @fortawesome/ember-fontawesome from 0.1.14 to 0.2.1
  - Bump @fortawesome/free-solid-svg-icons from 5.10.2 to 5.13.0
  - Bump ember-css-modules from 1.3.0-beta.1 to 1.3.0
  - Bump ember-css-modules-sass from 1.0.1 to 1.1.0
  - Bump ember-intl from 4.2.2 to 4.3.2
  - Bump uuidv4 from 6.0.0 to 6.0.7
  - Bump sass from 1.22.10 to 1.26.5
- [#8](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/8) Upgrade to ember-cli@3.17.0

##### Fixed

 - [#13](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/13) Fix docs for JubileeInput and add missing attribute @theme to code example.
 - [#12](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/12) Fix docs for JubileeInput and add missing attribute @placeholder.

## <span style="color: #0366d6;">1.0.1</span>

Release Date: 2020-03-04

##### Changed

- Upgrade ember-cli from 3.15.1 to 3.16.0
- Add Typescript
- Migrate components and service to Typescript

## <span style="color: #0366d6;">1.0.0</span>

Release Date: 2020-01-17

##### Changed

- [#6](https://github.com/jubileesoft/ember-jubileesoft-ui/pull/6) Migrate to Ember Octane (part 1)
- Migrate to Ember Octane (part 2)
  - Bump ember-cli from 3.14.0 to 3.15.1
  - Bump ember-css-modules from 1.2.1 to 1.3.0-beta.1
  - Add dependency @ember/render-modifier 1.0.2
  - Add dependency uuidv4
  - Add dependency ember-cli-app-version
  - Add dependency ember-intl
  - Make every component into a glimmer component
  - Make every service, controller and router into a native class "thingy"
  - Update missing docs
  - Add version to home view


## <span style="color: #0366d6;">0.6.2</span>

Release Date: 2019-11-18

##### Fixed

- Fix width in JubileeSelect

##### Changed

- Switch to yarn
- Configure repository to use prettier
- Bump ember-cli from 3.12.0 to 3.14.0

## <span style="color: #0366d6;">0.6.1</span>

Release Date: 2019-09-06

##### Changed

- upgrade ember-cli from 3.9.0 to 3.12.0
- bump sass from 1.20.1 to 1.22.10
- bump luxon from 1.12.1 to 1.17.2
- bump @types/luxon from 1.12.0 to 1.15.2
- bump ember-power-calendar from 0.13.1 to 0.14.3
- bump ember-modal-dialog from 3.0.0-beta.3 to 3.0.0-beta.4
- bump ember-css-modules from 1.2.0 to 1.2.1
- bump ember-cli-sass from 10.0.0 to 10.0.1
- bump @fontawesome/ember-fontawesome from 0.1.13 to 0.1.14
- bump @fontawesome/free-solid-svg-icons from 5.8.1 to 5.10.2

## <span style="color: #0366d6;">0.6.0</span>

Release Date: 2019-05-05

##### Added

- Add JubileeButton
- Add JubileeDate

##### Changed

- [JubileeModal] Add a `maxContent` property to allow the content of an overlay to NOT be maximized if configured: `@maxContent={{false}}`
- Upgrade to ember-cli@3.9.0
- Bump sass from 1.17.2 to 1.20.1
- Bump ember-css-modules from 1.1.1 to 1.2.0
- Bump @fortawesome/free-solid-svg-icons from 5.7.2 to 5.8.1


## <span style="color: #0366d6;">0.5.1</span>

Release Date: 2019-03-22

##### Fixed

- [JubileeSwitch] Fix typo in hook name (hook was never called).
- [JubileeSwitch] Fix title in docs.

## <span style="color: #0366d6;">0.5.0</span>

Release Date: 2019-03-19

##### Added

- Add JubileeInput.
- Add JubileeSwitch.

##### Fixed

- Fix minor things.


## <span style="color: #0366d6;">0.4.2</span>

Release Date: 2019-03-05

##### Added

- Add an isSmall mode (for mobile devices) to JubileeSelect.

##### Fixed

- Fix missing @updates in docs for JubileeTextField.

## <span style="color: #0366d6;">0.4.1</span>

Release Date: 2019-02-28

##### Changed

- Bump sass from 1.16.1 to 1.17.2
- Bump ember-cli-sass from 9.0.1 to 10.0.0
- Bump ember-css-modules from 1.1.0 to 1.1.1

## <span style="color: #0366d6;">0.4.0</span>

Release Date: 2019-02-28

##### Added

- Add new component JubileeSelect (DropDown).

##### Changed

- Redesign JubileeTextField
  - Remove `onFocusInEvent`, `onFocusOutEvent` and `onClickSelect`.
  - Implement DDAU with one-way binding of the `@text` attribute and `@onChange` event.
  - Support `on-blur` and `on-input` as `@update` strategy for evaluating when to fire the onChange event. 

## <span style="color: #0366d6;">0.3.0</span>

Release Date: 2019-01-31

##### Added

- Add new (bool) property `onClickSelect` to **JubileeTextField** to auto-select the text when the input is clicked.
- Add new event `onFocusIn` to **JubileeTextField**.
- Add new event `onFocusOut` to **JubileeTextField**.

##### Changed

- Increase font-size on **JubileeTextField** input from 1rem to 1.25rem.
- [DOCS] Show the controls for small screens "in column" and not "in row" (as for big screens). 

##### Fixed

- Fix width-issue in **JubileeTextField**.
- Fix broken autocomplete on **JubileeTextField**.





## <span style="color: #0366d6;">0.2.2</span>

Release Date: 2019-01-31

##### Fixed

- Fix internal references to newly scoped package "@jubileesoft/ember-jubileesoft-ui".
- Fix repository in `package.json`.

## <span style="color: #0366d6;">0.2.1</span>

Release Date: 2019-01-30

##### Changed

- Update `package.json` to reflect the npm-scope **jubileesoft**.

## <span style="color: #0366d6;">0.2.0</span>

Release Date: 2019-01-30

##### Added

- Add new property `label2` to **JubileeLabel** (and therefore to **JubileeTextField**).
- Add new property `isReadonly` to **JubileeTextField**.

##### Fixed

- [DOCS] Add missing text-property to **JubileeTextField**.

## <span style="color: #0366d6;">0.1.1</span>

Release Date: 2019-01-29

##### Changed

- Make most of the text non-selectable.

##### Fixed

- Add missing website title.
- [DOCS] Fix positioning of the component's name within `doc-element`.

## <span style="color: #0366d6;">0.1.0</span>

Release Date: 2019-01-29

##### Added

- Add new component **JubileeTextField**.
- Add docs.