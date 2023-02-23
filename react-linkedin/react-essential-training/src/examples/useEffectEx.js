import React, {useEffect, useState} from 'react'

const Example2 = () => {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");

  // useEffect(() =>{
  //   console.log('The feeling is ', emotion);
  // },[]) // RUNS JUST ONCE, EMPTY DEPENDENCY ARRAY

  //these run whenever the dependency array elements change
  useEffect(() =>{
    console.log('The feeling is ', emotion);
  },[emotion])

  useEffect(() =>{
    console.log('The feeling is ', secondary);
  },[secondary])
  
  return (
    <>
      <p>I am feeling {emotion} and {secondary}.</p>
      <button onClick={() => setEmotion("Happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("Sad")}>
        Sad
      </button>
      <button onClick={() => setSecondary("Enthusiastic")}>
        Enthusiastic
      </button>
      <button onClick={() => setSecondary("Confident")}>
        Confident
      </button>
    </>
  )
}

export default Example2