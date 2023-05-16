import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="flex justify-between items-center p-3 bg-[#2f2d52] h-[50px] text-[#ddddf7] box-border">
      <span className="logo font-bold">Next Chat</span>
      <div className="user flex gap-3 items-center">
        <img src={currentUser.photoURL} alt="" className="bg-[#ddddf7] h-7 w-7 rounded-[50%] object-cover"/>
        <span className='text-[14px]'>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)} className='bg-[#5d5b8d] text-[#ddddf7] border-none text-[10px] cursor-pointer p-1'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar