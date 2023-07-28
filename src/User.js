import React from "react";
function User(props){
const {data}=props
          return(
                    <>
                    <h1>
                              User Component
                    </h1>
                    <h3> Name:{data.name}<br/>Age:{data.age} <br/> Number:{data.number}</h3>
                    </>
          )
}
export default User;