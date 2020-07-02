class Node{
    constructor(data , priority){
        this.data = data;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(data , priority){
        let temp = new Node(data , priority);

        this.values.push(temp);

        if(this.values.length < 2) return;

        let index = this.values.length - 1;

        let parentIndex = Math.floor((index - 1)/2 );
       
       

        while(index > 0 ){
            parentIndex = Math.floor((index - 1)/2 );

            if( this.values[parentIndex].priority > this.values[index].priority){
            let temp1 = this.values[parentIndex];
            this.values[parentIndex] =  this.values[index];
            this.values[index] = temp1;}

            index = parentIndex;
            
          
        }
    }

    dequeue(){
        let highPrio = this.values[0];

        this.values[0] = this.values[this.values.length -1];

        this.values.pop();

        this.trickleDown();

        return highPrio;
    }

    trickleDown(){

        let idx = 0 ;
    
        

        let length = this.values.length;

        while(true){
            
            let prio = this.values[idx].priority;
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild , rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(prio > leftChild.priority){
                    swap = leftChildIdx;
                }

            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap == null && prio > rightChild.priority)||
                    (swap != rightChild.priority < leftChild.priority)
                    ){
                        swap = rightChildIdx;
                    }
            }

            if(swap == null) return;

            else{
                let temp1 = this.values[idx];
                this.values[idx] = this.values[swap];
                this.values[swap]= temp1;

                idx = swap;
            }
        }

    }
}

var patient = new priorityQueue();

patient.enqueue("Common Cold" , 3);
patient.enqueue("Heat Stroke" , 1);
patient.enqueue("Mild head Ache" , 3);
patient.enqueue("HEad Injury" , 1);
patient.enqueue("High Fever" , 2);

console.log(patient.dequeue());
console.log(patient.dequeue());
console.log(patient.dequeue());
console.log(patient.dequeue());
console.log(patient.dequeue());

console.log(patient);
