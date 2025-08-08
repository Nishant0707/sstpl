import React from 'react';
import { Box } from '@chakra-ui/react';
<<<<<<< HEAD
import SereduBanner from '../components/Edu/SereduBanner';
=======
import SereduBanner from '../components/edu/SereduBanner';
>>>>>>> b8c46a7a46f986e62efdc105cb17900fce112222
import SereduBlog from '../components/Edu/SereduBlog';
import SereduTypeEA from '../components/Edu/SereduTypeEA';
import Sereduque from '../components/Edu/Sereduque';
import Seredueplat from '../components/Edu/Seredueplat';

const Education = () => {
  return (
    <Box>
      <SereduBanner />
      <SereduBlog />
      <SereduTypeEA />
      <Sereduque />
      <Seredueplat />
    </Box>
  );
};

export default Education;
