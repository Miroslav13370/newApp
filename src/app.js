import React from "react";

function App() {
  const getResponse = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("ошибка");
    }
    const body = await res.json();
    return body;
  };
  getResponse("https://swapi.dev/api/people/1")
    .then((body) => {
      console.log(body.name);
    })
    .catch((e) => {
      console.log(e);
    });

  return <h1>Привет!</h1>;
}

export default App;
