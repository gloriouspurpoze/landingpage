import React from "react";

const projects = [
  {
    title: "Project One",
    image: "/media/recipe-project.jpeg", // make sure the path is correct
    link: "https://foodland-eight.vercel.app/",
  },
  {
    title: "Project Two",
    image: "/media/gym-project.jpeg",
    link: "https://coders-gym.netlify.app/",
  },
  // {
  //   title: "Project Three",
  //   image: "/images/project3.jpg",
  //   link: "https://yourproject3.com",
  // },
];

const Works = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-background text-foreground">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-accent">Our Works</h2>
        <p className="text-sm text-muted mt-2">Click to explore our projects!</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
