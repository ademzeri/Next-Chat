import {Navbar} from "../components"
import {Search} from "../components"
import {Chats} from "../components"
function Sidebar() {
  return (
    <div className="flex-[1] bg-[#3e3c61]">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar