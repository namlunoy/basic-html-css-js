/*********** utilities *****************/
var TYPE_STRING = '[object String]';
var TYPE_ARRAY = '[object Array]';
var TYPE_NUMBER = '[object Number]';

function pow(a, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= a;
    }
    return result;
}

function square(a) {
    return pow(a, 2);
}

function type(a) {
    return Object.prototype.toString.call(a);
}

function log(a) {
    console.log(a.toString());
}

/*********** functions *****************/

// Tính bình phương
function bai1(a) {
    return square(a);
}

// Tính bình phương của biểu thức 3a+2b-c
function bai2(a, b, c) {
    return square(3 * a + 2 * b - c);
}

// Nếu chuỗi dài hơn 10 thì thêm dấu '...'
function bai3(s) {
    if (type(s) == TYPE_STRING) {
        if (s.length > 10)
            s = s.substr(0, 10) + '...';
        log(s);
    } else {
        log("ERROR: parameter is not a string!");
    }
}

// Chỉ viết hoa chữ cái đầu tiên của chuỗi
function bai4(s) {
    if (type(s) == TYPE_STRING) {
        s = s.toLowerCase();
        var firstChar = s.charAt(0).toUpperCase();
        s = firstChar + s.substr(1, s.length - 1);
        log(s);
    } else {
        log("ERROR: parameter is not a string!");
    }
}

// Tìm giá trị nhỏ nhất trong mảng
function bai5(arr) {
    if (Array.isArray(arr)) {
        var isNumArr = true;
        for (var i = 0; i < arr.length; i++) {
            if (type(arr[i]) != TYPE_NUMBER) {
                isNumArr = false;
                break;
            }
        }
        if (isNumArr == false) {
            log("ERROR: parameter is not a number array!");
            return;
        }
        var minValue = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < minValue)
                minValue = arr[i];
        }
        log(minValue);
    } else {
        log("ERROR: parameter is not an array!")
    }
}

// Xắp xếp mảng string
function bai6(strArr) {
    if (Array.isArray(strArr)) {
        strArr.sort();
        for (var i = 0; i < strArr.length; i++) {
            log(strArr[i]);
        }
    } else {
        log("ERROR: parameter is not an array!")
    }
}

function bai7() {
    var teacher = { firstName: "Kim", lastName: "Dung", age: 10, say: function () { } };
    var student = { firstName: "Tran", lastName: "Long", age: 20, say: function () { } };
    var parent = { firstName: "Nguyen", lastName: "Linh", age: 30, say: function () { } };

    var aboutMe = function () {
        log("Xin chào, tôi là " + this.firstName + " " + this.lastName + ". Năm nay tôi " + this.age + " tuổi.")
    }

    teacher.say = aboutMe;
    teacher.say();
    student.say = aboutMe;
    student.say();
    parent.say = aboutMe;
    parent.say();
}



/************** calls  ****************/
bai1(2);
bai2(1, 2, 3);
bai3('01234567890000');
bai4('aloha Bingo');
bai5([3, 2, 1]);
bai6(['Hoang Van Cong', 'Ngoc Anh', 'Tang Anh', 'Tang Ngoc Anh']);
bai7();