
function Input() {
  return (
    <div className="h-[50px] bg-[white] p-3 flex items-center justify-between">
      <input type="text" placeholder="Type something..." className="outline-none w-full text-[#2f2d52]"/>
      <div className="send flex items-center gap-4 justify-center">
        <svg className="cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg>
        <input type="file" id="file" className="hidden"/>
        <label htmlFor="file"  >
          <svg className="cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.002 2h-12a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zm-12-1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12z" clipRule="evenodd"></path><path d="M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"></path><path fillRule="evenodd" d="M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd"></path></svg> 
        </label>
        <button className="bg-[#A7BCFF] py-2 px-3 rounded-md text-[white] font-semibold">Send</button>
      </div>
    </div>
  )
}
export default Input