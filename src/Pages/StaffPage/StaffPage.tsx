import staffHighlights from "./components/staffHighlights";
import staffQualities from "./components/staffQualities";
const StaffPage = () => {
  return (
    <>
      <main className="w-full min-h-screen bg-white p-6 md:p-10 lg:p-16 flex flex-col md:flex-row items-start justify-between">
        {/* Left Section: Image */}
        <section className="w-full md:w-[50%] mb-6 md:mb-0">
          <img
            src="/images/staff.jpg"
            alt="Staff meeting"
            className="w-full h-auto object-cover rounded-md"
          />
        </section>

        {/* Right Section: Staff Qualities */}
        <section className="w-full md:w-[45%] bg-white">
          <h2 className="text-lg md:text-2xl font-bold bg-[#16365F] text-white text-center py-2 mb-4">
            Our Staff Qualities & Qualifications
          </h2>
          <ul className="space-y-4">
            {staffQualities.map((quality, index) => (
              <li key={index} className="flex items-center space-x-3">
                {quality.icon}
                <p className="text-gray-700 text-sm md:text-base">
                  {quality.text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Why Our Staff Stand Out Section */}
      <section className="w-[90%] md:w-[80%] m-auto p-8 md:p-16 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16365F] mb-6">
          Why Our Staff Stand Out
        </h2>
        <p className="text-gray-700 text-[1rem] md:text-[1.25rem] leading-[1.8] mb-6">
          The qualities and qualifications mentioned above are central to the
          selection of our staff. Our team is composed of dedicated and diligent
          individuals who work harmoniously to achieve effective outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staffHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#16365F] mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StaffPage;
