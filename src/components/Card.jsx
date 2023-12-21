import "../style.scss";
import Stars from "./Stars";

function Card() {
  return (
    <div className="myCard">
      <img src="https://viajes.nationalgeographic.com.es/medio/2021/03/01/las-normas-de-la-raclette_d603a114_1200x799.jpg" 
      alt="Raclette photo" className="Img" />
      <div className="myText">
        <h2 className="Plat">Plat d'hiver</h2>
        <div className="PlatName">
          <h3>Raclette</h3>
      
          <p>
          L'origine de la raclette remonterait au Moyen Âge en Suisse, dans le canton du Valais. 
          Elle serait née d'une histoire de bergers qui faisaient fondre leur fromage près du feu 
          et le raclaient ensuite. 
        
          </p>
        </div>
        <div className="myStars">
          <Stars />
        </div>
      </div>
    </div>
  );
}

export default Card;