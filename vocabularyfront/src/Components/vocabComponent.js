import React, {useState, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {fetchLoad} from '../Redux/Actions/thunkActions'
import {actionMark, actionLoad} from '../Redux/Actions/actions'
import {WordComponent} from './wordComponent';
import Pager from 'react-pager';

export const VocabComponent = () =>{
	const dispatch = useDispatch()

	const words = useSelector((state) => state.vocab.wordList)
	const [showLearnt, setShowLearnt] = useState(false)
	const [page, setPage] = useState(1)

	useEffect(() => {
		dispatch(fetchLoad(dispatch, actionLoad, page))
	}, [page])

	const handlePageChanged = (newPage)=>{
		setPage(newPage+1)
	}

	return(
		<div className="vocabulary">
			<div className="word-container">
	            <ul>
	            	{
	            		words.map(elem => WordComponent({id: elem._id, word: elem.word, learnt: elem.learnt, definitions: elem.definitions}))
					}
	          	</ul>
	          	
	      	</div>
	      	<div className="pag">
	      		<Pager class = 'pagination'
		        	total={496}//496
		            current={page}
		            visiblePages={10}
		            titles={{ first: '<|', last: '>|' }}
		            className="pagination-sm pull-right"
		            onPageChanged={handlePageChanged}
		        />
		    </div>
		</div>
	)
}