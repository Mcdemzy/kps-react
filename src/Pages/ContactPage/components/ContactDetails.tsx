import React from "react";
import Header from "../../../Components/Shared/Header";

const ContactDetails: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="w-full lg:w-[80%] mx-auto px-4 py-10 text-gray-800">
        {/* Kasmoz Private School */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            KASMOZ PRIVATE SECONDARY SCHOOL
          </h2>
          <p className="mb-2">#D18 Oloruntedo Estate, Aduloju Town</p>
          <p className="mb-2">Mfm Bus Stop Ojoo Express, Ibadan, Oyo State.</p>
          <p className="mb-4">Nigeria.</p>
          <p className="mb-2">
            Mobile:{" "}
            <a
              href="tel:+2349090934714"
              className="text-blue-500 hover:underline"
            >
              (+234) 909 0934714
            </a>
            ,{" "}
            <a
              href="tel:+2348134993309"
              className="text-blue-500 hover:underline"
            >
              (+234) 813 4993309
            </a>
          </p>
        </section>

        {/* Lifeforte Liaison Office
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            LIFEFORTE LIAISON OFFICER, LAGOS OFFICE
          </h2>
          <p className="mb-2">
            #64b Raymond Njoku St, off Awolowo Rd, Ikoyi, Lagos,
          </p>
          <p className="mb-4">
            You can also make use of our{" "}
            <a href="/form" className="text-blue-500 hover:underline">
              online form
            </a>{" "}
            to send us a message.
          </p>
          <p className="mb-4">
            Please click{" "}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              here
            </a>{" "}
            to find directions on how to locate us.
          </p>
          <p>
            The Advisory Council contact is:{" "}
            <a
              href="mailto:kasmozprivateschool2019@gmail.com"
              className="text-blue-500 hover:underline"
            >
              kasmozprivateschool2019@gmail.com
            </a>{" "}
            c/o Mrs. Durotoluwa Sokoya
          </p>
          <p>
            <a
              href="tel:+2348073171348"
              className="text-blue-500 hover:underline"
            >
              +2348073171348
            </a>
          </p>
        </section> */}

        {/* Useful Contacts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">USEFUL CONTACTS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Email
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Mrs. Kemi Alawode
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href="mailto:kasmozprivateschool2019@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      kasmozprivateschool2019@gmail.com
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    School Principal
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Mr. Ekundayo Fatai
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href="mailto:kasmozprivateschool2019@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      kasmozprivateschool2019@gmail.com
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Executive Director of Mentoring and Child Support
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Mr. Babatunji Oduntan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href="mailto:kasmozprivateschool2019@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      kasmozprivateschool2019@gmail.com
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Executive Director of Studies & Curriculum
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Mr. Wale Adekoya
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href="mailto:kasmozprivateschool2019@gmail.com
"
                      className="text-blue-500 hover:underline"
                    >
                      kasmozprivateschool2019@gmail.com
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Executive Director of Security
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactDetails;
