/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the_excuse").innerHTML = generatorexcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generatorexcuse = () => {
  let pronun = ["Un", "El"];
  let subject = ["ladron", "conductor", "perro", "cómico", "soldado", "jefe"];
  let action = ["a cogido mis", "a tirado mis", "me robo mis", "cambio mis"];
  let object = ["deberes", "carpetas", "coches", "zapatos"];
  let where = ["en la calle.", "en mi casa.", "en el parque."];

  let proInd = Math.floor(Math.random() * pronun.length);
  let subInd = Math.floor(Math.random() * subject.length);
  let actInd = Math.floor(Math.random() * action.length);
  let objInd = Math.floor(Math.random() * object.length);
  let whereInd = Math.floor(Math.random() * where.length);

  return (
    pronun[proInd] +
    " " +
    subject[subInd] +
    " " +
    action[actInd] +
    " " +
    object[objInd] +
    " " +
    where[whereInd] +
    " "
  );
};
