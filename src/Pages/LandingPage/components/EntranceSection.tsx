import "../../../Components/css/EntranceSection.css";

const EntranceSection = () => {
  return (
    <>
      <main className="entrance-section bg-[#16365F] w-full h-fit text-white pt-10 pb-10">
        {/* Text Section */}
        <div className="text-center text-2xl font-bold fade-in">
          <h1>
            2nd batch entrance examination holds on Saturday, June 22, 2024.
          </h1>
          <h1 className="mt-4">
            3rd batch entrance examination holds on Thursday, August 22, 2024.
          </h1>
        </div>

        {/* Image Section */}
        <div className="image-container fade-in">
          <img
            src="/images/admission.jpg"
            alt="Admission"
            className="w-[90%] max-w-3xl m-auto mt-10 rounded-lg shadow-lg"
          />
        </div>

        {/* Buttons Section */}
        <section className="button-section mt-10 flex justify-center items-center gap-6 fade-in">
          <div className="cta-button uppercase">
            <a
              href="/forms/admission-form.pdf"
              download
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#16365F] transition duration-300"
            >
              Download Admission Form
            </a>
          </div>
          <div className="cta-button uppercase">
            <a
              href="/forms/prospectus.pdf"
              download
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#16365F] transition duration-300"
            >
              View our Brochure
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntranceSection;
