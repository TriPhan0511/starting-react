import PropTypes from 'prop-types'

const PokemonType = PropTypes.shape({
	id: PropTypes.string,
	name: PropTypes.shape({
		english: PropTypes.string,
		japanese: PropTypes.string,
		chinese: PropTypes.string,
		french: PropTypes.string,
	}),
	type: PropTypes.arrayOf(PropTypes.string),
	base: PropTypes.shape({
		Attack: PropTypes.number,
		Defense: PropTypes.number,
		HP: PropTypes.number,
		'Sp. Attack': PropTypes.number,
		'Sp. Defense': PropTypes.number,
		Speed: PropTypes.number,
	}),
})
// const PokemonType = PropTypes.shape({
// 	id: PropTypes.string.isRequired,
// 	name: PropTypes.shape({
// 		english: PropTypes.string.isRequired,
// 		japanese: PropTypes.string.isRequired,
// 		chinese: PropTypes.string.isRequired,
// 		french: PropTypes.string.isRequired,
// 	}),
// 	type: PropTypes.arrayOf(PropTypes.string.isRequired),
// 	base: PropTypes.shape({
// 		Attack: PropTypes.number.isRequired,
// 		Defense: PropTypes.number.isRequired,
// 		HP: PropTypes.number.isRequired,
// 		'Sp. Attack': PropTypes.number.isRequired,
// 		'Sp. Defense': PropTypes.number.isRequired,
// 		Speed: PropTypes.number.isRequired,
// 	}),
// })

export default PokemonType
