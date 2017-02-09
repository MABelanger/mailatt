'use strict';
import argv from 'minimist';

import {askQuestions as askTransport} from './config/questions/transport';
import {askQuestions as askFields} from './config/questions/fields';
import attachment from './attachment';
import mail from './mail';
import message from './message';
import {transportConf, fieldsConf} from './config/answers';

function printVersion () {
  console.log('0.0.0-beta');
}

function printHelp () {
  console.log(`
    Usage: mailatt [options]

    Options:

      --configure          configure the transport and the email fields
      --version            output the version number
      --att='filePath'     the path of the file attachment
  `);
}

function startConfigure () {
  askTransport(function () {
    askFields();
  });
}

function sendMail (filePaths) {
  let attachments = attachment.getAttachment(filePaths);
  let messageObj = message.getFields(fieldsConf, attachments);

  mail.send(transportConf, messageObj, function (error) {
    if (error) {
      console.log('error', error);
    } else {
      console.log('email sent successfully!');
    }
  });
}

// the parameters of the cli
let { version, configure, att: filePaths } = argv(process.argv.slice(2));

if (version) {
  printVersion();
} else if (configure) {
  startConfigure();
} else if (filePaths) {
  sendMail(filePaths);
} else { // if wrong usage, print the help
  printHelp();
}
