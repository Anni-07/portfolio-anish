"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

// Assuming Tailwind CSS is properly set up in your project

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Anish
            </motion.div>
            <div className="hidden sm:flex items-center">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        <main className="pt-16">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="mx-3 py-2 text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold mb-6 text-center"
  >
    {children}
  </motion.h2>
);

const Home = () => (
  <section id="home" className="flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center md:text-right grid md:place-items-center md:grid-cols-2"
    >
      <div className="w-96 h-96 overflow-hidden">
        <Image
          width={600}
          height={600}
          src="/anish.png"
          alt="Anish Mishra"
          className="md:h-full md:w-full mx-auto mb-4 object-cover"
        />
      </div>
      <div className="grid place-items-center md:place-items-end">
        <h3 className="text-xl md:text-3xl">Hi! I am</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 px-4 md:px-0">
          Anish Mishra
        </h1>
        <span className="text-xl mb-4 max-w-sm md:max-w-full w-full text-balance">
          Computer Science Engineering Student
        </span>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-4 rounded transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <SectionTitle>About Me</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
      >
        <p className="text-lg mb-4">
          A well-organized, creative and goal-oriented graduate possessing
          excellent communication, problem-solving and leadership skills with a
          flair to explore suitable avenues in Computer Science Engineering
          while developing advanced projects with efficiency and quality.
        </p>
        <p>
          <strong>Contact:</strong> anishmishra1507@gmail.com | +91 7761883515
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/anish-mishra-09b025231/"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Anish Mishra
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Face Detection Using OpenCV"
          description="Developed a face detection system using OpenCV, aiming to accurately identify faces in images and video streams."
        />
        <ProjectCard
          title="Automatic Vehicle Parking System"
          description="Engineered an Automatic Vehicle Parking System employing computer vision and sensor technologies to streamline the parking process."
        />
        <ProjectCard
          title="Portfolio Website"
          description="Developed a dynamic and visually appealing Portfolio Website to showcase professional accomplishments, skills, and projects."
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCategory
          title="Technical Skills"
          skills={["C", "C++", "Java", "JavaScript"]}
        />
        <SkillCategory
          title="Interpersonal Skills"
          skills={[
            "Team Leadership",
            "Management & Coordination",
            "Decision Making",
          ]}
        />
        <SkillCategory
          title="Languages"
          skills={["English", "Hindi", "Sanskrit", "Bhojpuri"]}
        />
      </div>
    </div>
  </section>
);

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle>Contact Me</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 max-w-md mx-auto"
      >
        <form action="https://api.staticforms.xyz/submit" method="post">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              required
            ></textarea>
          </div>
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <input
            type="hidden"
            name="accessKey"
            value="646a9402-615a-4e29-a24b-3d54dff3d46d"
          />
          <input
            type="hidden"
            name="subject"
            value="Contact us from - anifolio"
          />
          <input type="hidden" name="replyTo" value="@" />
          <input
            type="hidden"
            name="redirectTo"
            value={"https://anifolio.vercel.app"}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
