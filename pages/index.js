import ArrowRightSvg from "../component/ArrowRightSvg";
import Education from "../component/Education";
import Experience from "../component/Experience";
import Contact from "../component/Contact";
import Project from "../component/Project";

export default function Home() {
  return (
    <>
      <div className="px-5 md:px-20 lg:px-52 xl:px-64">
        <section className="pt-32 ">
          <h1 className=" font-medium">Carl Justine Mosquida</h1>
          <p className=" text-sm leading-6 md:pr-12 lg:pr-32 xl:44 text-gray-600">
            Software Developer
          </p>

          <div className="pt-6 md:w-3/5">
            <p className="pb-10 text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum
              nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum,
              ab qui. Laudantium neque tempora aspernatur? Officia praesentium
              earum, quasi perferendis aspernatur dolorum nobis aperiam
              repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui.
              Laudantium neque tempora aspernatur?
            </p>
          </div>
          <div className=" pt-2 text-blue-600 relative max-w-max flex gap-2 items-center">
            <a
              href="#"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              link to my résumé
            </a>
            <ArrowRightSvg />
            <div class="absolute top-0 right-0 -mr-5 -mt-1 w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>
            <div class="absolute top-0 right-0 -mr-5 -mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
        </section>

        <Project />

        <Experience />

        <Education />

        <Contact />
      </div>
    </>
  );
}
