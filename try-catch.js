// unsituation sydenely situation is know as error handling
// try-catch is used to handle the error
// try-catch is used to handle the error
// try-catch is used to handle the error
// syntax 

// try{
//     // code
// }catch(error){
//     // code
//}


/**        ----------
 *        /start/
 *        .......
 * eccuted try 
 * block
 * 
 * error                                   ...........ignor the catch block
 * 
 * argument the rest of try  the block
 * 
 * execution the catch block
 * 
 * 
 * end
 * 
 * 
 *    
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



// try{
//     let a = undefined;

//     console.log(a[0])



// }
// catch(error){
//     console.log("error is " + error)
// }
// finally{
//     console.log("this is finally block")
// }




//  real application of try-catch

try{
    console.log("we are inside try block")
    // function1()
    // function2()
    console.log(a)
}
catch(error){
    console.log("error is " + error)
    console.log(error.name)
    console.log(error.message)
}
finally{    
    console.log("this is finally block")
}






