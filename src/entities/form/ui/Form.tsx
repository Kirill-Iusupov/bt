import { FC, useState } from 'react'



const Form:FC<{title: string, handleClick:()=>void}> = ( {title, handleClick} ) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (

    <div className={"flex flex-col w-[350px]"}>
        <input 
              type="email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder={"E-Mail"} />

        <input 
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder={"Password"} />
        <button 
          onClick={()=>handleClick(email, password)}
        >
            {title}
        </button>
    </div>
  )
}

export default Form
