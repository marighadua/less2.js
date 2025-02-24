// amocana1
//  let array = [1,2,3,4,5];
// reverse
let i = 5; 
//  while loop
do {console.log(i);
    i--;
   
}while (i>0); 
   
       //  amocana2. tu aris 5 vacherebt cikls
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let x = 1;
 while ( x < 10) {
    console.log(x);
    x++;
    if (x===5) {
        break;
    } 
 }
//   amocana 3 
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//  
let array5 = [1, 2, 3, 7, 6, 9];
 for (let item of array5) {
    if (item === 7) {
        continue;
    }
    console.log(item);
    
 }
//    amocana 4 
// რას დააბრუნებს 8 == "8" ? true an false?
//  daabrunebs trus radgan ar aris mkacri toloba  da agiqvams rogorc swor mnishvnelobas 8=8s.
  
//    amocana 5
let array1= [1, 2, 4,8, 7, 15, 25, 3, 18, 12];
 for ( y=0 ; y < array1.length; y++) {
    if (array1[y] >5 ) {
        console.log(array1[y]);
    } 
    }
    // amocana 6
    // ...
    // amocana 7 
    let users = [
        {username: 'giorgi',age: 30},
        {username: 'levani', age: 25},
        {username: 'anna', age: 28}
    ]
    for (let item2 of users) {
        if (item2.age>25) {
            console.log(item2.username);
            
        }
    }
    



 
 




