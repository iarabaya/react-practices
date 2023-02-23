import React, {useState} from 'react'

const Example = () => {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");
  
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

export default Example