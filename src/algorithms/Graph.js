class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(id) {
        this.nodes[id] = [];
    }

    addEdge(from, to, weight) {
        this.nodes[from].push({
            node: to,
            weight: weight,
        });

        this.nodes[to].push({
            node: from,
            weight: weight,
        });
    }

    getNeighbors(node) {
        return this.nodes[node];
    }
}

export default Graph;