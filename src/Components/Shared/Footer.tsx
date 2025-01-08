const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="container mx-auto px-4">
        {/* Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* About Widget */}
          <div>
            <div className="mb-8">
              <img
                src="images/school-logo.png"
                alt="school logo"
                className="w-52 mb-4"
              />
              <p className="text-gray-600 text-sm leading-7">
                Kasmoz Private School is dedicated to nurturing every aspect of
                a child's development in a complex and challenging world. We
                harness all available resources to provide a distinctive
                experience for every student at Kasmoz.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="about.html"
                  className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                >
                  <span className="mr-2">&rarr;</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="admission.html"
                  className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                >
                  <span className="mr-2">&rarr;</span> Admission
                </a>
              </li>
              <li>
                <a
                  href="aims.html"
                  className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                >
                  <span className="mr-2">&rarr;</span> Our Mission
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                >
                  <span className="mr-2">&rarr;</span> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="curriculum.html"
                  className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                >
                  <span className="mr-2">&rarr;</span> Our Curriculum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {/* Gallery */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img
                      src={`images/gallery${index + 1}.JPG`}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-16 object-cover hover:opacity-75"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Info
            </h2>
            <ul className="space-y-4">
              <li className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">&#x1F3E0;</span>
                D18 Oloruntedo Estate Aduloju Town Mfm Bus-Stop Ojoo Express
                Road, Ibadan.
              </li>
              <li className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">&#x260E;</span>
                <a href="tel:08143036019" className="hover:text-red-500">
                  08143036019
                </a>
              </li>
              <li className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">&#x260E;</span>
                <a href="tel:08134993309" className="hover:text-red-500">
                  08134993309
                </a>
              </li>
              <li className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">&#x2709;</span>
                <a
                  href="mailto:kasmozschool@gmail.com"
                  className="hover:text-red-500"
                >
                  kasmozschool@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-red-500"
              >
                G
              </a>
              <a
                href="#"
                className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-600"
              >
                F
              </a>
              <a
                href="#"
                className="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-pink-400"
              >
                I
              </a>
              <a
                href="#"
                className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-300"
              >
                T
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
