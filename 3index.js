// for (let count=1; count<=100; count++){
//     console.log("apna collge");
// }
// 
// let sum=0;
// for (let i=1; i<=5;i++){
//     sum=sum + i;
// }
// console.log("sum=",sum);
// 
// let sum=0;
// n=23;
// for (let i=1; i<=n;i++){
//     sum=sum + i;
// }
// console.log("sum=",sum);  
 // 
// for (let i=1; i<=30; i++){
//     console.log("i = ",i );
// }
// for (let i=30; i>=1; i--){
//     console.log("i = ",i );
// }
// ........while loop...
// let i=1;
// while(i<=100){
//     console.log("i=",i);
//     i++;
// } 

// let i=1;
// while(i<=10){
//     console.log("apana collge");
//     i++;
// } 
// .....do while loop ...
// let i=1;
//  do{
//     console.log("i=",i);
//     i++;
// }
//  while(i<=10);
// 
//  let i=1;
//  do{
//     console.log("Mayank");
//     i++;
// }
//  while(i<=10);
 //
//.....for-of loop...
// let str="javaScript";
// let size = 0;
// for(let i of str){
// //   iterator ->characters
// console.log("i=",i);
// size++;
// }
// console.log("string size=",size);
// 
// let str="mayank";
// let size =0;
// for (let i of str){
//     console.log("i=",i);
//     size++;   
// }
// console.log("string size=",size);
// 
// let str="palanpur";
//  let size=0;
//  for (let i of str){
//     console.log("i=", i);
//     size++;
//  }
//  console.log ("string size=",size);
// 
// let str=" k k gothi primary scool"; 
// let size =0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);
// 
// str="surat,palanpur,ajamer,rajkot";
// let size =0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size",size);
// 
// str="12525384682355366362525262626266434425";
// let size =0;
// for (let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("String size",size);
// 
// str="7359658062 59469375439(585)";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size",size);
// // 
// // .....for-in-loop...
// // objects and arrays
// // 
// let student={
// name:"Mayank patel",
// age:22,
// cgpa:8.5,
// ispass:true,
// };
// for(let key in student){
//     console.log("Key=", key, "value",student[key]);
// }
// // 
// let school={
//    student:234,
//    classroom:8,
//    teacher:6,
//    schoolname:"primary school",
// };
// for(let key in school){
//     console.log("key=",key, "size",school[key]);
// }
// // 
// let city={
//     name: "palanpur",
//     house:4000,
//     car:3800,
//     school:100,
//     people:20000,
//     hospital:50,
// };
// for(let deta in city){
//     console.log("deta=",deta,"size",city[deta]);
// }
// // 
// let contry={
//     name:"India",
//     state:34,
//     people:120000000,
//     city:300,
// };
// for(let deta in contry){
//     console.log("deta=",deta,"size",contry[deta ]);
// }
// // 
// // ..1 to 100 number print...
// // let i=1;
// // while(i<=100){
// //     console.log("i=",i);
// //     i++;
// // } 
// // 
// for(let num=0;num<=100; num++){
//     console.log("num=",num);
// }
// // 
// // ...even number...
// for(let num=0;num<=100; num++){
//     if(num%2===0){//even number
//     console .log("num=",num);
// }
// }
// // ...odd number...
// for(let num=0;num<=100; num++){
//     if(num%2!==0){// odd number
//     console .log("num=",num);
// }
// }
// // 
// // // ....strings
// //  let str ="Mayank";
// //  console.log(str[5]);

// // // // Template literals
// // let spcialString ="This is a template literal";
// //  console.log ( typeof spcialString);
// // 
// // 
// let obj={
//     item:"pen",
//     price:10,
// };
// //  let output = 'the cost of ${obj.item} is ${obj.price}rupees';
// //  console.log(output)
// console.log("the cost of", obj.item,obj.price,"rupees"); 
// // 
// // ...template literals \n next line. \t teb space
// console.log("Apana\nCollege");
// console.log("Apana\tCollege");
// 
// string methods in js 
// these are builit- infunctions to manipulate a string
// toupperCase srring   /string are inmutable
// let str = "Apanacollege";
//     newstr = str.toUpperCase()
//     console.log(newstr);
//
// toLowerCase()
// let str = "Apanacollege";
//   newstr = str.toLowerCase()
//    console.log(newstr);
//
// str.trime()remove whitespaces  stating & and
// let str = "        Apanacollege mayank java       ";
// console.log (str.trim());
// 
// str.concat(str2)  //joins str2 with str1
// let str1 = "Mayank";
// let str2 ="123";
// let res =str1.concat(str2);
// console.log(res);
// 
// let str1 = "Mayank";
// let str2 ="123145";
// let res =str1 +str2;  //miultipal use
// console.log(res);

//str.replace //new search value
// let str ="heloo";
// console.log(str.replace("l","p"))
// 
// let str ="heloollllololo";
// console.log(str.replaceAll("l","p")) //sari jaga pe lagegi
// 
// str.charAT(idx)
// let str = "I lovejs";
// str = str.replace("I","S");
// console.log(str);
//  practis 
// let fullName = prompt("enter your fullname ");
// let username = "@" + fullName +fullName.length  ;
// console.log(username);
// 
// arrays  ..creat aerray
// collections of items .linear
// let marks = [56,45,455,45,455,44,34]
// console.log(marks);
// console.log(marks .length);//property
// 
// let herose = ["mayank","hulk", "shaktiman","amit"];
// console.log(herose);
// 
// let number =["23","45","35","253","233","352"];
// console.log(number);
// 
// ...Array indices...singal lin

// looping over an array
// for loop  length
// let herose = ["mayank","hulk","thor" ,"shaktiman","amit"];
//    for (let i =0; i <herose.length ; i++){
//     console.log(herose [i]);
//    }
// 
// let number = ["345","445","3455","23345","3344","45654"];
//  for(let i=0; i <number.length ;i++){
//     console.log(number[i]);
//  }
 