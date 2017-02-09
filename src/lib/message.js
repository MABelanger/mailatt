'use strict';

/**
 * getFields - Merge two object 'emailFields' and 'attachments'
 * and Return a fields object with all parameter that nodemailer need to send
 * the email : 'from', 'to', 'replyTo', 'subject', 'html' and 'attachment'
 * @public
 * @param  {Object} emailFields Object literal with all the email fields that come from the config.
 * @param  {Array}  attachments Array of Strings that contain a list of attachments path.
 * @return {Object}             Object literal build from 'emailFields' and 'attachments'
 * that contain all parameters need by nodemailer to send the email.
 */
function getFields (fieldsConf, attachments) {
  return {
    // sender info
    'from': fieldsConf.from,
    // Comma separated list of recipients
    'to': '"Receiver Name" <' + fieldsConf.to + '>',
    'replyTo': fieldsConf.reply_to,
    // Subject of the message
    'subject': fieldsConf.subject,
    // HTML body
    'html': fieldsConf.html,
    // all the attachements
    'attachments': attachments
  };
}

module.exports = {
  getFields: getFields
};
