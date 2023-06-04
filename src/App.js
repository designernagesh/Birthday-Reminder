import { useState } from "react";
import PersonsList from "./components/PersonsList";
import data from './data/data';
import { Container, Heading, Flex, Button } from "@chakra-ui/react";

function App() {
  const [ people, setPeople ] = useState(data);
  const [ btnText, setBtnText ] = useState(false);

  const clearList = () => {
    setPeople([]);
    setBtnText(true);
  }

  return (
    <Container>
      <Heading as='h1' align='center' my='20px' color='teal'>Birthday Reminder</Heading>
      <ul>
        <PersonsList people={ people } />
      </ul>
      <Flex justifyContent='center'>
        <Button onClick={ clearList } colorScheme='teal'> { btnText ? 'Reload the Page' : 'Clear the List' } </Button>
      </Flex>
    </Container>
  );
}

export default App;
