let input = document.getElementById("input");
let button = document.getElementById("button");
let div = document.getElementById("div");

 
const api = {
  key: '4eb3703790b356562054106543b748b2',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
};

button.addEventListener("click", function() {
  let city = input.value.trim();
  if (city !== "") {
    div.innerHTML = "";


    let url = `${api.baseUrl}?q=${city}&appid=${api.key}&units=metric&lang=fr`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Données reçues :", data);

        if (data.cod === "404") {
          div.textContent = "❌ Ville introuvable !";
          return;
        }
 
        let ville = document.createElement("h3");
        ville.textContent = `Ville : ${data.name}`;

        let temp = document.createElement("p");
        temp.textContent = `Température : ${data.main.temp}°C`;

        let desc = document.createElement("p");
        desc.textContent = `Description : ${data.weather[0].description}`;

        let icon = document.createElement("img");
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.alt = data.weather[0].description;

        div.appendChild(ville);
        div.appendChild(temp);
        div.appendChild(desc);
        div.appendChild(icon);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération :", error);
        div.textContent = "⚠️ Erreur de connexion !";
      });
  } else {
    div.textContent = "⚠️ Écris le nom d'une ville d'abord !";
  }
});
