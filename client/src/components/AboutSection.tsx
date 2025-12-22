import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Code2, Database, Zap } from "lucide-react";

export default function AboutSection() {
  const { personal, education } = portfolioData;

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

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "SOLID principles and OOP expertise",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Scalable and optimized solutions",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast, efficient, and reliable systems",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate backend developer and software engineering
                student with over 2 years of experience building scalable web
                applications. My journey in software development has been driven
                by a deep interest in creating efficient, maintainable, and
                user-centric solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in Laravel and PHP, I've developed
                expertise in RESTful API design, database architecture, and
                third-party integrations. I'm equally comfortable working on
                frontend projects with React.js and modern JavaScript
                frameworks.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest technologies. My approach combines technical excellence
                with problem-solving skills to deliver solutions that exceed
                expectations.
              </p>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover-lift"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover-lift"
                  whileHover={{ borderColor: "#a855f7" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-medium">{edu.school}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-semibold text-purple-700">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 md:gap-12"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "5+", label: "Projects Completed" },
              { number: "10+", label: "Technologies" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
