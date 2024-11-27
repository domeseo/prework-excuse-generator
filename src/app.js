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
    "Dragonborn",
    "gnome",
    "half-elf",
    "half-orc"
  ];
  let Class = [
    "magician",
    "fighter",
    "druid",
    "bard",
    "cleric",
    "ranger",
    "paladin",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard"
  ];
  let imageList = [
    "https://t3.ftcdn.net/jpg/06/66/46/50/360_F_666465006_SAEXh6mjaKo3zRPeTd9KI8tun85IKaS5.jpg",
    "https://faithfictionfatherhood.com/wp-content/uploads/2021/06/343891.png?w=695&h=435&crop=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G57iKWn7gTPfiqSWoLSyFwO1zRDz2O8sZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkM65MgqtMIvLNUMNufWAXtrq15TSGT4aD3g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQmKRLofQkdQaqxzITz6soGrjoKNbOSg_Jw&s",
    "https://static.wikia.nocookie.net/ultimatebestiary/images/e/ed/MountainDwarf.jpg/revision/latest?cb=20150526211956",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWYc0sFKnmc2eCJOGXTaCUXYZ_bwOMQTjxA&s",
    "https://media.mythopedia.com/3KQuM6ycZ3lABeKWaGpEJc/4a36c2e05a1c8224ed324ba6202b7c6a/gnome-dnd-name-generator.jpeg?w=1280&h=720&fit=crop&crop=top",
    "https://media.mythopedia.com/woZBk9TX7iMZaKSRUluYb/b3f95aee0edfd4e4750b3ec86eafc4bf/half-elf-name-generator.jpg?w=640&ar=3:2&fit=crop&crop=top&q=50&auto=compress,format%20640w",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37b45cc0-364f-497c-9a38-fb1c5ba4cda0/dgo6x6f-ec3caa36-76d2-428e-97df-8d8310c09e71.png/v1/fill/w_894,h_894,q_70,strp/half_elf_sorcerer_character_art_adoptable_6__by_dissunder_dgo6x6f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3YjQ1Y2MwLTM2NGYtNDk3Yy05YTM4LWZiMWM1YmE0Y2RhMFwvZGdvNng2Zi1lYzNjYWEzNi03NmQyLTQyOGUtOTdkZi04ZDgzMTBjMDllNzEucG5nIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMzdiNDVjYzAtMzY0Zi00OTdjLTlhMzgtZmIxYzViYTRjZGEwXC9kaXNzdW5kZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.l9TQ8zlK4vehLMgui11kBR0qMIkTggvFHqTSczHWuCg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh-eKeIubmodkPLd7hOki_0SDy8udFdvPjg&s"
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

  document.getElementById("elements").src = imageList[randomRace];

  let reload = document.getElementById("reload");

  reload.addEventListener("click", function() {
    location.reload();
  });
};

// let elements = document.getElementById("elements");

// function randomImage() {
//   // let randomindex = Math.floor(Math.random() * imageList.length);
//   imageList.src = imageList[randomClass];
// }
