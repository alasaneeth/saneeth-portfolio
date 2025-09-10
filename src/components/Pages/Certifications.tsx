import { CERTIFICATIONS } from "../ExportedFiles/Certifications";

const Certifications = () => {
  return (
    <section className="w-full py-12 bg-white">
      <h2 className="mx-4 text-xl md:text-2xl font-semibold text-gray-800 text-center">
        Certifications and Badges
      </h2>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Divider with Title */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 border-t border-gray-400"></div>
          <h5 className="mx-4 text-xl md:text-2xl font-semibold text-gray-800 text-center">
            From Microsoft
          </h5>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert,index) => (
            <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg shadow-sm hover:shadow-md transition">
              <img className="w-10 h-10" src={cert.logo} alt="Logo" />
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="!no-underline !text-black hover:!no-underline focus:!no-underline"
              >
                {cert.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
