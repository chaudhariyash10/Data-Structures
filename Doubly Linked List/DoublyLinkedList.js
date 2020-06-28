class Node{
    constructor(data){
        this.data = data
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data){

        var temp = new Node(data);
        if(this.head == null){
            this.head = temp;
            this.tail = temp;
        }
        else{
            this.tail.next = temp ;
            temp.prev = this.tail;
            this.tail = temp;
        }
        this.length++;
    }

    pop(){
        if(this.head == null) return null;

        else{
            var temp = this.tail.prev;
            this.tail.prev = null;
            temp.next = null;
            this.tail = temp;
            
        }
        this.length--;
    }

    shift(){

        if(this.head == null) return null;

        var temp = this.head.next;

        temp.prev = null;
        this.head.next  = null;
        this.head = temp;

        this.length--;
    }

    unshift(data){

        var temp = new Node(data);
        if(this.head== null){
            this.head = temp;
        }
        else{
            this.head.prev = temp;
            temp.next = this.head;
            this.head = temp;
        }
        this.length++;
    }

    
    print(){
        var temp = this.head;

        while(temp){
            console.log(temp.data)
            temp = temp.next;
        }
    }
    reverseprint(){
        var temp = this.tail;
        {
           for(let i = 0 ; i < this.length ;i++){
                console.log(temp.data);
                temp = temp.prev;
            }
        }
    }
    
}

var list = new DoublyLinkedList;

list.push(1);
list.push(2);
list.push(3);
list.unshift(0);
list.reverseprint();
list.print();