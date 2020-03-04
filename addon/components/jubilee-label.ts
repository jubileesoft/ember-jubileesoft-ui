import Component from '@glimmer/component';

interface JubileeLabelArgs {
  label: string;
  label2: string;
}

export default class JubileeLabel extends Component<JubileeLabelArgs> {
  // #region Properties

  get hasLabel(): boolean {
    return typeof this.args.label !== 'undefined';
  }

  get hasLabel2(): boolean {
    return typeof this.args.label2 !== 'undefined';
  }

  get hasAnyLabel(): boolean {
    return this.hasLabel || this.hasLabel2;
  }

  // #endregion Properties
}
