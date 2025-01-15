"use strict";
function createDate(timeStampsm, d, y) {
    if (d != undefined && y != undefined) {
        return new Date(timeStampsm, d, y);
    }
    else {
        return new Date(timeStampsm);
    }
}
console.log(createDate(10, 25, 2023));
console.log(createDate(1698192000000));
