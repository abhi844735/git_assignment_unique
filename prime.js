function is_prime(num){
    let count =0;
    for(let i=0;i<num;i++){
        if(num%i==0){
            count=2;
        }
    }
    if(count==2){
        return true;
    }
    return false;
}
let ans = is_prime(19);
if(ans==true){
    console.log("prime and composite both");
}else{
    console.log("not prime");
}