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

function getNumberOfSquares(A, B) {
  var a = Math.sqrt(A);
  var b = Math.sqrt(B);

  a = Math.ceil(a);
  b = Math.floor(b);

  return b - a + 1;
}

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
    var n_temp = readLine().split(' ');
    var A = parseInt(n_temp[0]);
    var B = parseInt(n_temp[1]);

    var n = getNumberOfSquares(A, B);

    log(n);
  }
}
