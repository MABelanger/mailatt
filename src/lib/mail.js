"use strict";
import nodemailer           from 'nodemailer';
import smtpTransport        from 'nodemailer-smtp-transport';

/**
 * Only here we know about nodemailer, we can use other thing if we need to.
 */


/**
 * send - This is the function that send the email. If the mail has been successful sent,
 * it call the callback 'cb()' without error, in other case,
 * it call the callback with the error 'cb(error)'.
 * @public
 * @param  {Object}   transportConf description
 * @param  {Object}   message       Object literal with all the email fields that come from the config.
 * @param  {function} cb            The callback called after the send action.
 * @return {type}                   description
 */
function send(transportConf, message, cb){
  let nTransport = nodemailer.createTransport(smtpTransport(transportConf));

  nTransport.sendMail(message, function(error){
    if(error){
      cb(error);
    } else {
      nTransport.close(); // close the connection pool
      cb();
    }
  });
}

module.exports = {
	send: send
};
