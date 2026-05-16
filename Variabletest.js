//variable test
//do not modify
let teststate = "undefined"
let teststate2 = "undefined"
let finaltest = "undefined"
let localvar = 6
let globalvar = 6
let locallist = "array:1,2,3,4"
let globallist = "array:1,2,3,4"
if (localvar == 6){
    console.log("Test success")
    let teststate = "success"
    console.log(teststate)
    // this is a success state. where if Variable Calibration is done. the Results should show up in the Console.
} else{
    console.error("Test failed")
    let teststate = "fail"
    console.error(teststate)
    // this is a fail state. where if Variable Calibration is done. the Results should show up in the Console
}
if (globalvar == 6){
    console.log("test success")
    let teststate2 = "success"
    console.log(teststate2)
} else{
    console.error("test failed")
    let teststate2 = "fail"
    console.error(teststate2)
}
if (locallist == "array:1,2,3,4"){
    console.log("test success")
    let finaltest = "success"
    console.log(finaltest)
} else{
    console.error("test failed")
    let finaltest = "fail"
    console.error(finaltest)
}
if (globallist == "array:1,2,3,4"){
    console.log("final test success")
    let finaltest = "final:success"
    console.log(finaltest)
} else{
    console.error("final test failed")
    let finaltest = "final:fail"
    console.error(finaltest)
}
