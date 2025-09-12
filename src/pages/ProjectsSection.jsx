import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Robotic Claw",
    description: "A custom-built robotic claw for precise manipulation tasks.",
    fullDescription: (
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
        <li>Designed and built a robotic claw using Arduino and servo motors.</li>
        <li>Implemented real-time feedback control with ultrasonic sensors for precise object manipulation.</li>
        <li>Programmed to handle objects of varying sizes and weights with accuracy.</li>
        <li>Optimized mechanical design for stability and reliability.</li>
      </ul>
    ),
    image: "/claw4.png",
    demoUrl: "claw.pdf",
  },
  {
    id: 4,
    title: "Rainwater Harvester Simulation",
    description: "Simulation analyzing rainfall and designing a water solution.",
    fullDescription: (
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
        <li>Developed an extensive rainfall simulation using Excel and large datasets.</li>
        <li>Designed a water harvesting solution for a remote community based on simulation results.</li>
        <li>Analyzed rainfall patterns, storage capacity, and distribution efficiency.</li>
        <li>Presented actionable recommendations for sustainable water management.</li>
      </ul>
    ),
    image: "/RWH.png",
    demoUrl: "RWH.xlsx",
  },
  {
    id: 3,
    title: "Nuclear Fusion Research Paper",
    description: "A detailed study on the Kudankulam Nuclear Power Plant.",
    fullDescription: (
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
        <li>Authored a 4000-word research paper on the Kudankulam Nuclear Power Plant.</li>
        <li>Evaluated sustainability, efficiency, and safety of nuclear fusion energy production.</li>
        <li>Conducted in-depth literature review and synthesized complex technical information.</li>
        <li>Provided critical analysis of environmental and economic impacts.</li>
      </ul>
    ),
    image: "/nuclearfusion.webp",
    demoUrl: "EE.pdf",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio website, built from scratch.",
    fullDescription: (
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
        <li>Developed a personal portfolio website using React and Tailwind for the first time.</li>
        <li>Implemented interactive project cards, responsive design, and a contact form.</li>
        <li>Integrated animations and hover effects for a modern user experience.</li>
        <li>Demonstrated full-stack web development skills and problem-solving through self-learning.</li>
      </ul>
    ),
    image: "/website.png",
    demoUrl: "/",
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
           <span className="text-primary">Featured Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. <span className="font-bold">Click any project to learn more.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setActiveProject(project.id)}
            > 
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.description}
                </p>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium text-lg">
                    Click to Learn More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-page overlay for expanded project */}
{activeProject && (
  <div className="fixed inset-0 bg-background/90 z-50 flex items-center justify-center overflow-auto">
    <div className="bg-card rounded-lg w-full max-w-6xl max-h-[90vh] relative shadow-2xl flex flex-col">
      
      {/* Close button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/20 transition"
        onClick={() => setActiveProject(null)}
      >
        <X size={24} />
      </button>

      {projects
        .filter((p) => p.id === activeProject)
        .map((project) => (
          <div key={project.id} className="flex flex-col overflow-auto">
            
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[50vh] object-contain rounded-t-lg"
            />

            {/* Title and description */}
            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground text-lg">
                {project.fullDescription}
              </p>
              <a
                href={project.demoUrl}
                target="_blank"
                className="flex justify-center items-center gap-1 text-primary hover:underline"
              >
                See Project <ExternalLink size={16} />
              </a>
            </div>

          </div>
        ))}
    </div>
  </div>
)}

      </div>
    </section>
  );
};
