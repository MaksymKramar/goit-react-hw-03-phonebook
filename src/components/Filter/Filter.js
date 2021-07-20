import React from 'react';
import PropTypes from 'prop-types'


import{Container,TextP} from './Filter.style'

function Filter({ value, onChange }) {
    return (
      <Container>
          <TextP>Find contacts by name</TextP>
          <input placeholder="Search" type="text" value={value} onChange={onChange} />        
      </Container>
    )
}

export default Filter

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};