function countValues(val1, val2) {
    var digits = val1.toString().split('');
    var realDigits = digits.map(Number)
    console.log(realDigits);
}

countValues(159,689)