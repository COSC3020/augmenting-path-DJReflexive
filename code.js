
function augmentingPath(graph, start, end) {
    console.log("Source: " + start);
    console.log("Target: " + end);

    // Return itself since it is both source and target
    if (start == end) { return [start]; }

    displayGraph(graph);
    
    
    // TODO: Find augmenting path...




    return [];
}


function displayGraph(graph) {

    // How to display
    console.log("\ngraph: " + JSON.stringify(graph) + "\n"); // Prints the graphs elements

    for (let node in graph) { // Displays edges of all nodes
        console.log("graph['" + node + "']: " + JSON.stringify(graph[node]));

        for (let nextNode in graph[node]) { // Lists which nodes it pointing to and weights
            console.log("\tedge: " + nextNode); // or graph[node]
            console.log("\tweight: " + graph[node][nextNode] + "\n");
        }
    }

}
