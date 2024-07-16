import React,{useid} from "react";

function Input(props){

    const changeHanler =(e)=>{
        if(e.key == "Enter"){
               props.addHandler(e.target.value)

               e.target.value=""
        }
    }

    
    return( 

        <div className="card p-2">
            <input type="text" name="" onKeyUp={changeHanler} className="diplay-box" />
            
        </div>
    )

}
export default Input