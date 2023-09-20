import React from 'react'



export const A = () => {


    var scrollBtn =document.getElementById("btn");
    window.addEventListener("scroll",  function(){
      if(scrollY < 400 ){
       scrollBtn.classList.add("show");
      }
      else{
        scrollBtn.classList.remove("show");
      }
    })
    
    return (
    <div>
      
    </div>
  )
}

export default A



