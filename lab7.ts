<!DOCTYPE html>
<html>
    <head>
        <title>stylesheet</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <h1>TypeScript Basics</h1>
    <body>
        This information is from 
        <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">here</a>
        <div>
            Typescript is a Superset of JavaScript, containing all of JavaScripts features and systems, but also including something new, a <b>Type</b>
        </div><br>
        <div>
            Typing is not something consistent within Javascript, meaning you can assign a variable the <b>Type</b> string or the <b>Type</b> char, but you can reassign those variables freely, leading to t a lack of consistency within a variable name.<br>
        </div><br>
        It allows for developers to give a function something like a <b>string</b> as one of its parameters and reject all other types of input,
        and unlike in Javascript, if you have a variable <b>x</b> defined with <b>Type</b> string, you know that anytime the variable x is used, it will be a string.
        <br><br>
        In addition, you can now declare the typings of all fields within a class, rather than just assuming that the fields remain the same type. It also allows for checking the types, 
        using typeOf to see something like 
        <div class="codebox">
            <code>
                let myString = "hello";
                <br>
                if (typeof myString === "string")<br>
                    console.log("true");<br>
                if (typeof myString === "number")<br>
                    console.log("false");<br>
            </code>
        </div>
        And only the first string would print to console.
        <br><br><br>
        <h2></h2>
    </body>
</html>