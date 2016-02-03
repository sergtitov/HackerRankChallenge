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

function findDigits(n) {
  var s = "" + n;
  var digits_s = s.split('');
  var digits = digits_s.map(Number);

  var count = 0;
  digits.forEach(function (digit) {
    if ((digit != 0) && (n % digit === 0))
      count++;
  });

  return count;
}

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
    var n = parseInt(readLine());
    var digits = findDigits(n);
    log(digits);
  }
}

/**
 * Created by sergtitov on 2/3/16.
 */
