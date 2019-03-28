//debugger practice

// function runWithDebugger(ourFunction) {
//     debugger;
//     ourFunction();
// };

// runWithDebugger(function logTenNumbers() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// });




// setTimeout(function() {
//     console.log('Wake up Tom!!!!!!');
// }, 5000)


var students = ['maddie', 'tom', 'joe'];
// these 4 all do the same thing with array students
function logName(name) {
    console.log(name);
};

for (let i = 0; i < students.length; i++) {
    logName(students[i]);
};

students.forEach(function(name){
    console.log(name);
});


function forEach(myArray, myFunction){
    for (let i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}
 
//useful way to run javascript on click event
 htmlId.addEventListener('click', function(event){
     console.log(event);
 })