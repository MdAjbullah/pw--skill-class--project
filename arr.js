// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function(item,index,array){
//     console.log(item,index,arr);
// });


// arr.forEach((item,index,array)=>{  
//     console.log(item,index,arr);
// });

// const heros=["naagraj","doga","parmanu","super commando dhruv"];
// heros.forEach((el) => 
//     console.log(el.toUpperCase())
// );  

// arr.map((item,index,array)=>{
//     console.log(item,index,arr);
// });


// const heros1=["naagraj","doga","parmanu","super commando dhruv"];
// const newHeros=heros1.map((el) => el.toUpperCase());
// console.log(newHeros);

// filter
const arr1=[1,2,3,4,5,6,7,8,9,10];
const evenArr=arr1.filter((el)=>el%2===0);
console.log(evenArr);

heros1=["naagraj","doga","parmanu","super commando dhruv"];
const newHeros1=heros1.filter((el)=>{
    return el.endsWith("raj")});
    console.log(newHeros1);


    // sgoping card

    const cartBill=[10,20,30,40,50,60,70,80,90,100];
    const sumOfCartbill=cartBill.reduce((acc,el)=>{
        return acc+el ;
    });
    console.log(sumOfCartbill);

    // games 
    const gamesscore=[200,300,400,500,600,700,800,900,1000];

    // if value is number
    // const highScore=gamesscore.every((v)=>typeof v==="number");{
      
    // };
    // console.log(highScore);


    const above200=gamesscore.find((score)=>score>200);
    console.log(above200);
    // findIndex
    // some
    // short
        // findIndex

        const gamesscore1=[200,300,400,500,600,700,800,900,1000];
        const above2001=gamesscore1.findIndex((score)=>score>200);
        console.log(above2001);
