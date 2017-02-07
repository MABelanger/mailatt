"use strict";
import argv                 from 'minimist';

import {emailFields}        from './config';
import {transport}          from './config';
import attachment           from './attachment'
import mail                 from './mail';


let { att:filePaths } = argv( process.argv.slice(2) );
let { configure } = argv( process.argv.slice(2) );

if(configure){
  require('./config/questions');

} else if(filePaths){
  let attachments = attachment.getAttachment(filePaths);

  mail.send(transport, emailFields, attachments, function(error){
    if(error){
      console.log('error', error);
    } else {
      console.log('email sent successfully!');
    }
  });
}
