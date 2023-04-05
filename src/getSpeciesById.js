const data = require("../data/zoo_data");

function getSpeciesById(...ids) {
  const species = data["species"];
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesById;
