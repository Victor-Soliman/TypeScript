"use strict";
let aName = "Elzero";
aName = "Nasr";
let al = 10;
al = 100;
al = "Nasr";
console.log("=====");
function getActions(btns) {
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
}
getActions({ up: "Go Up", right: "Go Right", down: "Go Down", left: "Go Left" });
function getActionss(btns) {
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
}
getActionss({ up: "Go Up", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
//# sourceMappingURL=dataType.js.map