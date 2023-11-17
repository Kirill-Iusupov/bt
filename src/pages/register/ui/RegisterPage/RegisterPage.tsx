import Form from "../../../../entities/form/ui/Form"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const RegisterPage = () => {
  
  const auth = getAuth()

  const handleRegister= (email, password) =>{
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }
  
  return (
    <Form title={"Зарегистрироваться"} handleClick={handleRegister}/>
  )
}

export default RegisterPage
