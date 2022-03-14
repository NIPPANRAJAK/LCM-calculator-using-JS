var a=10;
var b=20;
var h=1;
for(i=0; i<=a && i<=b; i++){
  if (a % i == 0 && b%i == 0)
  h=i;
  }
  lcm = (a * b) / h; 
  console.log(lcm)