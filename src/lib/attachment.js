'use strict';

function getFileName (filePath) {
  return filePath.split('\\').pop().split('/').pop();
}

function isOneArg (args) {
  return (typeof args === 'string' || args instanceof String);
}

function isManyArg (args) {
  return args instanceof Array;
}

function getAttachmentObj (filePath) {
  return {
    filename: getFileName(filePath),
    path: filePath
  };
}

function getAttachment (filePaths) {
  if (isOneArg(filePaths)) {
    let filePath = filePaths;
    return [ getAttachmentObj(filePath) ];
  } else if (isManyArg(filePaths)) {
    return filePaths.map(filePath => {
      return getAttachmentObj(filePath);
    });
  }
  // no filePaths
  return [];
}

module.exports = {
  getAttachment: getAttachment
};
