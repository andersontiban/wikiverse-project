import React, { useState, useEffect } from 'react';

export const Page = (props) => {
  let[facts, setFacts] = useState([]);

  const[show, setShow] = useState(false);

    async function handleClick(slug){
    console.log(slug)
    const res = await fetch(`http://localhost:3000/api/wiki/${slug}`, {
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = await res.json()
    await setFacts(data)

    console.log(facts.author)
    setShow(!show);
}




  return <div>
    <h3 onClick = {()=> handleClick(props.page.slug)}> {props.page.title}</h3>
    {show && <h3>{Object.values(facts.author).map((fact) => <h5>{fact}</h5>)}</h3>}
    {show && <button onClick={()=>setShow(!show)}>Back to Wiki List</button>}
   
  </div>
} 
