// Types for compiled templates
declare module '@jubileesoft/ember-jubileesoft-ui/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
