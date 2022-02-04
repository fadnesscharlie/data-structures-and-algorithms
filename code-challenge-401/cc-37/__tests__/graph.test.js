const {Graph} = require('../lib/graph')
// const {getPriceTravel} = require('../lib/graph')

const graph = new Graph();

const Pandora = graph.addVertex("Pandora");
const Arendelle = graph.addVertex("Arendelle");
const Metroville = graph.addVertex("Metroville");
const Monstropolis = graph.addVertex("Monstropolis");
const Narnia = graph.addVertex("Narnia");
const Naboo = graph.addVertex("Naboo");

graph.addDirectedEdge(Pandora, Arendelle, 150);
graph.addDirectedEdge(Pandora, Metroville, 82);
graph.addDirectedEdge(Arendelle, Pandora, 150);
graph.addDirectedEdge(Arendelle, Metroville, 99);
graph.addDirectedEdge(Arendelle, Monstropolis, 42);
graph.addDirectedEdge(Metroville, Pandora, 82);
graph.addDirectedEdge(Metroville, Arendelle, 99);
graph.addDirectedEdge(Metroville, Monstropolis, 105);
graph.addDirectedEdge(Metroville, Naboo, 26);
graph.addDirectedEdge(Metroville, Narnia, 37);
graph.addDirectedEdge(Monstropolis, Arendelle, 42);
graph.addDirectedEdge(Monstropolis, Metroville, 105);
graph.addDirectedEdge(Monstropolis, Naboo, 73);
graph.addDirectedEdge(Narnia, Metroville, 37);
graph.addDirectedEdge(Narnia, Naboo, 250);
graph.addDirectedEdge(Naboo, Narnia, 250);
graph.addDirectedEdge(Naboo, Metroville, 26);
graph.addDirectedEdge(Naboo, Monstropolis, 73);


describe("Return Flights", () => {
  it("should return true and cost amount", () => {
    let result = graph.getPriceTravel(Pandora, Metroville, Naboo)
    expect(result).toBe('Cost of Flight would be: 108');
  });
  it('should return false', () => {
    let result = graph.getPriceTravel(Pandora, Narnia, Monstropolis)
    expect(result).toBe('Could not connect your flights!')
  })
});
