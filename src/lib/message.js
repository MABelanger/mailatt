"use strict";

/**
 * getFields - Merge two object 'emailFields' and 'attachments'
 * and Return a fields object with all parameter that nodemailer need to send
 * the email : 'from', 'to', 'replyTo', 'subject', 'html' and 'attachment'
 * @public
 * @param  {Object} emailFields Object with all the email fields that come from the config
 * @param  {Array}  attachments Array of String of the attachments path.
 * @return {Object}             Object literal build from 'emailFields' and 'attachments'
 * that contain all parameters need by nodemailer to send the email.
 */
function getFields(emailFields, attachments){
  return {
    // sender info
    'from':  emailFields.FROM,
    // Comma separated list of recipients
    'to': '"Receiver Name" <' + emailFields.TO + '>',
    'replyTo': emailFields.REPLY_TO,
    // Subject of the message
    'subject': emailFields.SUBJECT,
    // HTML body
    'html': emailFields.HTML,
    'attachments': attachments
  };
}

module.exports = {
	getFields: getFields
};
