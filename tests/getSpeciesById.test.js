const getSpeciesById = require("../src/getSpeciesById");

describe("getSpeciesById", () => {
  it("Retorna array vazio caso não receba nenhuma parâmetro", () => {
    const getSpecies = getSpeciesById();
    const expected = [];
    expect(getSpecies).toEqual(expected);
  });
  it("Retorna uma espécie de recebe apenas um id", () => {
    const getSpecies = getSpeciesById("0938aa23-f153-4937-9f88-4858b24d6bce");
    const expected = [
      {
        id: "0938aa23-f153-4937-9f88-4858b24d6bce",
        name: "lions",
        popularity: 4,
        location: "NE",
        availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        residents: [
          {
            name: "Zena",
            sex: "female",
            age: 12,
          },
          {
            name: "Maxwell",
            sex: "male",
            age: 15,
          },
          {
            name: "Faustino",
            sex: "male",
            age: 7,
          },
          {
            name: "Dee",
            sex: "female",
            age: 14,
          },
        ],
      },
    ];
    expect(getSpecies).toEqual(expected);
  });
  it("Retorna array com várias espécies se recebe mais de um id", () => {});
});
