/*
    Node.js is a cross-platform, open-source server environment that can run on Windows, 
    Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, 
    runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.

    Environment to run JS out of the browser
    built on chrome's V8 engine (compose out code to machine code)
    Big Community
    Full Stack

    No acces to DOM
    No Window 
    Server Side App
    Filesystem
    versions
    CommonJS
    no UI

    we wont won't write document.queryselector()

    REPL (Read Eval Print Loop)
    CLI executable

    Modules (Encapsulated Code (Only Share minimum))


    module.exports = {john, peter}
    module.exports = sayHi (sayhi is a function)

    two types of imports 
    const names = require('./names');

    names.peter

    const {john,peter} = require('./names');

    Builtin Modeules
    OS
    PATH
    FS
    HTTP

    asynchronous -> non blocking
    synchronous -> blocking

    req is an IncomingMessage object and res is a ServerResponse object.
    So check for unique properties on each, for example if the particular object has a writeHead() function, 
    then it's the response object.
    You may also be able to use instanceof to check: res instanceof http.ServerResponse

    OR we can say that request is basically the endpoint client is requesting

    NPM ->
    reuse our own code in other projects
    use code written by other devs
    share our own solutions with other developers

    local dependency (limited to project) vs global dependency (can be used in any project) 

    npm --version
    npm install -g <name>   (GLOBAL)
    npm install <name>      (LOCAL)

    npm init -y

    dependencies vs devdependencies vs peerdependencies
    -> A dependency is a library that a project needs to function effectively. 
    -> DevDependencies are the packages a developer needs during development.
    -> A peer dependency specifies that our package is compatible with a particular version of an npm package.

    nodemon:

    Event Loops
    We first run the immediate tasks (can be a 100 console.logs) and then only we run the callback

    Reuqest and Response are 2 independant Events


*/

timeout = 2000;


//Every 2 seconds it will invoke the callback
setInterval(() => {
    console.log("I am task 1")
}, 1000);
setInterval(() => {
    console.log("I am task 2")
}, 1000);
setInterval(() => {
    console.log("I am task 3")
}, 1000);
setInterval(() => {
    console.log("I am task 4")
}, 1000);
setInterval(() => {
    console.log("I am task 5")
}, 1000);


// Check the output of this First 1 2 3 4 5 1 2 3 4 5


