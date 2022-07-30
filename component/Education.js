export default function Education() {
  return (
    <>
      <section className=" pt-24">
        <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-sm py-2">Education</h2>
          </div>

          <div>
            <div className="md:pt-0">
              <p className=" text-sm font-medium">Cavite State University</p>
              <p className=" text-sm">
                Bachelor of Science in Computer Science
              </p>
              <p className=" text-xs text-gray-600 font-montserrat">
                2019 - Current
              </p>
            </div>
            <div className="pt-5">
              <p className=" text-sm font-medium">
                Tanza National Trade School
              </p>
              <p className=" text-xs italic">Senior High School</p>
              <p className=" text-sm">Computer Programming - NC IV</p>
              <p className=" text-xs text-gray-600 font-montserrat">
                2017 - 2019
              </p>
            </div>
            <div className="pt-5">
              <p className=" text-sm font-medium">
                Tanza National Trade School
              </p>
              <p className=" text-xs italic">Junior High School</p>
              <p className=" text-sm">Computer System Servicing - NC II</p>
              <p className=" text-xs text-gray-600 font-montserrat">
                2013 - 2017
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
