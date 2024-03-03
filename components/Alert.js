import React from 'react'

function Alert(props) {
  const Any = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{Any(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
export default Alert

// {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */ }