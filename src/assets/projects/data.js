import travelguide from "./travelGuide.PNG";
import spring from "./spring.png";
import portalPic1 from "./portalPic1.PNG";
import python from "./app.png";
import songsayBot from "./songsayBot.PNG";
import scoreBot from "./scoreBot.PNG";
import reviewBot from "./reviewBot.PNG";
import discordBot from "./discordBot.PNG";
import vattn from "./vattn.PNG";

import portoflio from "./portfolio.PNG"

const data = [
  {
    img:discordBot,
    title: " Discord Bot",
    builtWith: "Node js, mongoDb",
    code: "",
    live: "",
    description:
        `Discord bot to share clips with autocomplete`
  },
  {
    img: reviewBot,
    title: " Review Telegram Bot",
    builtWith: "Node js, mongoDb, AWS lambda, API Gateway",
    code: "",
    live: "",
    description:
        `Telegram Bot to review clips `
  },
  {
    img: scoreBot,
    title: "Competition Telegram Bot",
    builtWith: "Node js, mongoDb, AWS lambda, API Gateway",
    code: "",
    live: "",
    description:
        `Telegram Bot for competition, welcome new Users, display score/LeaderBoard and start&end Competition. `
  },
  {
    img: songsayBot,
    title: "Inline bot Telegram ",
    builtWith: "Node js, mongoDb, AWS lambda, API Gateway",
    code: "",
    live: "",
    description:
      "Inline telegram bot to share songsays web app for telegram in included.",
  },
  {
    img: vattn,
    title: "API for Water Managment Plateform",
    builtWith: "Spring boot, JWT, Asp.Net, Microservices, Mysql, RabbitMQ, Stripe",
    code: "",
    live: "",
    description:
      "API for Water Managment Plateform",
  },
  {
    img: portalPic1,
    title: "Videos Managements",
    builtWith: "Expressjs, Angular 10, AWS S3, EC2, AWS Lambda, RDS(MYSQL),MongoDB and JWT",
    code: "",
    live: "",
    description:
      "The most expanded application I had the opportunity to work with. I've learned many technologies. The application allows to upload/download videos, lyrics,  images to/from AWS S3 and handle user authentication also manage videos(logs, list songs, edit...)",
  },
  {
    img: spring,
    title: "Ecommerce",
    builtWith: "Angulat 10, Spring boot, MYSQL, JWT and Stripe",
    code: "https://github.com/NesrineKata/SpringBootproject",
    live: "",
    description:
      "Personal project for study subject. I've learned a lot working on this project.",
  },

  {
    img: portoflio,
    title: "Portfolio Site",
    builtWith: "React, Chakra UI, React Router",
    code: "https://github.com/NesrineKata/portfolio-react",
    live: "",
    description: "Yay! You're already here. Why not take a look around!",
  },

  {
    img: travelguide,
    title: "Travel Guide",
    builtWith: "Asp.net core, SqlLite",
    code: "https://github.com/NesrineKata/TravelGuideApp",
    live: "",
    description:
    "As you might have already guessed, this is a Travel guide Website. It handles all Hotels,Restaurants,Transports needed for your Trip to Tunisia. Have a look.",
  },
  {
    img: python,
    title: "Videosurveillance Desktop Application",
    builtWith: "Python, ML, AI, Qt5",
    code: "https://github.com/NesrineKata/VideoSurveillance",
    live: "",
    description:
    "One of the first apps I was working on my internship. I had to develop AI & ML algorithms for face detection app. This was also my first project in Computer Vision and ML. I've learned a lot!"
  },
];

export default data;
