import Component from '@glimmer/component';

export default class JubileeButtonComponent extends Component {
  // #region Properties

  get isInverse() {
    return this.args.invert === true;
  }

  // #endregion Properties
}
