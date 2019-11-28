require("../lib/index.js");

describe("function readFile", () => {
  it("is a function", () => {
    expect(typeof window.data.readFile).toBe("function");
  });
});
it("returns `pokemons ordenados por nome - crescente`", () => {
  expect(window.data.([
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]},
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}
  ], "ascending", "name" )).toEqual([
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}, 
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]}      
  ]);
}); 