import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [error , setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password =e.target.password.value
    try{ 
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }
    catch(err){
      setError(true)
      console.log("error : ",err)

    }

  }




  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <div className=" bg-[#fff] py-6 px-16 flex flex-col gap-4 rounded-lg justify-center items-center">
        <h1 className="text-secondary font-bold text-2xl">Next Chat</h1>
        <h3 className="text-secondary font-semibold text-lg">Login</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="email" type="email" placeholder="Email" className=" p-4 border-b-[1px]   w-[300px] border-b-secondary outline-none"/>
          <input name="password" type="password" placeholder="Password" className=" p-4 border-b-[1px] w-[300px] border-b-secondary outline-none"/>
          <button className="bg-tertiary text-[#fff] p-3 rounded-md font-bold border-none">Login</button>
          {error && <p className="text-red-500 text-sm">Something went wrong</p>}
        </form>
        <p className="text-secondary mt-3 text-sm">You dont have an account ? <Link to="/register" className=' underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login