import React from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <>
      {/* Map Section */}
      <section className="location w-full lg:w-[80%] mx-auto py-10 px-4 sm:px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198.64786438422036!2d3.930433365729614!3d7.4413936061738335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1690706863863!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] md:h-[450px] rounded-lg shadow-lg"
        ></iframe>
      </section>

      {/* Main Contact Section */}
      <main className="w-full px-4 py-8 sm:px-8 md:px-12 lg:w-[80%] min-h-screen bg-white flex flex-col md:flex-row m-auto">
        {/* Contact Info Section */}
        <section className="contact-col w-full md:flex-[48%] md:mr-6 flex flex-col mb-8 md:mb-0">
          {/* Address */}
          <div className="flex items-center mb-10">
            <FaHome className="text-[#f44336] text-[28px] mr-6" />
            <div>
              <h5 className="text-lg md:text-xl font-medium text-[#555] mb-2">
                D18 Oloruntedo Estate Aduloju Town
              </h5>
              <p className="text-sm">Mfm Bus Stop Ojoo Express, Ibadan.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-10">
            <FaPhoneAlt className="text-[#f44336] text-[28px] mr-6" />
            <div>
              <h5 className="text-lg md:text-xl font-medium text-[#555] mb-2">
                09090934714, 08134993309
              </h5>
              <p className="text-sm">Monday - Friday, 07:00am - 05:00pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className="text-[#f44336] text-[28px] mr-6" />
            <div>
              <h5 className="text-lg md:text-xl font-medium text-[#555] mb-2">
                kps@gmail.com
              </h5>
              <p className="text-sm">Send us an email today</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-col w-full md:flex-[48%]">
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-[15px] mb-4 border border-gray-300 outline-none focus:ring-2 focus:ring-red-500 box-border"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-[15px] mb-4 border border-gray-300 outline-none focus:ring-2 focus:ring-red-500 box-border"
            />
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-full p-[15px] mb-4 border border-gray-300 outline-none focus:ring-2 focus:ring-red-500 box-border"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-[15px] mb-6 border border-gray-300 outline-none focus:ring-2 focus:ring-red-500 box-border"
            />
            <button
              type="submit"
              className="w-full md:w-40 py-3 text-[#f44336] border border-[#f44336] font-semibold hover:bg-[#f44336] hover:text-white transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
