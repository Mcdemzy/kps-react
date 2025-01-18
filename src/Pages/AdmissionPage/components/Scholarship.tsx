const Scholarship = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <section className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden px-6 py-8 sm:px-10 sm:py-12 lg:py-16 lg:px-16">
          {/* Header Image */}
          <div className="w-full mb-8">
            <img
              src="images/scholarship.jpeg"
              alt="Scholarship Announcement"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-[#f44336] text-2xl sm:text-3xl font-bold text-center mb-6">
            SCHOLARSHIP EXAMS TOWARDS THE 2025/2026 SESSION HAVE BEEN CONCLUDED.
          </h1>

          {/* Subheading */}
          <p className="text-[#f44336] text-lg sm:text-xl text-center font-medium mb-10">
            FOR MORE INFORMATION ABOUT OUR REGULAR ENTRANCE EXAMS PLEASE FOLLOW
            THIS LINK
          </p>

          {/* Scholarship Description */}
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            <p className="mb-4">
              A range of merit-based scholarships for the Smart and Gifted from
              Grade 7/JSS1 to A Levels are awarded by Lifeforte International
              High School each year to commemorate the anniversary of the
              school’s inception (November 5th, 1990). The scholarships are for
              excellence in academics, music, art, public speaking, and sports.
            </p>

            <p className="mb-4">
              Students must qualify for scholarships based on their outstanding
              performance in the scholarship examination and may have to
              demonstrate, in a practical assessment, a level of excellence and
              natural aptitude in their chosen category.
            </p>

            <p className="mb-8">
              The online scholarship form can be filled{" "}
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                HERE
              </a>
              .
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-2 font-medium">
              FOR FURTHER INFORMATION PLEASE CONTACT US:
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> (+234) 805 226 4640,
              (+234) 802 301 7324
            </p>
            <p>
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:admissions@lifeforte.com"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                admissions@lifeforte.com
              </a>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href="#"
              className="bg-[#f44336] text-white py-3 px-6 rounded-md text-center text-lg font-medium shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Fill Scholarship Form
            </a>
            <a
              href="#"
              className="bg-gray-800 text-white py-3 px-6 rounded-md text-center text-lg font-medium shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Scholarship;
