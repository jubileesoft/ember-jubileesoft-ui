# Change Log

All notable changes to this project will be documented in this file. The format ist based on [Keep a Changelog](https://keepachangelog.com) and this project adheres to [Semantic Versioning](https://semver.org/).

An online documentation of the components is available [here](https://ui.jubileesoft.com/).

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