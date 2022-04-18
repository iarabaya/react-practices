import React, { useEffect, useState } from 'react'

const Congrats = () => {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(()=>{
    console.log(`Celebrate ${name}`);
  }, [name]); //empty runs just once, if [name] rerenders on every change of the state

  useEffect(() => {
    console.log(`The user is: ${ admin ? "admin" : "not admin"}`);
  }, [admin]) //without the dependency or empty [] runs every time anything changes
  

  return (
    <section>
      <p>Congratulations! { name }</p>
      <button onClick={()=> setName("Michael")}>
        Change Winner
      </button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>
        Log in
      </button>
    </section>
  )
}

export default Congrats