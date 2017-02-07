"use strict";

/**
 * _getSendMailMessage -
 *
 * @private
 * @param  {Object} emailFields     description
 * @param  {Object} attachments     description
 * @return {Object}         Return an object with all parameter :
 * 'from', 'to', 'replyTo', 'subject', 'html' and 'attachment'
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
