import React from 'react'

function DemoOutput(props) {
    console.log('Demo Running');
  return (
    <p>{props.show ? 'This is new!' : ''}</p>
  )
}

export default React.memo(DemoOutput);