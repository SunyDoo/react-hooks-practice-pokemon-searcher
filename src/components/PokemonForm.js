import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ postNewPoke }) {

  const [formData, setFormData] = useState({
      name: "",
      hp: "",
      sprites: {
        frontUrl: "",
        backUrl: ""
      }
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault()
    const pokeData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
      fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokeData),
  })
    .then((r) => r.json())
    .then((pokeData) => postNewPoke(pokeData));
    }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
