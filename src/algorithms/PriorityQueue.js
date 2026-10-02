class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(node, priority) {
        this.values.push({ node, priority });

        this.values.sort(
            (a, b) => a.priority - b.priority
        );
    }

    dequeue() {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

export default PriorityQueue;