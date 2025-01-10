import React from "react";
import { FaGraduationCap, FaLightbulb, FaSchool } from "react-icons/fa";

const AcademicExcellence = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">
            At Sunshine Schools
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Academic Excellence is our main focus
          </h1>
          <p className="text-gray-700 mb-6">
            We work to achieve this by all means.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <FaGraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Top Quality Education
                </h3>
                <p className="text-gray-700">
                  We provide top quality education for kids of all ages.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <FaLightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Excellent Educational Fairs
                </h3>
                <p className="text-gray-700">
                  We provide excellent educational fairs for kids of all ages.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                <FaSchool className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Top-Notch Classroom
                </h3>
                <p className="text-gray-700">
                  Top-notch classroom environments to stimulate learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/computer lab.JPG"
            alt="Students in Lab"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
