// // Application de Meteo dans le monde

// let ville = "Kinshasa";
// let key = "1e2e38f1f56a63dd1904bccd4d55842f";
// let changer = document.getElementById("changer");

// recevoirTemperature(ville);

// changer.addEventListener("click", () => {
//   ville = prompt("Quelle ville souhaitez-vous voir ?");
//   recevoirTemperature(ville);
// });

// function recevoirTemperature(ville) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`;

//   let requete = new XMLHttpRequest();
//   // GET
//   requete.open("GET", url);
//   requete.responseType = "json";
//   requete.send();

//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let data = requete.response;
//         console.log(data);

//         let temperature = data.main.temp;
//         let ville = data.name;

//         // let tempsActuelle = (temperature = Math.round(temperature));

//         if (temperature <= 5 && temperature >= 18) {
//           document.getElementById("ville").textContent = ville;
//           document.getElementById("temperature_label").textContent =
//             temperature;
//           document.getElementById("tempsActuelle").textContent =
//             "Risque de pluie - 🌧️";
//         } else if (temperature < 25) {
//           document.getElementById("ville").textContent = ville;
//           document.getElementById("temperature_label").textContent =
//             temperature;
//           document.getElementById("tempsActuelle").textContent =
//             "Ciel ensoleillé - ☀️";
//         } else if (temperature <= 18 && temperature >= 25) {
//           document.getElementById("ville").textContent = ville;
//           document.getElementById("temperature_label").textContent =
//             temperature;
//           document.getElementById("tempsActuelle").textContent =
//             "couvert ou dégagé. - ☁️🌤️";
//         }
//       } else {
//         alert("un probleme est survenu, merci de revenir plus tard !");
//       }
//     }
//   };
// }

// ----------------------------------------------------------------------------------------------

// Application de Météo dans le monde
let ville = "Kinshasa";
const key = "1e2e38f1f56a63dd1904bccd4d55842f";
const changer = document.getElementById("changer");

// Charger la température pour la ville initiale
recevoirTemperature(ville);

changer.addEventListener("click", () => {
  let nouvelleVille = prompt("Quelle ville souhaitez-vous voir ?");
  if (nouvelleVille && nouvelleVille.trim() !== "") {
    ville = nouvelleVille.trim();
    recevoirTemperature(ville);
  } else {
    alert("Veuillez entrer un nom de ville valide !");
  }
});

function recevoirTemperature(ville) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`;

  const requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        const data = requete.response;

        // Extraire les informations importantes
        const temperature = data.main.temp; // Température arrondie
        const ville = data.name;

        // Mise à jour du DOM avec des emojis et des messages adaptés
        document.getElementById("ville").textContent = ville;
        document.getElementById(
          "temperature_label"
        ).textContent = `${temperature}`;

        if (temperature <= 5) {
          document.getElementById("tempsActuelle").textContent =
            "Temps froid ❄️ - Habillez-vous chaudement !";
        } else if (temperature > 5 && temperature <= 18) {
          document.getElementById("tempsActuelle").textContent =
            "Risque de pluie 🌧️ - Pensez au parapluie !";
        } else if (temperature > 18 && temperature <= 25) {
          document.getElementById("tempsActuelle").textContent =
            "Ciel dégagé ou partiellement couvert 🌤️.";
        } else {
          document.getElementById("tempsActuelle").textContent =
            "Temps chaud ☀️ - Restez hydraté !";
        }
      } else {
        alert(
          "Un problème est survenu. Veuillez vérifier le nom de la ville !"
        );
      }
    }
  };

  requete.onerror = function () {
    alert("Une erreur réseau est survenue. Veuillez réessayer plus tard !");
  };
}
