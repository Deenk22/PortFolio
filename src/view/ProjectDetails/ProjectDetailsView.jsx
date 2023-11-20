import { motion } from 'framer-motion';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function ProjectDetailsView({ project }) {
  const { title, content } = project;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="wrapper bg-white-section1 h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 128 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="mt-16 flex flex-col justify-center items-center"
      >
        <h1 className="font-main text-8xl text-black-font">{title}</h1>
        <p className="text-xl text-black-font mt-2">{content}</p>
      </motion.div>
      <div>
        <button onClick={goBack} type="button">
          Go Back
        </button>
      </div>
    </motion.section>
  );
}
