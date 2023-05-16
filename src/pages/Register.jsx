import Avatar from "../assets/images/addAvatar.png"
import {useState} from 'react'
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,storage,db} from  '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'

function Register() {
  const [error , setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target.displayName.value;
    const email = e.target.email.value
    const password =e.target.password.value
    const file = e.target[3].files[0]
    try{ 
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res.user)

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef,file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        console.log(error)
      }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      try{
        await updateProfile(res.user,{
          displayName,
          photoURL: downloadURL
        });
        console.log("fetch")
      }
      catch(err){
        console.log(err)
      }
      await setDoc(doc(db,"users",res.user.uid),{
      uid:res.user.uid,
      displayName,
      email,
      photoURL:downloadURL
     });
     await setDoc(doc(db,"userChats",res.user.uid),{})
     navigate("/")
    });
  }
);

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
        <h3 className="text-secondary font-semibold text-lg">Register</h3>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input name="displayName" type="text" placeholder="Display name" className=" p-4 border-b-[1px] w-[300px]  border-b-secondary outline-none"/>
          <input name="email" type="email" placeholder="Email" className=" p-4 border-b-[1px]   w-[300px] border-b-secondary outline-none"/>
          <input name="password" type="password" placeholder="Password" className=" p-4 border-b-[1px] w-[300px] border-b-secondary outline-none"/>
          <input type="file" id="file" className=" hidden name='image' "  />
          <label htmlFor="file" className="flex flex-row cursor-pointer items-center gap-4 text-quaternary text-sm my-4">
            <img src={Avatar} alt="Add avatar"className="w-8" />
            <p>Add an avatar</p>
          </label>
          <button className="bg-tertiary text-[#fff] p-3 rounded-md font-bold border-none">Sign up</button>
          {error && <p className="text-red-500 text-sm">Something went wrong</p>}
        </form>
        <p className="text-secondary mt-3 text-sm">Do you have an account ? <Link to="/login" className=' underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register