import ArrowUpSvg from "../component/ArrowUpSvg";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <div className="px-5 md:px-20 lg:px-52 xl:px-64">
        <section className="pt-32 ">
          <h1 className=" font-medium">Carl Justine Mosquida</h1>
          <p className=" text-sm leading-6 md:pr-12 lg:pr-32 xl:44 text-gray-600">
            Software Developer
          </p>

          <div className="pt-6 md:w-3/5">
            <p className=" text-sm">
              Officia praesentium earum, quasi perferendis aspernatur dolorum
              nobis aperiam repudiandae, quidem voluptates enim? Non, ex. Harum,
              ab qui. Laudantium neque tempora aspernatur? Officia praesentium
              earum, quasi perferendis aspernatur dolorum nobis aperiam
              repudiandae, quidem voluptates enim? Non, ex. Harum, ab qui.
              Laudantium neque tempora aspernatur?
            </p>
          </div>
        </section>

        <section className=" pt-24">
          <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
            <div>
              <h2 className="text-sm py-2">Education</h2>
            </div>

            <div className="pt-5 md:pt-0">
              <p className=" text-sm">
                Officia praesentium earum, quasi perferendis aspernatur dolorum
                nobis aperiam repudiandae, quidem voluptates enim? Non, ex.
                Harum, ab qui. Laudantium neque tempora aspernatur?
              </p>
            </div>
          </div>
        </section>

        <section className=" pt-32">
          <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
            <div>
              <h2 className="text-sm py-2">Experience</h2>
            </div>

            <div className="pt-5 md:pt-0">
              <p className=" text-sm">
                Officia praesentium earum, quasi perferendis aspernatur dolorum
                nobis aperiam repudiandae, quidem voluptates enim? Non, ex.
                Harum, ab qui. Laudantium neque tempora aspernatur?
              </p>
            </div>
          </div>
        </section>

        <section className=" py-32">
          <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
            <div>
              <h2 className="text-sm py-2">Contact</h2>
            </div>

            <div className="pt-5 md:pt-0">
              <div className="flex gap-2 pt-2 hover:text-blue-600 duration-500">
                <a
                  href="mailto:mosquidacarljustine@gmail.com"
                  className="text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mosquidacarljustine@gmail.com
                </a>
                <ArrowUpSvg />
              </div>

              <div className="flex gap-2 pt-2 hover:text-blue-600 duration-500">
                <a
                  href="https://github.com/mosquida"
                  className="text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/mosquida
                </a>
                <ArrowUpSvg />
              </div>

              <div className="flex gap-2 pt-2 hover:text-blue-600 duration-500">
                <a
                  href="https://www.linkedin.com/in/carl-justine-mosquida/"
                  className="text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/carl-justine-mosquida
                </a>
                <ArrowUpSvg />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
