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

function cut(arr) {
  var min = Math.min.apply(Math, arr);
  for(var i = 0; i < arr.length; i++) {
    arr[i] -= min;

    if (arr[i] <= 0) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);

  while(arr.length > 0) {
    log(arr.length);
    cut(arr);
  }
}
