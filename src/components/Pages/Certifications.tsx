import { badges, CERTIFICATIONS } from "../ExportedFiles/Certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-12 bg-white">
      <h2 className="mx-4 text-xl md:text-2xl font-semibold text-gray-800 text-center mb-12">
        Certifications and Badges
      </h2>

      {/* Badges Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
        {/* Divider with Title for Badges */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <h3 className="mx-4 text-lg md:text-xl font-semibold text-gray-700 capitalize">
            Badges
          </h3>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Badges Grid */}
        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Badge Image Container */}
              <div className="p-4 bg-white">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-gray-400 text-sm text-center">
                   <a href={badge.url} target="_blank" className="block transition-transform duration-300 hover:scale-110">
                     {badge.image}
                  </a>
                  </span>
                </div>
              </div>

              {/* Badge Details */}
              <div className="p-4 border-t border-gray-100">
                <h5 className="font-semibold text-center text-gray-800 text-sm mb-2">
                  {badge.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
   {/* Certifications Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12">
  {/* Divider with Title for Certifications */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex-1 border-t border-gray-300"></div>
    <h3 className="mx-4 text-lg md:text-xl font-semibold text-gray-700 capitalize">
      Certifications
    </h3>
    <div className="flex-1 border-t border-gray-300"></div>
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {CERTIFICATIONS.map((cert, index) => (
      <div
        key={index}
        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50"
      >
        <img
          className="w-16 h-16 flex-shrink-0 object-contain"
          src={cert.logo}
          alt={`${cert.title} logo`}
        />
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600 transition-colors duration-200 text-sm md:text-base leading-relaxed flex-1"
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
