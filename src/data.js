import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  intro:"Hello, I’m",
  name: "Sandeep Budha",
  title: "👨‍💻 Developer + Designer",
  social: {
    youtube:"https://www.youtube.com/channel/UCyy7M1asH-tQZQoNEedOwag",
    github: "https://github.com/sandeepflutter",
    medium:"https://medium.com/@sandeepbudha.sb",
    facebook: "https://www.facebook.com/profile.php?id=100011911954302",
    twitter: "https://twitter.com/sbSandeepbudha",
    email: "sandeepbudha.sb@gmail.com",
  },
  about: {
    descr1:"My name is Sandeep Budha. I am a Nepal-based application developer and designer who creates beautiful Apps. I make websites using HTML, CSS, and JavaScript, and I utilize Flutter to create stunning, responsive apps for desktop, mobile, and the web. I am a user of design programs like Adobe XD and Photoshop. I've also used Arduino to work on minor projects for an IOT project.",
    descr3:"I'm open to freelance opportunities. Email me and we can talk if you want to talk to me about working with you."
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
};

export default data;
