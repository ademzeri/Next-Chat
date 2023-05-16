import {useState} from 'react'
import { collection, query, where,getDocs } from "firebase/firestore";
import {db} from '../firebase'

function Search() {
    const [username,setUsername] = useState('')
    const [user,setUser] = useState(null)
    const [error,setError] = useState(false)
  const handleSearch = async (e)=>{
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
  });
    }
    catch(err){
      setError(true)
      console.log(err)
    }
  }

  const handleKey = (e)=>{
    if(e.code === 'Enter'){
      handleSearch();
    }
  }
  return (
    <div className="search border-b">
      <div className="Search-form p-[10px]">
        <input onKeyDown={handleKey} onChange={(e)=>setUsername(e.target.value)} placeholder="Find a user" type="text" className='text-sm bg-[rgba(0,0,0,0)] border outline-none border-none text-[white]'/>
      </div>
      {error && <span>User not found!</span>}
      {user && <div className="user-chat p-3 flex items-center gap-3 text-[white] cursor-pointer text-sm hover:bg-[#2f2d52]">
        <img src={user.photoURL} alt="" className="h-[50px] w-[50px] rounded-[50%] object-cover "/>
        <div className="user-info">
          <span className='text-[18px] font-[400]'>{user.displayName}</span>
        </div>
      </div>}
      
    </div>
  )
}
export default Search