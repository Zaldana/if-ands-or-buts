const prompt = require('prompt-sync')();

const pinPrompt = prompt('Please enter PIN');

const pinCode = '1234';

if (pinPrompt === pinCode) {
    console.log('success');
}  else {
    console.log('failure');
}