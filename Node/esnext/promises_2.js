setTimeout(function () {
  console.log("timeout");

  setTimeout(function () {
    console.log("timeout 2");
    setTimeout(function () {
      console.log("timeout 3");
    }, 2000);
  }, 2000);
}, 2220);

//usando promises

function esperaPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Resolvendo promise...");
      resolve(`texto após ${tempo / 1000} segundos`);
    }, tempo);
  });
}

esperaPor(3000)
  .then(() => esperaPor())
  .then(() => esperaPor());
