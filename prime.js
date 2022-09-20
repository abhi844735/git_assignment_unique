function is_prime(num){
    let count =0;
    for(let i=0;i<num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return true;
    }
    return false;
}
let ans = is_prime(19);
if(ans==true){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}