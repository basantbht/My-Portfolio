"use client"
import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="projects" className="pt-20 container max-w-6xl mx-auto px-4 mb-10 scroll-my-5">
      <motion.h2
      initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y:0}}
    transition={{delay:0.3, duration: 0.5}}
      className="text-4xl font-bold text-center mb-14">
        My <span className="text-primary">Projects</span>
      </motion.h2>

      <motion.div
      initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay:0.4, duration: 0.6}}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
          whileHover={{scale: 1.03}}
            key={project.title}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden "
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
            <Link href={project.demoLink} target="_blank">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              </Link>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-sm font-medium">Code</span>
                </Link>

                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span className="text-sm font-medium">Live Demo</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
