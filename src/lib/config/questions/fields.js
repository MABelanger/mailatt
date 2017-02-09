'use strict';

import inquirer from 'inquirer';
import {writeConf} from './utils';

// __dirname point to the current directory 'questions'
// So we go to the parent before '..' to get the path 'answers'
const FIELDS_JSON_PATH = __dirname + '/../answers/fields.json';

const QUESTIONS = [
  {
    type: 'input',
    name: 'to',
    message: 'to:'
  },
  {
    type: 'input',
    name: 'reply_to',
    message: 'reply To:'
  },
  {
    type: 'input',
    name: 'from',
    message: 'from:'
  },
  {
    type: 'input',
    name: 'subject',
    message: 'subject:'
  },
  {
    type: 'input',
    name: 'html',
    message: 'html:'
  }
];

/**
 * getFieldsConf - description
 *
 * @private
 * @param  {type} answers description
 * @return {type}         description
 */
function getFieldsConf (answers) {
  return answers;
}

/**
 * askQuestions - description
 *
 * @public
 * @return {type}  description
 */
function askQuestions () {
  inquirer.prompt(QUESTIONS)
    .then(function (answers) {
      let fieldsConf = getFieldsConf(answers);
      writeConf(fieldsConf, FIELDS_JSON_PATH, function cb () {
        console.log('The configuration was saved!');
      });
    });
}

export {
  askQuestions
};
