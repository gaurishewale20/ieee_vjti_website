import { combineReducers } from 'redux';

import events from './events';
import admin from './admin';

export const reducers = combineReducers({events, admin});
