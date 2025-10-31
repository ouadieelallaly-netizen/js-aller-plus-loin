let products = [
  { name: "PC portable", price: 900 },
  { name: "Souris", price: 25 },
  { name: "Clavier", price: 40 },
  { name: "Écran", price: 150 }
];

let list = document.getElementById("products");

let productsFiltres = products.filter(p => p.price < 100);

if (productsFiltres.length === 0) {
  list.innerHTML = "<li>Aucun produit en promotion.</li>";
} else {
  productsFiltres.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.name} – ${p.price} €`;
    list.appendChild(li);
  });
}
