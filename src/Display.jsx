import React from "react"

function Display (props){


    return(
  <div className='card mt-2 d-flex flex-column'>
    {
        props.todos.map(
            (item,i)=> <div key={i} className="bg-dark   text-white position-relative p-3 mb-2">{item}
              <button className="btn btn-primary me-3 mb-5  position-absolute end-0" onClick={()=>props.delTask(i)}>X</button>
            </div>
        )
    }
   
    

  </div>
    )
}
export default Display