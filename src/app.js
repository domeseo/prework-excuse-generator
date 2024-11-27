/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let race = [
    "Elf",
    "human",
    "demon",
    "dwarf",
    "angel",
    "hill dwarf",
    "mountain dwarf",
    "Dragonborn",
    "gnome",
    "half-elf",
    "half-orc"
  ];
  let Class = [
    "magician",
    "guerrero",
    "druid",
    "bard",
    "cleric",
    "monk",
    "fighter",
    "druid",
    "ranger",
    "paladin",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard",
    ""
  ];
  let level = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let name = [
    "Aelarion",
    "Brynlin",
    "Caelyra",
    "Daerion",
    "Elandra",
    "Faelar",
    "Gildan",
    "Havrin",
    "Ilyndra",
    "Jorven",
    "Kaelith",
    "Lorith",
    "Maelis",
    "Naeris",
    "Orinth",
    "Pavrin",
    "Quenith",
    "Rilven",
    "Sylvara",
    "Tandril",
    "Urath",
    "Vaelith",
    "Wynria",
    "Xelphar",
    "Ylindra",
    "Zarvok",
    "Althar",
    "Bellin",
    "Cyranth",
    "Drayven",
    "Erynth",
    "Farlind",
    "Galbryn",
    "Havenar",
    "Irintha",
    "Jarvok",
    "Keltryn",
    "Lyndra",
    "Morith",
    "Narven",
    "Otharion",
    "Perwyn",
    "Qildor",
    "Relath",
    "Sorvyn",
    "Tyrion",
    "Ulindar",
    "Vorlath",
    "Wynvor",
    "Xarnith",
    "Yrnella",
    "Zarwyn"
  ];

  let randomRace = Math.floor(Math.random() * race.length);
  let randomClass = Math.floor(Math.random() * Class.length);
  let randomlevel = Math.floor(Math.random() * level.length);
  let randomName = Math.floor(Math.random() * name.length);

  document.getElementById("excuse").innerHTML =
    "Your race is " +
    race[randomRace] +
    " your class is " +
    Class[randomClass] +
    " your starting level is : " +
    level[randomlevel] +
    " your DnD name is " +
    name[randomName];
};

let reload = document.getElementById("reload");

reload.addEventListener("click", function() {
  location.reload();
});
