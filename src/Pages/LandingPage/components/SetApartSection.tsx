import "../../../Components/css/SetApartSection.css";
import React from "react";
import {
  IoBookOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

interface Card {
  icon: React.ReactElement;
  title: string;
  description: string;
  isMiddle?: boolean;
}

const SetApartSection = () => {
  // Data for the six cards
  const cards: Card[] = [
    {
      icon: (
        <IoBookOutline className="text-[#f44336] text-4xl icon-animation" />
      ),
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum is designed to provide a balanced education, integrating academics, arts, and physical education.",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-[#f44336] text-4xl icon-animation" />
      ),
      title: "Experienced Faculty",
      description:
        "Our teachers are highly qualified and dedicated to fostering a supportive and engaging learning environment.",
    },
    {
      icon: (
        <IoPeopleOutline className="text-[#f44336] text-4xl icon-animation" />
      ),
      title: "Community Engagement",
      description:
        "We encourage active participation in community service, promoting social responsibility among students.",
      isMiddle: true,
    },
    {
      icon: <FaLaptopCode className="text-[#f44336] text-4xl icon-animation" />,
      title: "Modern Technology",
      description:
        "State-of-the-art facilities and technology are integrated into our teaching methods to enhance learning.",
      isMiddle: true,
    },
    {
      icon: (
        <IoAnalyticsOutline className="text-[#f44336] text-4xl icon-animation" />
      ),
      title: "Personalized Learning",
      description:
        "We tailor our educational approaches to meet the unique needs and potentials of each student.",
    },
    {
      icon: (
        <IoSchoolOutline className="text-[#f44336] text-4xl icon-animation" />
      ),
      title: "Safe Environment",
      description:
        "A secure and nurturing environment ensures that students can learn and grow with peace of mind.",
    },
  ];

  return (
    <main className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#16365F] mb-12">
        What Sets KPS Apart
      </h1>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-lg shadow-md card-hover card-animation ${
              card.isMiddle ? "bg-white" : "bg-[#f4f5f7]"
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Icon */}
            <div className="mb-4">{card.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-[#16365F] mb-2">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SetApartSection;
