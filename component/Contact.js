import ArrowUpSvg from "../component/ArrowUpSvg";

export default function Contact() {
  return (
    <>
      <section className="py-16 md:py-32">
        <div className="md:grid grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-sm py-2">Contact</h2>
          </div>

          <div className="md:pt-0">
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
    </>
  );
}
