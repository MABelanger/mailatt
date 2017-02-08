"use strict";
import argv                 from 'minimist';

import {emailFields}        from './config';
import {transport}          from './config';
import attachment           from './attachment'
import mail                 from './mail';

function printVersion() {
  console.log('0.0.0-beta');
}

function printHelp() {
  console.log(`
    Usage: mailatt [options]

    Options:

      --configure          configure the transport and the email fields
      --version            output the version number
      --att='filePath'     the path of the file attachment
  `);
}

function startConfigure() {
  require('./config/questions');
}

function sendMail(filePaths) {
  let attachments = attachment.getAttachment(filePaths);

  mail.send(transport, emailFields, attachments, function(error){
    if(error){
      console.log('error', error);
    } else {
      console.log('email sent successfully!');
    }
  });
}

// the parameters of the cli
let { version } = argv( process.argv.slice(2) );
let { configure } = argv( process.argv.slice(2) );
let { att:filePaths } = argv( process.argv.slice(2) );


if(version){
  printVersion();

} else if(configure){
  startConfigure();

} else if(filePaths){
  sendMail(filePaths);

} else { // if wrong usage, print the help
  printHelp();
}
