import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork } from "lucide-react";

export default function GitHubSection() {
  const { personal, projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="github" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
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
              <span className="gradient-text">GitHub Profile</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my open-source projects and contributions on GitHub
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* GitHub Profile Card */}
          <motion.div
            variants={itemVariants}
            className="mb-16 p-8 md:p-12 rounded-2xl bg-white shadow-lg border border-gray-200 hover-lift"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  <Github className="w-12 h-12" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {personal.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Full-Stack Developer | Open Source Contributor
                </p>
                <a href={personal.github} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 transition-all duration-300">
                    <Github className="w-5 h-5 mr-2" />
                    Visit GitHub Profile
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Repositories
            </h3>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {projects.slice(0, 6).map((project, index) => (
                <motion.a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover-lift shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Repository Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
                    <div className="flex items-start justify-between mb-2">
                      <Github className="w-6 h-6" />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        Public
                      </span>
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-blue-100 transition-all duration-300">
                      {project.title}
                    </h4>
                  </div>

                  {/* Repository Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>Stars</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>Forks</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* View All Projects */}
          <motion.div variants={itemVariants} className="text-center">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                View All Projects on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
