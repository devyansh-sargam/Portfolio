import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering",
      field: "Computer Science Engineering (CSE)",
      period: "2022-2026"
    },
    {
      institution: "International Public School",
      degree: "Intermediate",
      field: "PCM",
      period: "2020-2022"
    }
  ];

  const achievements = [
    <a href="https://oneroadmap.io/skills/devops/certificate/CERT-71FA4136">DevOps Engineer</a>,
    <a href="https://oneroadmap.io/skills/fs/certificate/CERT-8D84FD36">Full Stack Developer</a>,
    <a href="https://oneroadmap.io/skills/ai/certificate/CERT-854E0C1A">AI Engineer</a>,
    "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional ",
    <a href="https://www.coursera.org/account/accomplishments/specialization/6JMMFFR9RM6N">Cloud Computing</a>,
    "SEBI - Investor Certification",
    <a href="https://www.coursera.org/account/accomplishments/verify/CKBYKX9HUD7Z">Introduction to Data Science in Python</a>,
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">BACKGROUND</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="border-l-2 border-muted border-opacity-30 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute w-3 h-3 bg-primary border border-light rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-medium mb-1">{edu.institution}</h4>
                  <p className="text-muted mb-1">{edu.degree} {edu.field && `- ${edu.field}`}</p>
                  {edu.period && <p className="text-sm font-mono text-light opacity-70">{edu.period}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Certifications
            </h3>

            <ul className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-light mt-1 mr-2 opacity-60">⁕</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 p-4 border border-muted border-opacity-20 bg-secondary bg-opacity-30"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium mb-2">Continuous Learning</h4>
              <p className="text-muted text-sm">
              Always exploring new technologies and building hands-on projects to continuously expand my knowledge and practical experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;