export const actionMark = (word) => {
	return{
		type: 'MARKED',
		payload: word
	}
}

export const actionLoad = (words) => {
	return{
		type: 'LOADED',
		payload: words
	}
}