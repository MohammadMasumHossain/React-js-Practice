import React from 'react'

import Card1 from './Component/Card1'
import Card2 from './Component/Card2'
import Components from './Component/index'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index'
import EVENT_BINDING from './EVENT_BINDING/index'
import HOOKS_USESTATE1 from './HOOKS_USESTATE/index1'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/index2'
import HOOKS_USESTATE3 from './HOOKS_USESTATE/index3'
import FORM from './FORM'
import Child from './State_lifting/Child'
import Signup from './Signup'
import Toggle from './Component/Toggle'




import STATE from './STATE'
import { FaFacebook } from "react-icons/fa"
import Reactboostrap from './Component/Reactboostrap'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const data=" I am from parent(app)";
  const handleStateChild=(data)=>{
  console.log(data)
  }
  return (
    <div >
     
     <Card1 name="masum" desc="i live in gazipur"/>
     <Card2 name="nishat"/>
     <span>
        <FaFacebook className='icon'/>
     </span>
     <Reactboostrap/>
     <STATE  />
      <Components />
      <EVENT_HANDLER_CLASS/>
      <EVENT_BINDING />
      <HOOKS_USESTATE1/>
      <HOOKS_USESTATE2/>
      <HOOKS_USESTATE3 />
      <FORM />
      <Child data={data} onChildData={handleStateChild}/>
      <Signup />
      <Toggle />
    
      
    
     
    </div>
  )
}

export default App;
