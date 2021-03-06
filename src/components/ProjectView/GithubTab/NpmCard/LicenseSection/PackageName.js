import React from 'react'
import PropTypes from 'prop-types'

const PackageName = ({ name }) => {
  // const [nameOnly, versionOnly] = name.split('@')
  const re = /(.*)@(.*)$/
  const [_, nameOnly, versionOnly] = re.exec(name) //eslint-disable-line no-unused-vars
  const url = `https://npm.im/${nameOnly}`
  return (
    <span>
      <a href={url}>{nameOnly}</a>{' '}
      <span className="text-secondary">{versionOnly}</span>
    </span>
  )
}

PackageName.propTypes = {
  name: PropTypes.string.isRequired
}

export default PackageName
