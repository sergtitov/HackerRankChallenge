process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function out(s) {
  process.stdout.write(s);
}

function log(s) {
  console.log(s);
}

function getChocolates(n, c, m) {
  var wrappers = Math.floor(n / c);
  var chocolates = wrappers;
  while (wrappers >= m) {
    var additional = Math.floor(wrappers / m);
    chocolates += additional;
    wrappers = wrappers % m + additional;
  }

  return chocolates;
}

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);

    var res = getChocolates(n, c, m);
    log(res);
  }
}
