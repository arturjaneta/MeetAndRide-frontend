import React from 'react';
import { NavLink } from 'react-router-dom'
import { Columns } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const MenuItem = ( {navTo, icon, text, onClick}) => {
  return (
    <NavLink to={navTo} activeClassName="is-active" onClick={onClick}>
      <li>
        <Columns className="pl-2">
          <Columns.Column size={2}>
            <FontAwesomeIcon icon={icon}/>
          </Columns.Column>
          <Columns.Column>
            {text}
          </Columns.Column>
        </Columns>
      </li>
    </NavLink>
  )
}

MenuItem.propTypes = {
  navTo: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string
};

export default MenuItem;