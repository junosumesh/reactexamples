import React,{useState} from 'react';
//import Hello from './sayHello';
import Tweet from "./Tweet";


function App1(){

const [isRed, setRed]=useState(true);
const[addnumber,setaddnumber]= useState(0);

const[users,setusers]=useState([
  {name:'juno',age:43},
  {name:'sumesh',age:47},
  {name:'susanna',age:16}
]
)

const increment=()=>{
  setaddnumber(addnumber+1)
  setRed(!isRed);
}

  return(
    <div className='app'>
      {
        users.map(user=>(
<Tweet name={user.name} age={user.age} />

        ))}
      
    </div>
  )
}

export default App1;