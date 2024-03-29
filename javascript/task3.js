 
 let p="";


 function pat1(){
   let n=5;
    for (let i=0;i<n;i++) { 
      for(let j=0;j<=n;j++){
         p+="*";
      }
      p+="*\n";
    }
    console.log(p);
 }
 pat1(p);

 function pat2(){
   let n=5;
   for (let i=0;i<n;i++) {  
     for(let j=0;j<i;j++) {
      p+="*";

     }
     p+=" \n";
 }
 console.log(p);
}
pat2(p);


function pat3(){
   let n=5;
   for (let i=0;i<n;i++) {  
     for(let j=0;j<i;j++) {
      p+=" ";
     }
     
     p+="- \n";
 }
 console.log(p);
}
pat3(p);

