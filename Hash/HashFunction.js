class HashTable{
    constructor(size = 4){
        this.keyMap = new Array(size);
    }

    _hash(  key ){
        const WeirdPrime = 53;

        var total = 0;

        for(let i = 0 ; i < Math.min(key.length , 100) ; i++){
            let char  = key[i];
            let value = char.charCodeAt(0) ;
            total = (total * WeirdPrime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key , value){
        let pos = this._hash(key);
      
        if(this.keyMap[pos] == null )
        this.keyMap[pos] = [];
        
        this.keyMap[pos].push([key,value]);
    }

    get(key){
        let pos = this._hash(key);
    
        for(let i of this.keyMap[pos]){
          
         
            if(key === i[0])
            return i[1];
        }
            return false;
    }
    values(){

        var arr= [];
        
        for(let i = 0 ; i < this.keyMap.length ; i++){
            if( this.keyMap[i])
            for(let j = 0 ; j < this.keyMap[i].length ; j++){
                if(!arr.includes(this.keyMap[i][j][1]))
                arr.push(this.keyMap[i][j][1]);
            }
        }

        return arr;
    }

    keys(){

        var arr= [];
        
        for(let i = 0 ; i < this.keyMap.length ; i++){
            if( this.keyMap[i])
            for(let j = 0 ; j < this.keyMap[i].length ; j++){
               
                arr.push(this.keyMap[i][j][0]);
            }
        }

        return arr;
    }
}



var hash = new HashTable();

hash.set("hello World " , "goodbye");
hash.set("hello" , "gWorld e");hash.set("I love " , "pizza");hash.set("hello World " , "goodbye");

console.log(hash.keys());