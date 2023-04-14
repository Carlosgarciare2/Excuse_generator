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
  let pronun = ["A", "The"];
  let subject = ["Jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let object = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

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
