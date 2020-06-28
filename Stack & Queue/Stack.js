class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class stack { 
    constructor(){
        this.top = null;
        this.length = 0;
    }

    push(data){
        var temp = new Node(data);

        if(this.top == null){
            this.top = temp;
        }
        else{
            temp.next = this.top;
            this.top = temp;
        }
        this.length++;
    }

    pop(){
        if(this.top === null) return;
        else{
            var temp = this.top.next;
            this.top = temp;     
        }
        this.length--;
    }

  print(top){
        if(top == null) return;

        this.print(top.next);

        console.log(top.data);
    }
}

var Stack = new stack;
Stack.push(1);
Stack.push(2);
Stack.push(3);
Stack.push(4);
Stack.push(7);

Stack.pop();
Stack.print(Stack.top);