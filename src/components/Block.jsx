import React, { useRef, useState } from 'react'

const Block = ({flagHandler, index}) => {

  const [value, setValue] = useState('')

  const clickHandler = () => {
    if(value==='')
      flagHandler(setValue, index)    
  }

  return (
    <div className='w-20 h-20 border-2 border-collapse text-center p-6' onClick={clickHandler}>
      { value!=='' && <img src={`${value}.jpg`} /> }
    </div>
  )
}

export default Block