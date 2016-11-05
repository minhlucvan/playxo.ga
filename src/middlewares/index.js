import { init } from './initial.js';

import {APP_INIT_START, LANGUAGE_LOADED, IGNORE} from '../actions/actionType.js';

import { combineEpics } from 'redux-observable';

export default combineEpics(
	init
);