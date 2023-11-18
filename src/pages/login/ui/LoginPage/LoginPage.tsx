import Form from "../../../../entities/form/ui/Form"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
const LoginPage = () => {
  
  const auth = getAuth()

  const handleLogin= (email, password) =>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log) 
      .catch(console.error)
  }
  
  return (
    <Form title={"Войти"} handleClick={handleLogin}/>
  )
}

export default LoginPage
