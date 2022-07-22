import Navbutton from "../svg/navbutton";

export default function Nav() {
  return (
    <>
      <nav className=" px-5 py-5 flex justify-between items-center">
        <div className="">
          <h1 className=" font-medium text-lg">mosquids</h1>
        </div>
        <div className="flex justify-between items-center gap-5">
          <a href="#contact" className=" border rounded-full px-6 py-2 text-xs border-gray-300 hover:bg-black hover:text-white duration-500">Contact</a>
          <Navbutton />
        </div>
      </nav>
    </>
  )
}
