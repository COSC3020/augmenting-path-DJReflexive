
function augmentingPath(graph, start, end) {
    let result = [];
    let visited = [];

    // Return itself since it is both source and target
    if (start == end) { return [start]; }

    result = findPath(graph, start, end, visited)

    if (result && result.length > 0) {
        return result.flat(Infinity);
    }

    return [];
}


function findPath(graph, current, target, visited) {

    // Return itself if current is the same as target
    if (current == target) { return [current]; }

    visited.push(current);

    // Traverse to next node without revisiting visited nodes
    for (let child in graph[current]) {
        if (!visited.includes(child)) { // Check if node was already visited
            let path = findPath(graph, child, target, visited);
            if (path) {
                return [current].concat(path);
            }
        }
    }

    return null;
}
