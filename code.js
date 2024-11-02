
function augmentingPath(graph, start, end) {
    let result = [];

    console.log("Source: " + start);
    console.log("Target: " + end);

    // Return itself since it is both source and target
    if (start == end) { return result.unshift(start); }

    // displayGraph(graph);
    
    
    // TODO: Find augmenting path...

    // Traverse to next node without revisiting visited nodes
    for (let child in graph[start]) {
        if () { // TODO: check if node was already visited
            result.unshift(augmentingPath(graph, child, end));
            result.flat(Infinity); // Flatten array
        }
    }

    result.flat(Infinity); // Flatten array
    return result;
}

// Delete Later
function displayGraph(graph) {

    // How to display
    console.log("graph: " + JSON.stringify(graph) + "\n"); // Prints the graphs elements

    for (let currentNode in graph) { // Displays edges of all nodes
        console.log("graph['" + currentNode + "']: " + JSON.stringify(graph[currentNode]));

        for (let nextNode in graph[currentNode]) { // Lists which nodes it pointing to and weights
            console.log("\tcurrentNode: " + currentNode);
            console.log("\tnextNode: " + nextNode);
            console.log("\tweight of the edge currentNode->nextNode: " + graph[currentNode][nextNode]);
            console.log("\tweight of the edge nextNode->currentNode: " + graph[nextNode][currentNode] + "\n");
        }
    }

}
