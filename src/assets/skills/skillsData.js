import js from "./javascript.svg";
import python from "./python.svg";
import git from "./git-icon.svg";
import java from "./java.svg";
import linux from "./linux-tux.svg";
import node from "./nodejs.svg";
import npm from "./npm.svg";
import angular from "./angular.svg";
import springboot from "./spring.svg";
import vsCode from "./vs-code.svg";

const skills = {
  Languages: [
    { name: "JavaScript", img: js },
    { name: "Java", img: java },
    { name: "Python", img: python }
  
  ],
  Technologies: [
    { name: "Angular", img: angular },
    { name: "nodeJS", img: node },
    { name: "Spring boot", img: springboot },
  ],
  "Other Tools": [
    { name: "Linux CLI", img: linux },
    { name: "Git", img: git },
    { name: "VS Code", img: vsCode },
    { name: "npm", img: npm },
  ],
};

export default skills;
