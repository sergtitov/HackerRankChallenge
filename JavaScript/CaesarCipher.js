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

var A_code = "A".charCodeAt(0);
var Z_code = "Z".charCodeAt(0);
var a_code = "a".charCodeAt(0);
var z_code = "z".charCodeAt(0);

function rotateFromTo(c, k, from, to) {
  c += k;

  if (c > to) {
    c = c - to + from - 1;
  }

  return c;
}

function rotate(c, k) {
  var res = c;

  if (c >= A_code && c <= Z_code){
    res = rotateFromTo(c, k, A_code, Z_code);
  }
  else if (c >= a_code && c <= z_code) {
    res = rotateFromTo(c, k, a_code, z_code);
  }

  return res;
}

function encrypt(n, s, k_orig) {
  var res = "";
  for (var i = 0; i < s.length; i++) {
    var c = s.charCodeAt(i);

    var k = k_orig;
    while(k > 0) {
      var r = (k > 2) ? 2 : k;
      c = rotate(c, r);
      k -= r;
    }

    res += String.fromCharCode(c);
  }

  return res;
}

function main() {
  var n = parseInt(readLine());
  var s = readLine();
  var k = parseInt(readLine());

  var res = encrypt(n, s, k);
  log(res);
}
