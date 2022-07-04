// BT1 :Nhập ngày tháng năm rồi lùi ngày tăng ngày 
/**
 * input
 * Giá trị ngày tháng năm
 * Xử lý 
 * tạo biến lưu các giá trị
 * Dựa vào quy tắc Ngày tháng tạo if else để xét các trường hợp sau đó tăng giảm ngày cho phù hợp
 * 
 * output
 * Trả giá trị khi click tăng ngày và giảm ngày sau đó in ra màn hình
 */

var tomorrow = document.getElementById('tomorrow');
tomorrow.addEventListener('click', () => {
    //input
    var day = Number(document.getElementById('takeDay').value);
    var month = Number(document.getElementById('takeMonth').value);
    var year = Number(document.getElementById('takeYear').value);
    var resultDMY = document.getElementById('resultDMY');

    //output
    var output = '';
    //progress

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day === 31) {
            month++;
            day = 1;
        } else if (day < 31) {
            day++;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 30) {
            month++;
            day = 1;
        } else if (day < 30) {
            day++;
        }
    } else if (year % 4 === 0) {
        if (month === 2 && day === 29) {
            day = 1;
            month++;
        } else if (month === 2 && day < 29) {
            day++;
        }
    } else if (year > 13 || month > 13 || day > 32) {
        return resultDMY.innerHTML = 'Ngày bạn nhập vừa rồi không hợp lệ';
    } else {
        if (month === 2 && day === 28) {
            day = 1;
            month++;
        } else if (month === 2 && day < 28) {
            day++;
        } else if (month === 2 && day > 28) {
            day = 0;

            return resultDMY.innerHTML = 'Ngày bạn nhập vừa rồi không hợp lệ';
        }
    }


    if (month > 12) {
        month = 1;
        year++;
    }
    output = day + '/ ' + month + '/ ' + year
    resultDMY.innerHTML = output;


});
var yesterday = document.getElementById('yesterday');

yesterday.addEventListener('click', () => {
    //input
    var day = Number(document.getElementById('takeDay').value);
    var month = Number(document.getElementById('takeMonth').value);
    var year = Number(document.getElementById('takeYear').value);
    var resultDMY = document.getElementById('resultDMY');

    //output
    var output = '';
    //progress

    if (month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day === 1) {
            month--;
            day = 31;
        } else if (day <= 31) {
            day--;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 1) {
            month--;
            day = 31;
        } else if (day <= 30) {
            day--;
        }
    } else if (month === 1 && day === 1) {
        month = 12;
        day = 31;
        year--;
    } else if (month === 1) {
        if (day <= 31) {
            day--;
        }
    }

    if (year % 4 === 0) {
        if (month === 2) {
            if (day === 1) {
                day = 31;
                month--;
            } else if (day <= 29) {
                day--;
            } else if (day > 29) {
                day = 0;

                return resultDMY.innerHTML = 'Ngày bạn nhập vừa rồi không hợp lệ';
            }
        }

    } else {
        if (month === 2) {
            if (day === 1) {
                day = 31;
                month--;
            } else if (day <= 28) {
                day--;
            } else if (day > 28) {
                resultDMY.innerHTML = 'Ngày bạn nhập vừa rồi không hợp lệ';
                return;
            }
        }
    }
    output = day + '/ ' + month + '/ ' + year
    resultDMY.innerHTML = output;


});
//BT2:Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày.

var member = document.getElementById('member');
member.addEventListener('click', () => {
    //input
    var takeMonths = Number(document.getElementById('takeMonths').value);
    var takeYears = Number(document.getElementById('takeYears').value);


    //output
    var output = '';
    //progress
    var day = 0;
    if (takeMonths === 1 || takeMonths === 3 || takeMonths === 5 || takeMonths === 7 || takeMonths === 8 || takeMonths === 10 || takeMonths === 12) {
        day = 31;
    } else if (takeMonths === 4 || takeMonths === 6 || takeMonths === 9 || takeMonths === 11) {
        day = 30;
    }
    if (takeYears % 4 === 0) {
        if (takeMonths === 2) {
            day = 29;
        }
    } else if (takeYears % 4 !== 0) {
        if (takeMonths === 2) {
            day = 28;
        }
    }
    output = day;
    var resultMember = document.getElementById('resultMember');
    resultMember.innerHTML = 'Số ngày trong tháng là: ' + output + " Ngày";


});
var i = '17';
i = i.replace('1', '')
i = Number(i);
console.log(i)

