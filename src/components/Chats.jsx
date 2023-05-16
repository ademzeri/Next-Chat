import adem from '../assets/images/adem.jpg'

function Chats() {
  return (
    <div>
        <div className="user-chat p-3 flex items-center gap-3 text-[white] cursor-pointer text-sm hover:bg-[#2f2d52]">
          <img src={adem} alt="" className="h-[50px] w-[50px] rounded-[50%] object-cover "/>
          <div className="user-info">
            <span className='text-[18px] font-[400]'>Adem</span>
            <p className='text-[14px] font-[300]'> Hello</p>
          </div>

        </div>
        <div className="user-chat p-3 flex items-center gap-3 text-[white] cursor-pointer text-sm hover:bg-[#2f2d52]">
          <img src={adem} alt="" className="h-[50px] w-[50px] rounded-[50%] object-cover "/>
          <div className="user-info">
            <span className='text-[18px] font-[400]'>Adem</span>
            <p className='text-[14px] font-[300]'> Hello</p>
          </div>

        </div>
        <div className="user-chat p-3 flex items-center gap-3 text-[white] cursor-pointer text-sm hover:bg-[#2f2d52]">
          <img src={adem} alt="" className="h-[50px] w-[50px] rounded-[50%] object-cover "/>
          <div className="user-info">
            <span className='text-[18px] font-[400]'>Adem</span>
            <p className='text-[14px] font-[300]'> Hello</p>
          </div>

        </div>
    </div>
  )
}

export default Chats