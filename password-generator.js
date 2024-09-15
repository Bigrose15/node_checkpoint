var generator = require("generate-password");

function generatePassword() {
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  console.log(password);
}

generatePassword();
