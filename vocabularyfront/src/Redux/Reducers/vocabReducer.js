export default function vocabReducer (state = {
		wordList: []
	}, action) {
	switch(action.type){
		case "LOADED":
			let tmp = action.payload
			return {
				...state,
				wordList: tmp
			}
		case "MARKED":
			let jmp = Array.from(state.wordList)
			let index = jmp.findIndex(e => e._id == action.payload._id)
			jmp[index] = action.payload
			return {
				...state,
				wordList: jmp
			}
		default:
			return state
	}
}