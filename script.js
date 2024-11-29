// Application de Meteo dans le monde

let ville = "Kinshasa";
let key = "1e2e38f1f56a63dd1904bccd4d55842f";
let changer = document.getElementById("changer");

recevoirTemperature(ville);

changer.addEventListener("click", () => {
  ville = prompt("Quelle ville souhaitez-vous voir ?");
  recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`;

  let requete = new XMLHttpRequest();
  // GET
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let data = requete.response;
        console.log(data);

        let temperature = data.main.temp;
        let ville = data.name;

        document.getElementById("ville").textContent = ville;
        document.getElementById("temperature_label").textContent = temperature;
      } else {
        alert("un probleme est survenu, merci de revenir plus tard !");
      }
    }
  };
}
