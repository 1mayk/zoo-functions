const data = require("./data/zoo_data");

// console.log(data["species"]);

const species = data["species"];

species.map((specie) => {
  console.log(specie.id);
});
