import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getTodo} from '../check_user'
const Todos = () => {
  
   const [todo,setTodo]=useState(null)
  const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    const userid = user.id

   useEffect(()=> {
   getTodo(userid)
    .then(todos=>setTodo(todos))
   },[])

  const hendleChange = (e) => {
console.log(e.target.value);
const newList = [...todo]
switch (e.target.value) {
  case 'serial':
    setTodo(newList.sort((a, b) => a.id > b.id ? 1 :a.id < b.id ? -1 : 0));
    console.log(newList);
    break;
    case 'chacked':
      setTodo(newList.sort((a, b) => a.completed < b.completed ? 1 : -1 ));
       
      break;
      case 'alphabet':
        setTodo(newList.sort((a, b) => a.title > b.title ? 1 :a.title < b.title ? -1 : 0));
        console.log(newList);
        break;
        case 'random':
          setTodo(newList.sort((a, b) => Math.random()  > 0.5 ? 1 : -1));
         
          break;
  default:
    break;
    setTodo(newList)
}
  }
   
   
     

  return (
    <>
    <h2>Todos</h2>  
    <select  onChange={hendleChange}>
    <option value="" >Select The Order</option> 
  <option value="serial">serial</option>
  <option value="chacked">chacked</option>
  <option value="alphabet">alphabet</option>
  <option value="random">random</option>
  </select>
    {todo && todo.map((i,x)=> <div key={x}><input type="checkbox" checked={i.completed} />{i.title}</div>)}
  

  </>)
}

export default Todos