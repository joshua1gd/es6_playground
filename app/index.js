console.log('App working: open app/index.js to start exploring ES6');

import {Person, SuperPerson} from './person';

const bob = new Person("Bob");
const superLisa = new SuperPerson('Lisa', 'Running really fast');

bob.greet();

superLisa.greet();

superLisa.saySuperpower();



