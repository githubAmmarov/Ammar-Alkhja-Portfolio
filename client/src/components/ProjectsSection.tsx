import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  const { projects, experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 } as any,
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience & Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of my professional experience and projects that
              showcase my skills and expertise
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Experience */}
          {experience.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover-lift"
                    whileHover={{ borderColor: "#a855f7" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold mt-1">
                            •
                          </span>
                          <span className="text-gray-700">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white text-purple-600 border border-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Projects</h3>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden bg-white border border-gray-200 hover-lift shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Project Header */}
                  <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-blue-100">{project.description}</p>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">
                          Key Highlights:
                        </h5>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-600 font-bold">
                                ✓
                              </span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto pt-6 border-t border-gray-200">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full rounded-lg border-purple-600 text-purple-600 hover:bg-purple-50"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
