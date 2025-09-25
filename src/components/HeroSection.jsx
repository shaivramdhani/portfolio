import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi everyone, my name is </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Shaiv
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ramdhani
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a second year Engineering Physics student at the University of British Columbia. This is my website/portfolio documenting a little bit about me and some cool things that I've worked on. Please look around and feel free to contact me. 
          </p>

          <div className="pt-4  animate-fade-in-delay-4">
            <Link to="/projects" className="cosmic-button">
            Check out some of my projects!
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};