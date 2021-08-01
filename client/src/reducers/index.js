import { combineReducers } from 'redux';

import events from './events';
import admin from './admin';
import projects from './projects';
export const reducers = combineReducers({events,projects, admin});
