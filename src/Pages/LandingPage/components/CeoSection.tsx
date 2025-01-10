const CeoSection = () => {
  return (
    <section className="bg-blue-50 py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* CEO Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/staff.jpg"
            alt="CEO"
            className="rounded-lg shadow-lg max-w-full lg:max-w-md"
          />
        </div>

        {/* CEO Message */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">
            CEO, Sunshine Schools Ibadan.
          </h2>
          <p className="text-xl font-bold mb-4 leading-relaxed">
            <span className="text-blue-600 font-bold">“</span> With great joy, I
            welcome you to Sunshine Schools, Ibadan.
            <strong> Isaiah 60:1 </strong> has always been the wind beneath our
            wings, and that is the reason we shine at all times.{" "}
            <span className="text-blue-600 font-bold">”</span>
          </p>
          <p className="text-gray-700 mb-6">
            Sunshine Schools operate a blend of Montessori curriculum and the
            Nigerian curriculum which enables her to set core subjects and
            diligently monitor students’ progress to achieve academic success
            and become better citizens.
          </p>
          <p className="text-gray-700">
            We also integrate Extra-curricular/Vocational activities such as
            drama, music, tailoring, welding, web designing, swimming,
            badminton, tennis, and trainings by professionals on saxophone,
            trumpet, drum set, violin, piano etc. to enable children maximize
            their potentials. I pray all efforts on our wards would not be in
            vain. <span className="font-semibold">Up School, Up Sunshine</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
