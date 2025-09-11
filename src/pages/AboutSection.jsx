import { useState } from "react";
import { Briefcase, Code, User, Book, Heart } from "lucide-react";

const aboutCards = [
{
    id: "about 1",
    title: "Academic Prowess",
    icon: <Book className="h-6 w-6 text-white" />,
    shortDesc: "Consistently achieving top academic performance across engineering and science.",
    longDesc:
      "Through dedication and passion for learning, I’ve excelled academically with a 94% average earning my the Trek Excellence Scholarship and placing me on the Deans Scholar List. My academic success reflects not only strong analytical ability but also persistence, curiosity, and a drive to continuously push my understanding further.",
    bgColor: "bg-emerald-600",
  },
  {
    id: "about 3",
    title: "Teamwork & Volunteering",
    icon: <Briefcase className="h-6 w-6 text-white" />,
    shortDesc: "Collaborating on impactful projects and volunteering.",
    longDesc:
      "I thrive in team environments, where I’ve contributed through leadership and collaboration. In school, I volunteered on the Environmental Council, helping drive sustainability initiatives on campus. I’m now beginning to volunteer with SportAbility, supporting adaptive sports programs and fostering inclusivity in athletics. These experiences have strengthened my ability to mentor, coordinate projects, and contribute meaningfully to community-focused initiatives.",
  bgColor: "bg-orange-600",
    },
];
const interestsCards = [
{
    id: "interest 1",
    title: "Sustainable Engineering",
    icon: <Code className="h-6 w-6 text-white" />,
    shortDesc: "Exploring environmentally-conscious engineering solutions.",
    longDesc:
      "I focus on sustainable robotics and electronics, designing systems that minimize waste and energy consumption while maintaining high performance.",
    bgColor: "bg-teal-600",
  },
  {
    id: "interest 2",
    title: "Robotics & Electronics",
    icon: <User className="h-6 w-6 text-white" />,
    shortDesc: "Creating innovative robotic systems and circuits.",
    longDesc:
      "I love building hardware-software integrated projects, from custom sensors to autonomous robots, always thinking about efficiency and scalability.",
    bgColor: "bg-indigo-600",
  },



]


const hobbiesCards = [
  {
    id: 1,
    title: "Ironman & Endurance Sports",
    icon: <Heart className="h-6 w-6 text-white" />,
    shortDesc: "Training for endurance and personal growth.",
    longDesc:
      "I’ve completed multiple Ironman events and use running and cycling to push my limits physically and mentally.",
    bgColor: "bg-amber-600",
  },
  {
    id: 2,
    title: "Reading & Learning",
    icon: <Book className="h-6 w-6 text-white" />,
    shortDesc: "Exploring topics from science to philosophy.",
    longDesc:
      "I enjoy reading books on physics, engineering, and human behavior, constantly expanding my perspective and applying it to my projects.",
    bgColor: "bg-cyan-600",
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
          Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aboutCards.map(renderCard)}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
          Academic Interests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {interestsCards.map(renderCard)}
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
