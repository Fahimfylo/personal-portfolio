import profileImage from "../../public/images/profile/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl pl-4">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Fahim Rahman, a passionate JavaScript developer
            specializing in creating innovative web solutions and user-friendly
            interfaces. I’m dedicated to developing websites such as e-commerce
            platforms, expense trackers, chat applications, and more. I am a
            project-based learner who loves to learn by building amazing
            projects. I always focus on core concepts and have a deep interest
            in how the JavaScript engine works. Currently, I’m looking for a
            remote job to apply my skills, expand my knowledge, and explore new
            technologies.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
