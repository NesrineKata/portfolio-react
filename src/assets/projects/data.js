import travelguide from "./travelGuide.PNG";
import spring from "./spring.png";
import emp from "./emp1.PNG";
import python from "./app.png";
import portoflio from "./portfolio.PNG"

const data = [
  {
    img: emp,
    title: "Videos Managements",
    builtWith: "Expressjs, Angular 10, AWS S3, MYSQL, JWT",
    code: "https://github.com/NesrineKata/EmployeesPlateform",
    live: "",
    description:
      "The most expanded application I had the opportunity to work with. I've learned many technologies. The application allows to store videos, lyrics,  images to AWS S3 and handle register, login of employees using MYSQL Database.",
  },
  {
    img: spring,
    title: "Ecommerce",
    builtWith: "Angulat 10, Spring boot, MYSQL, JWT, Stripe",
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
