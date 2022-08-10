let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";
//creat elements
function element(name, kind, img) {
  //elemnets
  let card = document.createElement("div");
  let name1 = document.createElement("h2");
  let kind1 = document.createElement("p");
  let img1 = document.createElement("img");
  img1.src = img;
  //content
  let head = document.createTextNode(name);
  let kindContent = document.createTextNode(kind);
  let imgSrc = document.createTextNode(img);

  name1.appendChild(head);
  kind1.appendChild(kindContent);
  img1.appendChild(imgSrc);

  //style
  card.style.width = "250px";
  card.style.hight = "400px";
  card.style.background = "#444";

  card.style.color = "#fff";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.display = "inline-block";
  img1.style.width = "100%";
  img1.style.height = "300px";
  name1.style.height = "50px";
  kind1.style.height = "30px";
  name1.style.background = "#444";
  kind1.style.background = "#444";

  // finshing
  card.appendChild(name1);
  card.appendChild(kind1);
  card.appendChild(img1);

  container.appendChild(card);
}

element(
  "Spider Man",
  "Action/Adventure",
  "https://img.yts.mx/assets/images/movies/Spider_Man_3_2007/medium-cover.jpg"
);
element(
  "John Wick",
  "Action/Thriller",
  "https://img.yts.mx/assets/images/movies/john_wick_2014/medium-cover.jpg"
);
element(
  "Fast & Furious",
  "Action/street racing",
  "https://images7.alphacoders.com/325/325096.jpg"
);
element(
  "Mission: Impossible",
  "Action Spy",
  "https://img.yts.mx/assets/images/movies/Mission_Impossible_Ghost_Protocol_2011/medium-cover.jpg"
);
element(
  "Minions",
  "Adventure / Animation / Comedy",
  "https://img.yts.mx/assets/images/movies/minions_the_rise_of_gru_2022/medium-cover.jpg"
);
element(
  "Eclipse",
  "Action / Adventure / Sci-Fi",
  "https://img.yts.mx/assets/images/movies/eclipse_the_rise_of_ink_2018/medium-cover.jpg"
);
element(
  "Kung Fu Ghost",
  "Action / Comedy",
  "https://img.yts.mx/assets/images/movies/kung_fu_ghost_2022/medium-cover.jpg"
);
element(
  "Corrective Measures",
  "Action / Sci-Fi / Thriller",
  "https://img.yts.mx/assets/images/movies/corrective_measures_2022/medium-cover.jpg"
);
element(
  "Sanak",
  "Action / Thriller",
  "https://img.yts.mx/assets/images/movies/sanak_2021/medium-cover.jpg"
);
element(
  "Jurassic World Dominion",
  "Action / Adventure / Sci-Fi / Thriller",
  "https://img.yts.mx/assets/images/movies/jurassic_world_dominion_2022/medium-cover.jpg"
);
element(
  "Paradise Highway",
  "Thriller",
  "https://img.yts.mx/assets/images/movies/paradise_highway_2022/medium-cover.jpg"
);
element(
  "Dhoom 3",
  "Action / Crime / Drama / Thriller",
  "https://img.yts.mx/assets/images/movies/dhoom_3_2013/medium-cover.jpg"
);
element(
  "As They Made Us",
  "Action / Drama",
  "https://img.yts.mx/assets/images/movies/as_they_made_us_2022/medium-cover.jpg"
);
element(
  "Ancient Alien Origins",
  "Documentary",
  "https://img.yts.mx/assets/images/movies/ancient_alien_origins_2015/medium-cover.jpg"
);
element(
  "Metroland",
  "Comedy / Drama",
  "https://img.yts.mx/assets/images/movies/metroland_1997/medium-cover.jpg"
);
element(
  "Satyameva Jayate 2",
  "Action / Crime / Drama",
  "https://img.yts.mx/assets/images/movies/satyameva_jayate_2_2021/medium-cover.jpg"
);
element(
  "Softie",
  "Drama",
  "https://img.yts.mx/assets/images/movies/softie_2021/medium-cover.jpg"
);
element(
  "Nothing Serious",
  "Comedy / Drama / Romance",
  "https://img.yts.mx/assets/images/movies/nothing_serious_2021/medium-cover.jpg"
);
element(
  "Cops and Robbers",
  "Action / Thriller",
  "https://img.yts.mx/assets/images/movies/cops_and_robbers_2017/medium-cover.jpg"
);
element(
  "Trashed",
  "Documentary",
  "https://img.yts.mx/assets/images/movies/trashed_2012/medium-cover.jpg"
);
element(
  "Extraction",
  "Action / Thriller",
  "https://img.yts.mx/assets/images/movies/extraction_2020/medium-cover.jpg"
);
element(
  "POC: Dead Men Tell No Tales",
  "Action / Adventure / Fantasy",
  "https://img.yts.mx/assets/images/movies/pirates_of_the_caribbean_dead_men_tell_no_tales_2017/medium-cover.jpg"
);
element(
  "POC: On Stranger Tides",
  "Action / Adventure / Fantasy",
  "https://img.yts.mx/assets/images/movies/Pirates_of_the_Caribbean_On_Stranger_Tides_2011/medium-cover.jpg"
);
