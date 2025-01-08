import { FaRegCheckCircle, FaPen, FaPuzzlePiece } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { GiBurningPassion } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { RiEmpathizeFill } from "react-icons/ri";

const staffQualities = [
  {
    icon: <FaRegCheckCircle className="text-[#16365F] text-xl" />,
    text: "Caring for both physical and mental well-being.",
  },
  {
    icon: <FaPuzzlePiece className="text-[#16365F] text-xl" />,
    text: "Proficient in instructing and guiding young learners.",
  },
  {
    icon: <FaPen className="text-[#16365F] text-xl" />,
    text: "Degree and related coursework in child development.",
  },
  {
    icon: <GiBurningPassion className="text-[#16365F] text-xl" />,
    text: "Passionate about creating impactful learning environments.",
  },
  {
    icon: <MdLeaderboard className="text-[#16365F] text-xl" />,
    text: "Strong leadership and mentoring skills.",
  },
  {
    icon: <RiEmpathizeFill className="text-[#16365F] text-xl" />,
    text: "Empathy-driven approach to individual needs.",
  },
  {
    icon: <HiAcademicCap className="text-[#16365F] text-xl" />,
    text: "Commitment to academic excellence and innovation.",
  },
];

export default staffQualities;
