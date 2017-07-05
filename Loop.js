/*********** utilities *****************/
var TYPE_STRING = '[object String]';
var TYPE_ARRAY = '[object Array]';
var TYPE_NUMBER = '[object Number]';

function type(a) {
    return Object.prototype.toString.call(a);
}

function log(a) {
    console.log(a.toString());
}

function show(arr) {
    for (var i = 0; i < arr.length; i++) {
        log(arr[i]);
    }
}

function giaiThua(n) {
    if (n >= 0) {
        var T = 1;
        for (var i = 1; i <= n; i++) {
            T *= i;
        }
        return T;
    }
}

function revers(arr) {
    if (Array.isArray(arr)) {
        var n = arr.length;
        for (var i = 0; i < n / 2; i++) {
            var temp = arr[n - i - 1];
            arr[n - i - 1] = arr[i];
            arr[i] = temp;
        }
        return arr;
    } else {
        log("This is not an array!");
    }
}

function duplicate(a, n) {
    var s = a.toString();
    for (var i = 1; i < n; i++) {
        s += ('-' + a);
    }
    return s;
}

function double(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        arr[i] *= 2;
    }
    return arr;
}

function mod2(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        results[i] = arr[i] % 2;
    }
    return results;
}

/*********** functions *****************/


/************** calls  ****************/
