import {Chat} from "../components/"
import {Sidebar} from "../components/"

function Home() {
  return (
    <div  className="Home bg-primary h-screen flex flex-row items-center justify-center ">
      <div className="border border-[#fff] w-2/3 h-5/6 rounded-lg flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>

    </div>
  )
}

export default Home