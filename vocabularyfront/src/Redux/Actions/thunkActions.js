import {getState} from 'react-redux';

export const fetchLoad = (dispatch, action, page) => {
	return async function thunkLoad(dispatch, getState){
		console.log('dispatch')
		fetch('http://localhost:4000/getWords',{
				"method": "POST",
				headers: {
			      'Content-Type': 'application/json',
			      'Accept': 'application/json'
			    },
			    body: JSON.stringify({page: page})
			})
			.then(data => data.json())
			.then(res => {
				dispatch(action(res))
			})
	}
}

export const fetchMark = (dispatch, action, id) => {
	return async function thunkMark(dispatch, getState){
		console.log('id',id)
		fetch('http://localhost:4000/markWord',{
				"method": "POST",
				headers: {
			      'Content-Type': 'application/json',
			      'Accept': 'application/json'
			    },
			    body: JSON.stringify({_id: id})
			})
			.then(data => data.json())
			.then(res => {
				dispatch(action(res))
			})
	}
}