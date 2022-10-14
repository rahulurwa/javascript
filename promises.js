// let p = new Promise((res, rej) => {
//     let isRoomcleaned = true;
//     if (isRoomcleaned) {
//         document.write("yes!room is cleaned");
//         res("your room is cleaned")
//     }
//     else {
//         document.write("idiot...!clean your room");
//         rej("please clean the room");
//     }
// })
// p.then(msg => console.log(msg)).catch(err => console.log(err)).finally(() => console.log("the function is executed"));
// console.log(p);


let e = new Promise((res, rej) => {
    let isTaskCompleted = false;
    if (isTaskCompleted) {
        // document.write("yes task has been completed");
        let h1 = document.createElement("h1");
        h1.innerHTML = "yes task has been completed";
        h1.style.color = "red";
        h1.style.position = "relative";
        h1.style.top = "250px";
        h1.style.textAlign = "center";
        h1.style.justifyContent = "center";
        document.body.append(h1);
        res("taskcompleted")
    }
    else {
        // document.write("No task is not completed");
        let h2 = document.createElement("h2");
        h2.innerHTML = "No task is not completed";
        h2.style.color = "red";
        h2.style.textAlign = "center";
        h2.style.position = "relative";
        h2.style.top = "250px";
        document.body.append(h2);
        rej("tasknotcompleted")
    }
})
e.then((msg) => console.log(msg)).catch(err => console.log(err)).finally(() => console.log("the function is executed"));
console.log(e);