// Modules

// import modules here

import accordion from './modules/accordion.mjs';
import tabs from './modules/tabs.mjs';
import { playGuitar, playBass } from './modules/guitar.mjs';

import User from './modules/user.mjs';

accordion();
tabs();

console.log(playGuitar());
console.log(playBass());

const me = new User('Ken John', 'kjsiosan@gmail.com');

console.log(me);
console.log(me.greeting());
