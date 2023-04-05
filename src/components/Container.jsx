import React, { useRef, useState } from 'react'
import Block from './Block'

const Container = () => {

  const [gameOver, setGameOver] = useState(false)

  let xoFlag = useRef(true);
  let values = []

  const verifyWin = () => {
      
    for(let i=0; i<3; i++)
    {
      if( values[3*i+0] != undefined && values[3*i+0] == values[3*i+1] && values[3*i+0] == values[3*i+2] )
        return true
      if( values[i] != undefined && values[i] == values[i+3] && values[i] == values[i+6] )
        return true      
    }
    
    if( values[0] != undefined && values[0] == values[4] && values[0] == values[8] )
      return true
    if( values[2] != undefined && values[2] == values[4] && values[2] == values[6] )
      return true
  }

  const handler = (setValue, index) => {
    setValue(xoFlag.current ? 'x':'o')
    values[index] = xoFlag.current

    if(verifyWin())
      setGameOver(true)
    else
      xoFlag.current = !xoFlag.current
  }

  return (
    <>
    { !gameOver ? (
        <div className='flex flex-col bg-white shadow-lg'>
          <div className='flex'>
            <Block flagHandler={handler} index={0} />
            <Block flagHandler={handler} index={1} />
            <Block flagHandler={handler} index={2} />
          </div>
          <div className='flex'>
            <Block flagHandler={handler} index={3} />
            <Block flagHandler={handler} index={4} />
            <Block flagHandler={handler} index={5} />
          </div>
          <div className='flex'>
            <Block flagHandler={handler} index={6} />
            <Block flagHandler={handler} index={7} />
            <Block flagHandler={handler} index={8} />
          </div>
          
        </div>
      ) : ( 
        <div>
          <img src='congrats.jpg' />
          <h1 className='text-3xl font-semibold'>Player 
            <img src={`${xoFlag.current ? 'x':'o'}.jpg`} className='inline h-12 w-12 mx-2'/>
           is a winner!!!</h1>
        </div>
      )
    }
    </>
  )
}

export default Container