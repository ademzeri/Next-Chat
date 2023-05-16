import './message.css'
import hama from '../assets/images/hama.jpg'

function Message() {
  return (
    <div id='owner' className=" message flex flex-row px-3 py-2 text-[grey] gap-3">
      <div className="message-user flex flex-col items-center">
        <img src={hama} alt="" className="w-8 rounded-[50%] object-cover"/>
        <p>Just now </p>
      </div>
      <div className=" flex flex-col gap-2 items-end">
        <p className='message-text text-[black] bg-[white] h-fit py-2 px-4 rounded-xl rounded-tl-none text-sm font-semibold max-w-[65%]  w-fit'>Hello there Lorem ipsum, </p>
         <img src={hama} alt="" className='w-[200px] pb-4' />
      </div>
    </div>
  )
}

export default Message