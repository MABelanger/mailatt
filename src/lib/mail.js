"use strict";

import nodemailer           from 'nodemailer';
import smtpTransport        from 'nodemailer-smtp-transport';

import message              from './message';


function send(transport, emailFields, attachments, cb){

  let fields = message.getFields(emailFields, attachments);
  let nTransport = nodemailer.createTransport(smtpTransport(transport));

  nTransport.sendMail(fields, function(error){
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