//BT3:
var checkNumber = document.getElementById('checkNumber');
checkNumber.addEventListener('click', () => {
    //input
    var number = Number(document.getElementById('takeInterger').value);


    //output
    var output = '';

    //progress
    var hundereds = Math.floor(number / 100);
    var dozen = Math.floor((number % 100) / 10);
    var unit = number % 10;
    if (unit === 0 && number < 10) {
        a = 'Không'
    } else if (unit === 1 && dozen === 0 || unit === 1 && number < 20 || unit === 1 && number > 100) {
        a = 'Một'
    } else if (unit === 1 && number > 20) {
        a = 'Mốt'
    } else if (unit === 2) {
        a = 'Hai'
    } else if (unit === 3) {
        a = 'Ba'
    } else if (unit === 4) {
        a = 'Bốn'

    } else if (unit === 5) {
        a = 'Năm'
    } else if (unit === 6) {
        a = 'Sáu'
    } else if (unit === 7) {
        a = 'Bảy'
    } else if (unit === 8) {
        a = 'Tám'
    } else if (unit === 9) {
        a = 'Chín'
    }
    //Hàng chục
    if (dozen === 0) {
        b = 'Lẻ'
    } else if (dozen === 1) {
        b = 'Mười'
    } else if (dozen === 2) {
        b = 'Hai Mươi'
    } else if (dozen === 3) {
        b = 'Ba Mươi'
    } else if (dozen === 4) {
        b = 'Bốn Mươi'
    } else if (dozen === 5) {
        b = 'Năm Mươi'
    } else if (dozen === 6) {
        b = 'Sáu Mươi'
    } else if (dozen === 7) {
        b = 'Bảy Mươi'
    } else if (dozen === 8) {
        b = 'Tám Mươi'
    } else if (dozen === 9) {
        b = 'Chín Mươi'
    }

    //Hàng Trăm
    if (hundereds === 1) {
        c = 'Một Trăm'
    } else if (hundereds === 2) {
        c = 'Hai Trăm'
    } else if (hundereds === 3) {
        c = 'Ba Trăm'
    } else if (hundereds === 4) {
        c = 'Bốn Trăm'

    } else if (hundereds === 5) {
        c = 'Năm Trăm'
    } else if (hundereds === 6) {
        c = 'Sáu Trăm'
    } else if (hundereds === 7) {
        c = 'Bảy Trăm'
    } else if (hundereds === 8) {
        c = 'Tám Trăm'
    } else if (hundereds === 9) {
        c = 'Chín Trăm'
    }
    if (number < 10) {
        output = a
    } else if (number === 10) {
        output = 'Mười'
    } else if (number < 100 && unit === 0) {
        output = b
    } else if (number < 100) {
        output = b + '  ' + a
    } else if (number === 100 && dozen === 0 && unit === 0) {
        output = c
    } else if (number > 100 && dozen === 0 && unit === 0) {
        output = c
    } else if (number > 100 && unit === 0) {

        output = c + '  ' + b
    } else if (number > 100) {
        if (dozen >= 2) {
            a = 'Mốt'
        }
        output = c + '  ' + b + '  ' + a
    }



    var resultcheckNumber = document.getElementById('resultcheckNumber');
    resultcheckNumber.innerHTML = 'Số ' + output;


});

//BT4:Tọa Độ trường
var shape = document.getElementById('shape');
shape.addEventListener('click', () => {
    //input
    var Coordinate1X = Number(document.getElementById('Coordinate1X').value);
    var Coordinate1Y = Number(document.getElementById('Coordinate1Y').value);

    var Coordinate2X = Number(document.getElementById('Coordinate2X').value);
    var Coordinate2Y = Number(document.getElementById('Coordinate2Y').value);

    var Coordinate3X = Number(document.getElementById('Coordinate3X').value);
    var Coordinate3Y = Number(document.getElementById('Coordinate3Y').value);

    var CoordinateSchoolX = Number(document.getElementById('CoordinateX').value);
    var CoordinateSchoolY = Number(document.getElementById('CoordinateY').value);

    var name1 = document.getElementById('name1').innerHTML;
    var name2 = document.getElementById('name2').innerHTML;
    var name3 = document.getElementById('name3').innerHTML;
    //output
    var output = '';
    //progressv
    var d1 = Coordinate(Coordinate1X, Coordinate1Y, CoordinateSchoolX, CoordinateSchoolY);
    var d2 = Coordinate(Coordinate2X, Coordinate2Y, CoordinateSchoolX, CoordinateSchoolY);
    var d3 = Coordinate(Coordinate3X, Coordinate3Y, CoordinateSchoolX, CoordinateSchoolY);

    function Coordinate(x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        var d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        return d
    }
    if (d1 > d2 && d1 > d3) {
        output = name1
    } else if (d2 > d1 && d2 > d3) {
        output = name2
    } else if (d3 > d1 && d3 > d2) {
        output = name3
    } else if (d1 === d2 && d2 === d3) {
        output = 'Cả ba'
    } else if (d1 === d2) {
        output = name1 + ' và ' + name2;
    } else if (d2 === d3) {
        output = name2 + ' và ' + name3;
    }


    var resultshape = document.getElementById('resultshape');
    resultshape.innerHTML = 'Người có quãng đường tới trường xa nhất là bạn: ' + output;


});