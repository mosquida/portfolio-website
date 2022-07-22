import Nav from '../../component/Nav'

export default function project() {
  return (
    <>
      <Nav />
      <div className="px-5">
back to projects
        <section className="pt-10 flex gap-10">

          <div className="pt-2">
            <div className="mb-5 px-2 py-4 rounded-md bg-slate-800 text-white">
              <p className="text-xs font-light">Angular</p>
            </div>
            <div className="mb-5 px-2 py-4 rounded-md bg-slate-800 text-white">
              <p className="text-xs font-light">.NetCore</p>
            </div>
            <div className="mb-5 px-2 py-4 rounded-md bg-slate-800 text-white">
              <p className="text-xs font-light">Tailwind</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-medium">Project <br/> Zero</p>
            <p className=" text-sm pt-5 font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui.
            </p>

            <p className=" text-sm pt-5 font-light">Feature:</p>
            <ul className="list-disc pl-5 marker:text-blue-600">
              <li className="text-sm font-light">
                <p>· asas</p>
              </li>
              <li className="text-sm font-light">
                <p>· asas</p>
              </li>
            </ul>

            <div className="py-10 flex items-center gap-5">
              <a href="#" className=" border rounded-full px-6 py-3 text-xs font-light border-gray-300 hover:bg-black hover:text-white duration-500">Github Code </a>

              <div class="relative">
                <a href="#" className=" border rounded-full px-6 py-3 text-xs font-light border-gray-300 hover:bg-black hover:text-white duration-500">Online Demo</a>
                <div class="absolute top-0 right-0 -mr-1 -mt-2 w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                <div class="absolute top-0 right-0 -mr-1 -mt-2 w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}
