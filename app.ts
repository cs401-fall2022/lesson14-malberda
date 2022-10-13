/**
 * This returns the string hello
 * @returns the String hello
 */
 function hello (): String {
    return "Typescript Basics";
};

/**
 * turns demo red
 */
 function turnRed() {
    if(document != null){
        let c = document.getElementById("header").style.color;
        if(c === 'red'){
            document.getElementById("header").style.color = "black";
        }else{
            document.getElementById("header").style.color = "red";
        }
    }    
}

function turnYellow() {

    if(document != null){
        let c = document.getElementById("b1").style.color;
        if(c === 'yellow'){
            document.getElementById("b1").style.color = "purple";
        }else{
            document.getElementById("b1").style.color = "yellow";
        }
    }    
}

export {hello, turnRed}