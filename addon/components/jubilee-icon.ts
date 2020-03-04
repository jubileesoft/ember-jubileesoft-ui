import Component from '@glimmer/component';

interface JubileeIconArgs {
  size: string;
}

export default class JubileeIcon extends Component<JubileeIconArgs> {
  // #region Properties

  get computedSize(): string {
    return this.args.size || 'lg';
  }

  // #endregion Properties
}
