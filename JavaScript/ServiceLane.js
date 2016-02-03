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

function getVehicle(n, t, width, i, j) {
  var min = Number.MAX_VALUE;
  for (var segment = i; segment <= j; segment++) {
    if (width[segment] < min) min = width[segment];
  }

  return min;
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var t = parseInt(n_temp[1]);
  width = readLine().split(' ');
  width = width.map(Number);
  for(var a0 = 0; a0 < t; a0++){
    var i_temp = readLine().split(' ');
    var i = parseInt(i_temp[0]);
    var j = parseInt(i_temp[1]);

    var res = getVehicle(n, t, width, i, j);

    log(res);
  }
}
