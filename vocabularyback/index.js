const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

async function cnct() {
	await mongoose.connect('mongodb://localhost/vocabularydb', {useNewUrlParser: true})
	.then(e => console.log('connected'))
}

cnct()

var db = mongoose.connection;

var userSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	login: String,
	password: String,
	vocabulary: [{type: mongoose.Schema.Types.ObjectId, ref: 'Word'}]
})

var wordSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	word: String,
	learnt: Boolean,
	definitions: []
})
var User = mongoose.model('User', userSchema)
var Word = mongoose.model('Word', wordSchema)

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(cors())

app.post('/getWords', async(req, res) => {
	let index = req.body.page * 10 - 10
	let words = await Word.find({}, null, { skip: index }).limit(10)
	if(words) {
		res.status(201).json(words)
	}
	else{
		res.status(404).json('not found')
	}
})

app.post('/markWord', async(req, res) => {
	const filter = req.body
	const update = { learnt: true }
	let word = await Word.findOne(filter)
	word.learnt = !word.learnt
	await word.save()
	if(word){
		res.status(201).json(word)
	}
	else{
		res.status(404).json('not found')
	}
})

app.get('/', async (req, res) => res.send("Vocabulary"))

app.listen(4000, function () {
})