import { Users, Lightbulb, MessageCircle, Zap } from "lucide-react";


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           <span className="text-primary"> My Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Engineering Card */}
          <div className="bg-card/90 border border-border rounded-xl p-20 min-h-[500px]
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg 
                          hover:border-primary/60 pt-32">
            <div className="transform scale-150">
           <h3 className="text-4xl font-semibold mb-3">Engineering</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hands-on design and prototyping for solutions.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white" />
              <img src="https://img.shields.io/badge/MATLAB-orange?style=for-the-badge&logo=mathworks&logoColor=white" />
              <img src="https://img.shields.io/badge/Fusion%20360-FF6F00?style=for-the-badge&logo=autodesk&logoColor=white" />
              <img src="https://img.shields.io/badge/Circuit%20Design-00599C?style=for-the-badge&logo=capacitor&logoColor=white" />

            </div>
 
            </div>
          </div>

          {/* Software Card */}
          <div className="bg-card/80 border border-border rounded-xl p-20 min-h-[400px]
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg 
                          hover:border-primary/60 pt-32">
            
              <div className="transform scale-150">
                <h3 className="text-4xl font-semibold mb-4">Software</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Building applications, simulations, and web platforms.
            </p>
            <div className="flex justify-center flex-wrap gap-5">
                <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
                <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
                <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" />
                <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
               </div>
              
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="bg-card/80 border border-border rounded-xl p-20 min-h-[600px]
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg 
                          hover:border-primary/60 pt-32">
            <div className="transform scale-150">
<h3 className="text-4xl font-semibold mb-4">Soft Skills</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Collaborating, leading, and adapting in diverse environments.
            </p>
            <div className="grid grid-cols-1 gap-6 mt-4">
  <div className="flex justify-center items-center gap-2">
    <Users className="w-6 h-6 text-primary" />
    <span className="text-xs italic">Teamwork & Leadership</span>
  </div>
  <div className="flex justify-center items-center gap-2">
    <Lightbulb className="w-6 h-6 text-primary" />
    <span className="text-xs italic">Problem Solving</span>
  </div>
  <div className="flex justify-center items-center gap-2">
    <MessageCircle className="w-6 h-6 text-primary" />
    <span className="text-xs italic">Communication</span>
  </div>
  <div className="flex justify-center items-center gap-2">
    <Zap className="w-6 h-6 text-primary" />
        <span className="text-xs italic">Adaptability</span>

  </div>
</div>

            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};
