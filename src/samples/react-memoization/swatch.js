import _ from 'lodash'

function memoedSwatch(color) {
	console.log(`memoedSwatch render ${color}`)
	return `memoedSwatch ${color}`
}

const memoedmemoedSwatch = _.memoize(memoedSwatch)

memoedSwatch('red')
memoedSwatch('blue')
memoedSwatch('red')
memoedSwatch('blue')
