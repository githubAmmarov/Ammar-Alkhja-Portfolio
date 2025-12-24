import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3 as any,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-10 md:pb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-background -z-10" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 -z-10" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl hover-lift overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Mohammad Ammar Alkhja"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
          >
            {personal.title}
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {personal.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full px-8 transition-all duration-300"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 transition-all duration-300 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 text-gray-600"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:text-blue-600"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:text-blue-600"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        animation-timing-function: ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
