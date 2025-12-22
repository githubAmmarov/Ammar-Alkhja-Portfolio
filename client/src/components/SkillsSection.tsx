import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const { skills } = portfolioData;

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
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of the tools and technologies I use to
              build modern, scalable web applications
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Technical Skills Categories */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {skills.technical.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-xl bg-white shadow-md hover-lift border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, idx) => (
                    <Badge
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 font-medium hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Icons Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technology Stack
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={containerVariants}
            >
              {skills.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md hover-lift group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' font-weight='bold' text-anchor='middle' dy='.3em' fill='%236b7280'%3E?%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <p className="text-center font-semibold text-gray-900 text-sm mb-2">
                    {tech.name}
                  </p>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="p-8 rounded-xl bg-white shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 text-center hover-lift"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-900 font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
