import Component from '@glimmer/component';

export default class JubileeLabelComponent extends Component {
  // #region Properties

  get hasLabel() {
    return typeof this.args.label !== 'undefined';
  }

  get hasLabel2() {
    return typeof this.args.label2 !== 'undefined';
  }

  get hasAnyLabel() {
    return this.label || this.label2;
  }

  // #endregion Properties
}
