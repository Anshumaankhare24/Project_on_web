function palindrom(){
    let str="abccba";
    let left=0;
    let right= str.length-1;

    while (left<right){
        if(str[left] !== str[right]){
            console.log(str+"is a palindrom");
            // return false;
        }
        left++;
        right--;
    }
  }
  
  palindrom();

palindrom();

function armstrong(){
 let s=0;
 const n=153;
  let t=n;
  let r;

  while(t>0){
    let r = t%10;
    s += r*r*r;
    t=parseInt(t/10);
  }
  if (s==n){
    console.log(n +" is an armstrong number :");
  }
  else{
    console.log(n +" is not a armstrong number :");
  }

}
armstrong();