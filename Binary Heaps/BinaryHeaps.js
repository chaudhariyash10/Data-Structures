class maxBinaryHeaps{
    constructor(){
        this.values = [];
    }

    insert(data){
        this.values.push(data);

        if(this.values.length < 2) return;
 
        let index = this.values.length -1;
        let parentIndex = Math.floor((index-1)/2);
        while(index > 0 ){
            parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex] < this.values[index]){
            let temp                 =  this.values[parentIndex];
            this.values[parentIndex] =  this.values[index];
            this.values[index]       =  temp;
            }
            index = parentIndex;
            
            

        }
    }

    print(){
        console.log(this.values.toString());
    }


    extractMax(){
        const max = this.values[0];
        if(this.values.length > 1)
        this.values[0] = this.values[this.values.length -1];
        this.values.pop();
        this.trickleDown()

        return max;
    }

    trickleDown(){
        let idx = 0;
        let element = this.values[0];
        const length = this.values.length;
       

        while(true){
            
            let leftChildIdx = 2* idx +1;
            let rightChildIdx = 2* idx +2; 
            let swap = null;
            let leftChild , rightChild;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element)  swap = leftChildIdx;
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap == null && rightChild > element) ||
                    (swap != null && leftChild < rightChild)
                  ){
                    swap = rightChildIdx;
                    }
            }

            if(swap == null) break;

            else{
                let temp = this.values[idx];
                this.values[idx] = this.values[swap];
                this.values[swap] = temp;

                idx = swap;
            }
        }
     }



    
}

var heap = new maxBinaryHeaps;

heap.insert(55);
heap.insert(18);

console.log(heap.extractMax());
heap.print();
