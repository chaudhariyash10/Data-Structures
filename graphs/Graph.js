class graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if( !this.adjacencyList[name] )
         this.adjacencyList[name] = [];
    }

    addEdge(vertex1 , vertex2 ){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
               
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        for(var V of this.adjacencyList[vertex]){
            this.removeEdge( V , vertex);
        }

        delete this.adjacencyList[vertex];
    }

    DFSRec(start){
        const adjacencyList = this.adjacencyList;
        const visited       = {};
        const result        = [];

      (function DFS (vertex){
          if(!vertex) return null;
        result.push(vertex);
        visited[vertex] = true;

        adjacencyList[vertex].forEach(neighbor => {
           if(!visited[neighbor])
            return DFS(neighbor);           
        });
      })(start)

      return result;
    }

    DFSItr(vertex){
        const adjacencyList = this.adjacencyList;
        const visited = {};
        var stack = [];
        const result = [];

        stack.push(vertex);

        while(stack.length > 0){
            var curr = stack.pop();
            if( visited[curr] == undefined){
            result.push(curr);
            visited[curr] = true;

            for(var V of this.adjacencyList[curr]){
                stack.push(V);
             }
            
            }

        }
        return result;
    }

    BFSItr(vertex){
        const adjacencyList = this.adjacencyList;
        const result = [];
        const visited = {};
        var queue = [];

        queue.push(vertex);

        while(queue.length > 0){
            var curr = queue.shift();
            
            if( visited[curr] != true){
                result.push(curr);
                visited[curr] = true;
                
                for(var V of adjacencyList[curr]){
                    queue.push(V);
                    
                }
            }    
            
        }
        return result;
    }

      
}


var gra  = new graph;

gra.addVertex("A");      //          A
gra.addVertex("B");      //       /     \
gra.addVertex("C");      //      B       C  
gra.addVertex("D");      //      |       |
gra.addVertex("E");     //       D ----  E
gra.addVertex("F");     //       \       / 
                        //        \     /
gra.addEdge("A" , "B");   //         F
gra.addEdge("A" , "C");
gra.addEdge("B" , "D");
gra.addEdge("C" , "E");
gra.addEdge("D" , "E");
gra.addEdge("D" , "F");
gra.addEdge("F" , "E");

console.log(gra.BFSItr("A"));