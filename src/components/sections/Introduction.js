
import { Box, Heading, Text, Tooltip, Button } from "@chakra-ui/react";
import SocialMedia from "../ui/SocialMedia";

const Introduction = (props) => {
  const { onClick } = props;
  return (
    <Box px={2} mt="1.5rem" w="full" textAlign="left" as="section">
      <Heading mb={4} fontWeight="500" fontSize="2xl" as="h2">
        Hi, I'm Nesrine Benaoun.
      </Heading>

      <Text mb={4} fontSize="1.1rem">
        I'm a Software Engineer based in Tunisia. I enjoy
        transforming complex problems into simple and intuitive solutions. I
        love to explore and learn new things.
      </Text>
      <Text fontSize="1.1rem">
        Let's get in touch. Write me at{" "}
        <Tooltip
          bg="rgba(0,0,0,0.8)"
          color="white"
          label="Click to copy email address."
          aria-label="A tooltip"
          placement="top"
        >
          <Button onClick={onClick} color="primary" variant="link">
           nesrinebenoun@gmail.com
          </Button>
        </Tooltip>
      </Text>

      <SocialMedia ml="-10px" mt="2rem" direction="row" />
    </Box>
  );
};
/*   <Text mb={4} fontSize="1.1rem">
As someone with a keen interest in tech and a knack for problem-solving,
web development was an obvious path.
</Text>
*/
export default Introduction;
