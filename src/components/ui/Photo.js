import { Image } from "@chakra-ui/react";
import photo from "./../../assets/photo.png";

const Photo = (props) => {
  return <Image {...props} boxSize="150px" src={photo} alt="Nesrine Benaoun" />;
};

export default Photo;
