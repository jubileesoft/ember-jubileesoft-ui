import Component from '@glimmer/component';

interface JubileeButtonArgs {
  invert: boolean;
}

export default class JubileeButton extends Component<JubileeButtonArgs> {
  // #region Properties

  get isInverse() {
    return this.args.invert === true;
  }

  // #endregion Properties
}
