import { helper } from '@ember/component/helper';
import { DateTime } from 'luxon';

export function luxonFormat([dateTime, format = false, locale = 'de']) {
  var luxonDateTime= DateTime.fromJSDate(dateTime);
  if(locale == undefined || locale == null) {
    locale = 'de';
  }
  
  if(format) {
    return luxonDateTime.setLocale(locale).toFormat(format);
  } else {
    return luxonDateTime.setLocale('de').toLocaleString();
  }
}

export default helper(luxonFormat);
