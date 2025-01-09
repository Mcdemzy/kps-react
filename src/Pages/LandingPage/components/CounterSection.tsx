import { useEffect, useState } from "react";
import {
  IoRibbonOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import "../../../Components/css/CounterSection.css";

const CounterSection = () => {
  const counters = [
    {
      icon: <IoSchoolOutline className="text-4xl text-[#f44336]" />,
      value: 35,
      label: "Years of Practice",
    },
    {
      icon: <IoRibbonOutline className="text-4xl text-[#f44336]" />,
      value: 10,
      label: "Accreditations",
    },
    {
      icon: <IoTrophyOutline className="text-4xl text-[#f44336]" />,
      value: 60,
      label: "Awards",
    },
    {
      icon: <IoPeopleOutline className="text-4xl text-[#f44336]" />,
      value: 14657,
      label: "Enrollments",
    },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      const increment = Math.ceil(counter.value / 100); // Increment for animation
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < counter.value) {
            newCounts[index] += increment;
          } else {
            newCounts[index] = counter.value; // Ensure it stops at the final value
          }
          return newCounts;
        });
      }, 20); // Speed of the animation
    });

    return () => {
      intervals.forEach(clearInterval); // Cleanup intervals
    };
  }, [counters]);

  return (
    <section className="counter-section w-full py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="counter-box p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="icon mb-4 flex justify-center">{counter.icon}</div>
            <h2 className="text-4xl font-bold animate-count">
              {counts[index]}
            </h2>
            <p className="text-sm uppercase font-semibold tracking-wide mt-2">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
