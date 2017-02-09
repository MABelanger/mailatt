'use strict';

import fs                   from 'fs';
/**
 * write - description
 *
 * @param  {type} conf description
 * @param  {type} path description
 * @param  {type} cb   description
 * @return {type}      description
 */
function writeConf(conf, path, cb) {
  let json = JSON.stringify(conf, null, '  ');

  fs.writeFile(path, json, function(err) {
    if(err) {
      return console.log(err);
    }
    // call the callback
    cb();
  });
}

export {
  writeConf
};
