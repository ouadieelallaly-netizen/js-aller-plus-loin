// script.js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(name => {
    console.log("Données reçues :", name);
  })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });
