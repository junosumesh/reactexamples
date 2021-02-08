import React from 'react';
function Hello() {
    const sayHello=()=>{
        console.log("Hello, welcome to react")
      }
    return(<div>
       <h3>This is the sayhello compomenet</h3>
        <button onClick={sayHello}>Cleck me</button>
    </div> )
}

export default Hello;