"use strict";
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return console.log(a + b);
    }
    else if (typeof a === "number" && typeof b === "string") {
        return console.log(a + b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        return console.log(`${a} and ${b}`);
    }
    else {
        console.log("wrong");
    }
}
add(2, 3);
add(20, "JAV HD");
add("JAV", "HD");
// add("jav",20) //Error
