import React from 'react';
import PropTypes from 'prop-types';

  const Location = ({city}) => (
      <div className = 'locationCont' >
        <h2 className = 'title-city'>{city}</h2>
      </div>    
  )
Location.propTypes = {
  city: PropTypes.string.isRequired,
}
export default Location;