/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Typescript Basics";
}
;
/**
 * turns demo red
 */
function turnRed() {
    if (document != null) {
        var c = document.getElementById("header").style.color;
        if (c === 'red') {
            document.getElementById("header").style.color = "black";
        }
        else {
            document.getElementById("header").style.color = "red";
        }
    }
}
export { hello, turnRed };
//# sourceMappingURL=app.js.map