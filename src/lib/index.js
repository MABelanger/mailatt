'use strict';
import minimist from 'minimist';

import {askQuestions as askTransport} from './config/questions/transport';
import {askQuestions as askFields} from './config/questions/fields';
import attachment from './attachment';
import mail from './mail';
import message from './message';
import {transportConf, fieldsConf} from './config/answers';

// Take only the argument of the command.
const argCmd = process.argv.slice(2);

function printVersion () {
  console.log('0.0.0-beta');
}

function printHelp () {
  console.log(`
    Usage: mailatt [options] [file ...]

    Options:

      --configure          configure the transport and the email fields
      --version            output the version number
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

let { version, configure, att: filePaths } = minimist(argCmd);

if (version) {
  printVersion();
} else if (configure) {
  startConfigure();
} else if (filePaths) { // compatible with the old --att='./path/file.ext'
  sendMail(filePaths);
} else if (argCmd.length > 0) { // if argument exist without parameter, it's a file
  filePaths = argCmd;
  sendMail(filePaths);
} else { // if wrong usage, print the help
  printHelp();
}
