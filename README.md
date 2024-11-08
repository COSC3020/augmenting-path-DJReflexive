# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

# Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime Analysis

When my augmentingPath() algorithm runs, it first checks if the start node is already the target node. If so, it will run in constant time. 

Otherwise, the recursive findPath() method is called. The same check occurs at the beginning of this method, if the current node matches the end node, this is the base case and will return the target node when found. If the target node was not yet found, the current node is added to the visited list, and reaches a for loop which iterates over the edges of the current node, which occurs $|E|$ times for the current node. In the for loop, if there is a child node that has not been visited yet, recursively call findPath() setting the child node to the current node.

The worst case scenerio for this algorithm is when a valid augmented path is the last path that is check within the graph, meaning it will iterate through all nodes within the graph. This will execute $|V|$ times. 

Since every node is checked, and all the edges (of valid paths) are iterated through as well, the final time complexity would be $\Theta(|V| + |E|)$.

# Sources

- ChatGPT: To help me understand how to access graph nodes and edge elements in the code.test.js file with examples.
- Google's Gemini: For quick desription of the cancat() method to insert in front with javascript arrays.

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
