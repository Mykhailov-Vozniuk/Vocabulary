import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import vocabReducer from './Reducers/vocabReducer';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: {
		vocab: vocabReducer
	},
	middleware: [thunk]
})

export default store;
