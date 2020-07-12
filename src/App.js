import React, { useState, useEffect } from 'react';
import { Container, Header, Main, Section } from './Styled'
import Axios from 'axios'
import ChuckLogo from './img/chuck.jpg'

function App() {

  //GET ALL CATEGORIES LIST
  const [Categories, setCategories] = useState([])
  const getCategories = () => {
    Axios.get(`https://api.chucknorris.io/jokes/categories`).then(response => {
      setCategories(response.data)

    }).catch(err => {
      console.log(err)
    });
  }

  //USEEFFECT ALL CATEGORIES
  useEffect(() => {
    getCategories()
  }, []);

  //GET FACT CATEGORIE 
  const [NewFact, setNewFact] = useState(["sss"])
  const [NewFactData, setNewFactData] = useState([])
  console.log(NewFactData)

  const NewFactButton = () => {
    Axios.get(`https://api.chucknorris.io/jokes/random?category=${NewFact}`).then(response => {
      setNewFactData(response.data.value)
    }).catch(err => {
      console.log(err)
    });
  }


  function handleCategory(item) {
    NewFactButton()
    setNewFact(item);
  }


  return (
    <Container>

      <Header>
        <img src={ChuckLogo} width="100vh" alt="Chuck" />
      </Header>

      <Main>
        <div>
          {NewFactData}
        </div>
        <button onClick={(e) => NewFactButton()}>New Fact</button>
      </Main>

      <Section>
        <h2>Category list</h2>
        <div>
          {Categories.map((item) => {
            return <p key={item} onClick={() => handleCategory(item)} >{item}</p>
          })}
        </div>
      </Section>

    </Container>

  );
}

export default App;
