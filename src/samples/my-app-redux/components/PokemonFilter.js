import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from './StyledComponents'

import { Input } from './StyledComponents'

function PokemonFilter() {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)
  return (
    <Input
      type='text'
      value={filter}
      onChange={(e) => {
        dispatch({
          type: 'SET_FILTER',
          payload: e.target.value,
        })
      }}
    />
  )
}

export default PokemonFilter
