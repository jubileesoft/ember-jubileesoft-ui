import Component from '@glimmer/component';

export default class JubileeIconComponent extends Component {
  // #region Properties

  get computedSize() {
    return this.args.size || 'lg';
  }

  // #endregion Properties
}
