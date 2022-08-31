import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({name, active}) => {
  return (
    <li className="nav-item">
        <a className={`nav-link ${active ? "active" : ""}`} href="#">{name}</a>
    </li>
  )
}

MenuItem.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool
}

export default MenuItem