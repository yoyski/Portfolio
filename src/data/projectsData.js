import smartNoteImg from "../images/smartnoteapp.png";
import quicksched from "../images/quicksched.png";
import glucometer from "../images/glucometer.png";
import quizgame from "../images/quizgame.png";
import personalityTest from "../images/personalitytest.png";

export const projectsData = [
  // Smart Note App
  {
    id: "smart-note-app",
    title: "Smart Note App",
    description:
      "AI-powered note-taking app built with React and Tailwind CSS. Manage, edit, and organize notes seamlessly with rich text editing, smart AI suggestions, and a clean, responsive interface.",
    tech: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB", "Groq"],
    link: "https://smart-note-yoyski.vercel.app/",
    github: "https://github.com/yoyski/Smart-Note-App",
    status: "Live",
    image: smartNoteImg,
    featured: true,
    aiContribution: 35,
    category: "Web Development",
  },

  // QuickSched PWA
  {
    id: "quicksched",
    title: "QuickSched Progressive Web App",
    description:
      "A modern and responsive scheduling tool designed to streamline Facebook post management for school organizations. It allows admins to create, categorize, and visually track scheduled posts with an intuitive interface and calendar view.",
    tech: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB"],
    link: "https://quicksched-app.vercel.app/",
    github: "https://github.com/yoyski/QUICKSCHED",
    status: "Active",
    image: quicksched,
    featured: true,
    aiContribution: 70,
    category: "Web Development",
  },

  // Glucometer App
  {
    id: "glucometer",
    title: "Glucometer",
    description:
      "A web application for recording, tracking, and managing blood glucose test results. It helps users monitor their health trends over time through a clean and easy-to-use interface.",
    tech: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB"],
    link: "https://glucometer-yoyski.vercel.app/",
    github: "https://github.com/yoyski/GlucoMeter",
    status: "Live",
    image: glucometer,
    featured: true,
    aiContribution: 30,
    category: "Web Development",
  },

  // QuizGame - update that can send file an AI generate questions and answers - what happen will AI scan the document and run the API post.createQuiz to generate questions and answersQuiz and send a json formatted response
  {
    id: "QuizGame",
    title: "QuizGame",
    description:
      "A quiz making application that allows user to create, take, and manage quizzes. It feautres a user-freindly interface for building building and taking quizzes, with results tracking.",
    tech: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB"],
    link: "https://quiz-game-yoyski.vercel.app/",
    github: "https://github.com/yoyski/QuizGame",
    status: "Live",
    image: quizgame,
    featured: true,
    aiContribution: 40,
    category: "Web Development",
  },

  // Personality Test
  {
    id: "Personality-Test",
    title: "Personality Test",
    description:
      "This is a game that will take you on a fun journey of self-discovery, helping you uncover the hidden super power within you — the unique strength that makes you stand out from everyone else",
    tech: ["React", "Axios", "OpenWeather API"],
    link: "https://personality-test-yoyski.vercel.app/",
    github: "https://github.com/yoyski/PersonalityTest",
    status: "Live",
    image: personalityTest,
    featured: true,
    aiContribution: 20,
    category: "Web Development",
  },

  // Mini Projects
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    description:
      "A simple tool to check if a word or phrase is a palindrome. Built with vanilla JavaScript to practice string manipulation and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yoyski.github.io/Palindrome-Checker/",
    github: "https://github.com/yoyski/Palindrome-Checker",
    status: "Live",
    image: "https://placehold.co/600x300/ec4899/ffffff?text=Palindrome+Checker",
    featured: false,
    aiContribution: 20,
    category: "Mini Projects",
  },

  {
    id: "weather-api",
    title: "WXCAST — Atmospheric Intelligence",
    description:
      "A weather API integration app that provides real-time weather information and forecasts.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yoyski.github.io/WeatherAPI/",
    github: "https://github.com/yoyski/WeatherAPI",
    status: "Live",
    image:
      "https://placehold.co/600x300/06b6d4/ffffff?text=WXCAST+—+Atmospheric+Intelligence",
    featured: false,
    aiContribution: 30,
    category: "Mini Projects",
  },

  {
    id: "memory-card",
    title: "Memory Card",
    description:
      "A simple memory card where you can make a Q&A and flip cards to find out the answer.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yoyski.github.io/Memory-Card/",
    github: "https://github.com/yoyski/Memory-Card",
    status: "Live",
    image: "https://placehold.co/600x300/8b5cf6/ffffff?text=Memory+Card",
    featured: false,
    aiContribution: 10,
    category: "Mini Projects",
  },

  {
    id: "counter",
    title: "Counter",
    description:
      "A simple counter application that allows users to increment, decrement, and reset a value.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yoyski.github.io/Counter/",
    github: "https://github.com/yoyski/Counter",
    status: "Live",
    image: "https://placehold.co/600x300/14b8a6/ffffff?text=Counter",
    featured: false,
    aiContribution: 0,
    category: "Mini Projects",
  },
];