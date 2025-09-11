import { useState } from "react";
import { Briefcase, Code, User, Book, Heart } from "lucide-react";

const aboutCards = [
  {
    id: 1,
    title: "Sustainable Engineering",
    icon: <Code className="h-6 w-6 text-white" />,
    shortDesc: "Exploring environmentally-conscious engineering solutions.",
    longDesc:
      "I focus on sustainable robotics and electronics, designing systems that minimize waste and energy consumption while maintaining high performance.",
    bgColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Robotics & Electronics",
    icon: <User className="h-6 w-6 text-white" />,
    shortDesc: "Creating innovative robotic systems and circuits.",
    longDesc:
      "I love building hardware-software integrated projects, from custom sensors to autonomous robots, always thinking about efficiency and scalability.",
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Teamwork & Volunteering",
    icon: <Briefcase className="h-6 w-6 text-white" />,
    shortDesc: "Collaborating on impactful projects and volunteering.",
    longDesc:
      "I thrive in team environments, coordinating projects, mentoring peers, and contributing to community initiatives in STEM outreach.",
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "Data Analysis & Simulations",
    icon: <Book className="h-6 w-6 text-white" />,
    shortDesc: "Solving complex problems using data-driven methods.",
    longDesc:
      "I design simulations and perform data analysis to inform engineering decisions, from hydrological models to experimental research.",
    bgColor: "bg-orange-500",
  },
];

const hobbiesCards = [
  {
    id: 1,
    title: "Ironman & Endurance Sports",
    icon: <Heart className="h-6 w-6 text-white" />,
    shortDesc: "Training for endurance and personal growth.",
    longDesc:
      "I’ve completed multiple Ironman events and use running and cycling to push my limits physically and mentally.",
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Reading & Learning",
    icon: <Book className="h-6 w-6 text-white" />,
    shortDesc: "Exploring topics from science to philosophy.",
    longDesc:
      "I enjoy reading books on physics, engineering, and human behavior, constantly expanding my perspective and applying it to my projects.",
    bgColor: "bg-yellow-500",
  },
];

export const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    // ensures only one card expands at a time
    setExpandedCard(expandedCard === id ? null : id);
  };

  const renderCard = (card) => (
    <div
      key={card.id}
      className={`p-6 rounded-xl cursor-pointer transition-transform duration-300 transform hover:scale-105 shadow-lg ${card.bgColor}`}
      onClick={() => toggleExpand(card.id)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-white/30">{card.icon}</div>
        <div>
          <h4 className="font-semibold text-lg text-white">{card.title}</h4>
          <p className="text-white/80">{card.shortDesc}</p>
        </div>
      </div>

      {expandedCard === card.id && (
        <div className="mt-4 text-white/90 transition-all duration-300">
          <p>{card.longDesc}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
          Professional & Academic Interests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aboutCards.map(renderCard)}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
          Hobbies & Personal Interests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbiesCards.map(renderCard)}
        </div>
      </div>
    </section>
  );
};
