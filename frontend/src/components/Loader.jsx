import React, { useState } from 'react'

const Loader = () => {
    const [isLoading, setIsLoading] = useState(false);
    function HandleLoading(){ 
        //const loader = document.querySelector(".loader");
        //console.log(loader.classList.add('.loader-hidden'))
        alert("hellow");
    }
  return (
   <div className="loader"></div>
  )
}

export default Loader