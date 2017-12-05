(function(){

    var selectElement = function(item) {
        return document.querySelector(item);
    };


    // lab 0010
    var stringInputUI = function(node) {
        var newLabel = document.createElement('label');
        newLabel.className = 'label userNumber';
        newLabel.innerHTML = '';

        var newControl = document.createElement('div');
        newControl.className = 'control has-icons-right';

        var newInput = document.createElement('input');
        newInput.className = 'input';
        newInput.placeholder = 'Ваша строка';
        newInput.type = 'text';

        var newDeleteBtn = document.createElement('span');
        newDeleteBtn.className = 'icon is-big is-right deleteUserNumber';

        var newDeleteBtnIcon = document.createElement('i');
        newDeleteBtnIcon.className = 'fa fa-times-circle';

        newLabel.appendChild(newControl);
        newControl.appendChild(newInput);
        newLabel.appendChild(newDeleteBtn);
        newDeleteBtn.appendChild(newDeleteBtnIcon);
        node.appendChild(newLabel);

        newDeleteBtnIcon.onclick = function() {
            node.removeChild(newLabel)
        }
    };


    // short string
    selectElement('.addUserShortString').addEventListener('click', function() {
        stringInputUI(userShortString);
    });

    selectElement('.checkShortString').addEventListener('click', function() {
        var MAX_VALUE = 100000000;

        var allUserStrings = document.querySelectorAll('#userShortString input.input');
        var arrayUserStrings = [];
        var minStringValue = [];

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;
            var regTest = /[a-zA-Zа-яА-ЯёЁ]/g;

            if(regTest.test(userString)) {
                arrayUserStrings.push(userString);
            }
        }

        var minStringLength =  arrayUserStrings.reduce(function(x, y) {
            return Math.min(x, y.length)
        }, MAX_VALUE);

        if(arrayUserStrings.length == 0) {
            minStringLength = 0;
        }

        for(var z = 0; z < arrayUserStrings.length; z++) {
            if (arrayUserStrings[z].length == minStringLength) {
                minStringValue.push(arrayUserStrings[z]);
            }
        }

        selectElement(".lab2 span.resultShortStringTitle").innerHTML = "Cамая короткая строка: ";
        selectElement(".lab2 span.resultShortStringValue").innerHTML = minStringValue;

        selectElement(".lab2 span.resultShortLengthTitle").innerHTML = "Длина строки: ";
        selectElement(".lab2 span.resultShortLengthValue").innerHTML = minStringLength;
    });


    // long string
    selectElement('.addUserString').addEventListener('click', function() {
        stringInputUI(userLongString);
    });

    selectElement('.checkString').addEventListener('click', function() {
        var MIN_VALUE = 0;

        var allUserStrings = document.querySelectorAll('#userLongString input.input');
        var arrayUserStrings = [];
        var maxStringValue = [];

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;
            var regTest = /[a-zA-Zа-яА-ЯёЁ]/g;

            if(regTest.test(userString)) {
                arrayUserStrings.push(userString);
            }
        }

        var maxStringLength =  arrayUserStrings.reduce(function(x, y) {
            return Math.max(x, y.length)
        }, MIN_VALUE);

        for(var z = 0; z < arrayUserStrings.length; z++) {
            if (arrayUserStrings[z].length == maxStringLength) {
                maxStringValue.push(arrayUserStrings[z]);
            }
        }

        selectElement(".lab2 span.resultLongStringTitle").innerHTML = "Cамая длинная строка: ";
        selectElement(".lab2 span.resultLongStringValue").innerHTML = maxStringValue;

        selectElement(".lab2 span.resultLongLengthTitle").innerHTML = "Длина строки: ";
        selectElement(".lab2 span.resultLongLengthValue").innerHTML = maxStringLength;
    });


    // length increase
    selectElement('.addUserIncreaseString').addEventListener('click', function() {
        stringInputUI(userIncreaseString);
    });

    selectElement('.checkIncreaseString').addEventListener('click', function() {
        var allUserStrings = document.querySelectorAll('#userIncreaseString input.input');
        var arrayUserStrings = [];

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;

            if(userString != "") {
                arrayUserStrings.push(userString);
            }
        }

        var sortedUserStrings = arrayUserStrings.sort(function (a, b) {
            return a.length - b.length;
        });

        var sortedUserStringsLength = sortedUserStrings.map(function(item){
            return item.length;
        });

        selectElement(".lab2 span.resultIncreaseStringTitle").innerHTML = "Cтроки в порядке возрастания их длин: ";
        selectElement(".lab2 span.resultIncreaseStringValue").innerHTML = sortedUserStrings;

        selectElement(".lab2 span.resultIncreaseLengthTitle").innerHTML = "Длина строк в порядке возрастания: ";
        selectElement(".lab2 span.resultIncreaseLengthValue").innerHTML = sortedUserStringsLength;
    });


    // decrease length
    selectElement('.addUserDecreaseString').addEventListener('click', function() {
        stringInputUI(userDecreaseString);
    });

    selectElement('.checkDecreaseString').addEventListener('click', function() {
        var allUserStrings = document.querySelectorAll('#userDecreaseString input.input');
        var arrayUserStrings = [];

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;

            if(userString != "") {
                arrayUserStrings.push(userString);
            }
        }

        var sortedUserStrings = arrayUserStrings.sort(function (a, b) {
            return a.length - b.length;
        });

        var reverseSortedUserStrings = sortedUserStrings.reverse();

        var sortedUserStringsLength = reverseSortedUserStrings.map(function(item){
            return item.length;
        });

        selectElement(".lab2 span.resultDecreaseStringTitle").innerHTML = "Cтроки в порядке убывания их длин: ";
        selectElement(".lab2 span.resultDecreaseStringValue").innerHTML = reverseSortedUserStrings;

        selectElement(".lab2 span.resultDecreaseLengthTitle").innerHTML = "Длина строк в порядке убывания: ";
        selectElement(".lab2 span.resultDecreaseLengthValue").innerHTML = sortedUserStringsLength;
    });

    // less average
    selectElement('.addUserLessAverageString').addEventListener('click', function() {
        stringInputUI(userLessAverageString);
    });

    selectElement('.checkLessAverageString').addEventListener('click', function() {
        var allUserStrings = document.querySelectorAll('#userLessAverageString input.input');
        var arrayUserStrings = [];
        var MIN_VALUE = 0;

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;

            if(userString != "") {
                arrayUserStrings.push(userString);
            }
        }

        var sortedUserStrings = arrayUserStrings.sort(function (a, b) {
            return a.length - b.length;
        });

        var sortedUserStringsLength = sortedUserStrings.map(function(item){
            return item.length;
        });

        var userStringAmount = sortedUserStringsLength.length;

        var totalStringLength =  sortedUserStringsLength.reduce(function(x, y) {
            return x + y;
        },MIN_VALUE);

        var averageLength = Math.floor(totalStringLength / userStringAmount);

        var averageStringValue = sortedUserStrings.filter(function (item) {
            return item.length <= averageLength;
        });

        var averageStringLength = averageStringValue.map(function(item) {
            return item.length;
        });

        selectElement(".lab2 span.resultLessAverageStringTitle").innerHTML = "Cтроки, длина которых меньше средней: ";
        selectElement(".lab2 span.resultLessAverageStringValue").innerHTML = averageStringValue;

        selectElement(".lab2 span.resultLessAverageLengthTitle").innerHTML = "Длины строк: ";
        selectElement(".lab2 span.resultLessAverageLengthValue").innerHTML = averageStringLength;
    });


    // larger average
    selectElement('.addUserMoreAverageString').addEventListener('click', function() {
        stringInputUI(userMoreAverageString);
    });

    selectElement('.checkMoreAverageString').addEventListener('click', function() {
        var allUserStrings = document.querySelectorAll('#userMoreAverageString input.input');
        var arrayUserStrings = [];
        var MIN_VALUE = 0;

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;

            if(userString != "") {
                arrayUserStrings.push(userString);
            }
        }

        var sortedUserStrings = arrayUserStrings.sort(function (a, b) {
            return a.length - b.length;
        });

        var sortedUserStringsLength = sortedUserStrings.map(function(item){
            return item.length;
        });

        var userStringAmount = sortedUserStringsLength.length;

        var totalStringLength =  sortedUserStringsLength.reduce(function(x, y) {
            return x + y;
        },MIN_VALUE);

        var averageLength = Math.floor(totalStringLength / userStringAmount);

        var averageStringValue = sortedUserStrings.filter(function (item) {
            return item.length >= averageLength;
        });

        var averageStringLength = averageStringValue.map(function(item) {
            return item.length;
        });

        selectElement(".lab2 span.resultMoreAverageStringTitle").innerHTML = "Строки, длина которых больше средней: ";
        selectElement(".lab2 span.resultMoreAverageStringValue").innerHTML = averageStringValue;

        selectElement(".lab2 span.resultMoreAverageLengthTitle").innerHTML = "Длина строк: ";
        selectElement(".lab2 span.resultMoreAverageLengthValue").innerHTML = averageStringLength;
    });


    // num substring
    selectElement('.checkNumSubstring').addEventListener('click', function() {
        var allUserStrings = selectElement('#userNumSubstring textarea').value;
        var arrayUserStrings = allUserStrings.split(" ");

        var regTest = /[0-9]/;

        var allNumberString = arrayUserStrings.filter(function(item){
            if(regTest.test(item)) {
                return item;
            }
        });

        var MIN_VALUE = 0;

        var maxNumberString =  allNumberString.reduce(function(x, y) {
            return Math.max(x, y)
        }, MIN_VALUE);

        selectElement(".lab2 span.resultNumSubstringTitle").innerHTML = "Подстроку максимальной длины: ";
        selectElement(".lab2 span.resultNumSubstringValue").innerHTML = maxNumberString;
    });


    // same substring
    selectElement('.checkSameSubstring').addEventListener('click', function() {

        var userString = selectElement('#userSameSubstring textarea').value;
        var userStringLength = userString.split(" ").length;

        var stringBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var countObject = {};

        function characterCount(word, character) {
            var count = 0;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === character) {
                    count++;
                }
            }
            return count;
        }

        for (var j = 0, m = stringBase.length; j < m; j++) {
            var currentChar = stringBase[j];
            countObject[currentChar] = characterCount(userString, currentChar);
        }

        var sameCharArr = [];

        var obj = countObject;
        var keys = Object.keys(obj);

        for (var i = 0, l = keys.length; i < l; i++) {
            if(obj[keys[i]] == userStringLength) {
                console.log(keys[i] + ' is ' + obj[keys[i]]);

                if(obj[keys[i]] == userStringLength) {
                    sameCharArr.push(keys[i]);
                }
            }
        }

        var sameChar = sameCharArr.join();

        selectElement(".lab2 span.resultSameSubstringTitle").innerHTML = "Буквы, которые встречаются во всех словах: ";
        selectElement(".lab2 span.resultNumSameSubstringValue").innerHTML = sameChar;
    });

    // UI check numbers
    var regNum = /[0-9]/g;

    var errorMessageUI = function (item) {
        item.classList.add("is-danger");
        item.classList.remove("is-success");
    };

    var successMessageUI = function(item) {
        item.classList.add("is-success");
        item.classList.remove("is-danger");
    };


    // multiplication of even
    selectElement('.addUseNumberMul').addEventListener('click', function() {
        stringInputUI(userNumberMul);
    });

    selectElement('.checkUserNumberMul').addEventListener('click', function() {

        var allUserNumbers = document.querySelectorAll('#userNumberMul input.input');
        var arrayUserNumbers= [];


        for(var i = 0; i < allUserNumbers.length; i++) {
            var userNumber = allUserNumbers[i].value;

            if (userNumber != "") {
                arrayUserNumbers.push(userNumber);
            }

            var arrUserNumberEven = [];

            for (var j = 0; j < arrayUserNumbers.length; j++) {
                var jj = j + 1;
                if (jj % 2 == 0) {
                    arrUserNumberEven.push(arrayUserNumbers[j]);
                }
            }

            if (arrUserNumberEven != false) {
                var numberEvenMul = arrUserNumberEven.reduce(function (x, y) {
                    return Number(x) * Number(y);
                }, 1);

                selectElement(".lab2 span.resultUserNumberMulTitle").innerHTML = "Произведение элементов массива с четными номерами: ";
                selectElement(".lab2 span.resultUserNumberMulValue").innerHTML = numberEvenMul;
            }

            if (arrUserNumberEven == false) {
                selectElement(".lab2 span.resultUserNumberMulTitle").innerHTML = "Произведение элементов массива с четными номерами: ";
                selectElement(".lab2 span.resultUserNumberMulValue").innerHTML = "0";
            }
        }
    });


    // sum
    selectElement('.addUseNumberSum').addEventListener('click', function() {
        stringInputUI(userNumberSum);
    });

    selectElement('.checkUserNumberSum').addEventListener('click', function() {
        var allUserNumbers = document.querySelectorAll('#userNumberSum input.input');
        var arrayUserNumbers= [];

        for(var i = 0; i < allUserNumbers.length; i++) {
            var userNumber = allUserNumbers[i].value;

            if(userNumber != "") {
                arrayUserNumbers.push(Number(userNumber));
            }
        }

        var sortedUserNumbers = arrayUserNumbers.sort(function (a, b) {
            return a > b;
        });

        var reverseSortedUserNumbers = sortedUserNumbers.reverse();
        console.log(reverseSortedUserNumbers);

        var arrUserSubNumber = [];

        for (var j = 0; j < reverseSortedUserNumbers.length; j++) {

            if (reverseSortedUserNumbers[j] > 0) {
                arrUserSubNumber.push(arrayUserNumbers[j]);
            } else {
                break
            }
        }

        console.log(arrUserSubNumber);

        var numberSum = arrUserSubNumber.reduce(function (x, y) {
            return Number(x) + Number(y);
        }, 0);

        selectElement(".lab2 span.resultUserNumberSumTitle").innerHTML = "Сумма элементов массива: ";
        selectElement(".lab2 span.resultUserNumberSumValue").innerHTML = numberSum;
    });

    // sign
    var start = new Date(2017, 9, 1, 0, 0, 0, 0);
    var current = new Date();

    function checkDate(date, node) {
        var dateNodeList = document.querySelectorAll(node);

        for(var i = 0; i < dateNodeList.length; i++) {
            dateNodeItem = dateNodeList[i];
            dateNodeItem.innerHTML = date.toLocaleString('en-GB');
        }
    }

    var dateStart = new checkDate(start, ".startDate");
    var dateCurrent = new checkDate(current, ".currentDate");
})();