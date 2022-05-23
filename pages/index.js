
import Navbutton from "../svg/navbutton";

export default function Home() {
  return (
    <div className="px-5">
      <nav className=" py-5 flex justify-between items-center">
        <div className="">
          <h1 className=" font-medium text-lg">mosquids</h1>
        </div>
        <div className="flex justify-between items-center gap-5">
          <a href="#contact" className=" border rounded-full px-6 py-2 text-xs border-gray-300 hover:bg-black hover:text-white duration-500">Contact</a>
          <Navbutton />
        </div>
      </nav>

      <section className="pt-10 md:grid grid-cols-3 gap-10">
        <h1 className=" font-light text-5xl">Carl Justine<br/> Mosquida</h1>

        <p className=" text-sm pt-10 md:pt-0 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui.
        </p>
        <p className=" text-sm pt-6 md:pt-0">
          Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui. Laudantium neque tempora aspernatur?
        </p>
      </section>

      <section className="pt-10">
        <h2 className=" text-lg font-light py-5 ">Latest Projects</h2>

        <div className="md:grid md:grid-cols-3 md:gap-5">
          <div className="px-5 py-5 mb-5 border rounded-lg hover:shadow-2xl hover:border-white duration-1000">
            <p className="text-sm pb-8 font-light">Ecommerce Application</p>
            <p className="text-xl font-medium pb-8">Project <br/> Zero</p>
            <div className="flex justify-between">
              <div className="text-xs flex gap-3 font-light">
                <p>Firebase</p>
                <p>Angular</p>
              </div>
              <div>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.316" height="17.929" viewBox="0 0 19.316 17.929" className="stroke-blue-500">
                  <path id="Path_42" data-name="Path 42" d="M10.339,5.939H6.113A2.032,2.032,0,0,0,4,7.879v9.7a2.032,2.032,0,0,0,2.113,1.939H16.677a2.032,2.032,0,0,0,2.113-1.939V13.7M14.565,4H20.9m0,0V9.818M20.9,4,10.339,13.7" transform="translate(-3 -2.587)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-5 mb-5 border rounded-lg hover:shadow-2xl hover:border-white duration-1000">
            <p className="text-sm pb-8 font-light">Ecommerce Application</p>
            <p className="text-xl font-medium pb-8">Project <br/> Zero</p>
            <div className="flex justify-between">
              <div className="text-xs flex gap-3 font-light">
                <p>Firebase</p>
                <p>Angular</p>
              </div>
              <div>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.316" height="17.929" viewBox="0 0 19.316 17.929" className="stroke-blue-500">
                  <path id="Path_42" data-name="Path 42" d="M10.339,5.939H6.113A2.032,2.032,0,0,0,4,7.879v9.7a2.032,2.032,0,0,0,2.113,1.939H16.677a2.032,2.032,0,0,0,2.113-1.939V13.7M14.565,4H20.9m0,0V9.818M20.9,4,10.339,13.7" transform="translate(-3 -2.587)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-5 mb-5 border rounded-lg hover:shadow-2xl hover:border-white duration-1000">
            <p className="text-sm pb-8 font-light">Ecommerce Application</p>
            <p className="text-xl font-medium pb-8">Project <br/> Zero</p>
            <div className="flex justify-between">
              <div className="text-xs flex gap-3 font-light">
                <p>Firebase</p>
                <p>Angular</p>
              </div>
              <div>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.316" height="17.929" viewBox="0 0 19.316 17.929" className="stroke-blue-500">
                  <path id="Path_42" data-name="Path 42" d="M10.339,5.939H6.113A2.032,2.032,0,0,0,4,7.879v9.7a2.032,2.032,0,0,0,2.113,1.939H16.677a2.032,2.032,0,0,0,2.113-1.939V13.7M14.565,4H20.9m0,0V9.818M20.9,4,10.339,13.7" transform="translate(-3 -2.587)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </a>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-5">
          <h2 className=" text-sm font-light py-5">Want to view more?</h2>
          <div class="relative">
          <a href="#" className=" border rounded-full px-6 py-3 text-xs border-gray-300 hover:bg-black hover:text-white duration-500">See more project here</a>
            <div class="absolute top-0 right-0 -mr-1 -mt-2 w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
            <div class="absolute top-0 right-0 -mr-1 -mt-2 w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
        </div>

      </section>

      <section className="pt-20">
       <h2 className=" text-lg font-light ">Background</h2>

        <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className=" text-base font-light py-2">Education</h2>  
            <p className=" text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui. Laudantium neque tempora aspernatur?
            </p>
          </div>

          <div className="pt-5 md:pt-0">
            <h2 className=" text-base font-light pt-5 pb-2 md:pt-0">Achievements</h2>  
            <p className=" text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui. Laudantium neque tempora aspernatur?
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20">
       <h2 className=" text-lg font-light ">Skills</h2>

        <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className=" text-base font-light py-2">Programming</h2>  
            <p className=" text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui. Laudantium neque tempora aspernatur?
            </p>
          </div>

          <div className="pt-5 md:pt-0">
            <h2 className=" text-base font-light pt-5 pb-2 md:pt-0">Technology</h2>  
            <p className=" text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui. Laudantium neque tempora aspernatur?
            </p>
          </div>
        </div>
      </section>

      

      <section className="py-20">
        <h2 className=" text-lg font-light" id="contact">Contact</h2>
        
        <div className="flex gap-2 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
          </svg>
          <p className=" text-sm">mosquidacarljustine@gmail.com</p>
        </div>

        <div className="flex gap-2 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 480 512">
            <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
          </svg>
          <p className=" text-sm">github.com/mosquida</p>
        </div>

        <div className="flex gap-2 pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
          <p className=" text-sm">linkedin.com/carljustinemosquida</p>
        </div>
      </section>


      
    </div>
  );
}
