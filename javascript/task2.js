function even(){
    let n=[11,12,13,14,15,16,17,18,19,20];

    for(let i = 0; i < n.length; i++) { 
        // console.log(n[i]);
        if(n[i]%2==0){
            console.log(n[i]+" even number ");
        }
        else if(n[i]%2!=0){
            console.log(n[i]+" odd number ");
        }
        else{
            console.log(" not a  number ");
        }
  }

}

even();

