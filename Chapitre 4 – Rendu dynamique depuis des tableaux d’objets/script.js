let produits = [
  { nom: "PC portable", prix: 900, image: "https://www.hp.com/content/dam/sites/worldwide/gaming/new-product-cards/omen-max-16-ces-badge.png" },
  { nom: "Clavier mécanique", prix: 45, image: "https://media.electroplanet.ma/media/catalog/product/cache/fe7218fa206f7a550a07f49b9ea052d6/3/0/3038287_2.jpg" },
  { nom: "Souris sans fil", prix: 25, image: "https://media.materiel.net/r250/products/MN0005882677_1.jpg" }
];
let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});