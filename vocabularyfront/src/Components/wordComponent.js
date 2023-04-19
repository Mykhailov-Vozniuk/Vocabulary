import React, {useState, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {actionMark} from '../Redux/Actions/actions'
import {fetchMark} from '../Redux/Actions/thunkActions'
import {wordComponent} from './wordComponent';

export const WordComponent = (props) => {
	const dispatch = useDispatch()

	const state = props
	const mark = () => {
		dispatch(fetchMark(dispatch, actionMark, state.id))
	}

	return(
		<li className={"word-li"} style={{backgroundColor: state.learnt ? '#41729F' : '#FFFFFF'}} key={state.id}>
			<div className={"word-box"}>
				<b className="word">{state.word}</b>
				{state.definitions.reduce((acc, elem) => {
					acc.push(<p>{elem.definition}</p>)
					return acc
				},[])}
			</div>
			<button className={"mark"} onClick={mark}>learnt</button>
		</li>
	)
}