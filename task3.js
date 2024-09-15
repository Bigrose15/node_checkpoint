const { error } = require("console"); //This line imports the error object from the built-in console module in Node.js.

const fileSystem = require("fs"); //This line imports the built-in fs (File System) module in Node.js, assigning it to the variable fileSystem (fs). The fs module provides file system-related functionality, such as reading and writing files, creating directories, and performing other file system operations.

//This line uses the writeFile method from the fs module to write the string "Hello Node" to a file named welcome.txt in the current directory. If the file does not exist, it will be created. If the file already exists, its contents will be replaced with the new data.
fileSystem.writeFile("./welcome.txt", "Hello Node", (error) => {
  if (error) {
    return console.log(error);
  }
});

/*The writeFile method takes three arguments:


1. The file path and name ("./welcome.txt").
2. The data to write to the file ("Hello Node").
3. A callback function that handles errors.


The callback function takes an error object as an argument. If an error occurs during the file writing process, the function logs the error to the console using console.log(error). If no error occurs, the function does nothing.*/

const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
