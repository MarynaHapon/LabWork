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
    	var MAX_VALUE = 1000000;

        var allUserStrings = document.querySelectorAll('#userShortString input.input');
        var arrayUserStrings = [];
        var minStringValue = [];

        for(var y = 0; y < allUserStrings.length; y++) {
            var userString = allUserStrings[y].value;
            var regTest = /[a-z]/g;

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
            var regTest = /[a-z]/g;

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

        selectElement(".lab2 span.resultIncreaseLengthTitle").innerHTML = "Длина строк: ";
        selectElement(".lab2 span.resultIncreaseLengthValue").innerHTML = sortedUserStringsLength;
    });

    // sign
    var start = new Date(2017, 9, 1);
    var current = new Date();

    function checkDate(date, node) {
    	this.date = date;
		this.seconds = date.getSeconds();
		this.minutes = date.getMinutes();
    	this.hours = date.getHours();
        this.day = date.getDay();
    	this.month = date.getMonth();
    	this.year = date.getFullYear();

        checkTime = function(i) {
            if (i < 10) {i = "0" + i}
            return i;
        };

        minutes = checkTime(this.minutes);
        seconds = checkTime(this.seconds);

		this.setDateToPage = function() {
            selectElement(node).innerHTML = this.day + "-" + this.month + "-" + this.year + "; " + this.hours + ":" + this.minutes + ":" + this.seconds + ";";
        };

	}

    var dateStart = new checkDate(start, ".startDate");
    var dateCurrent = new checkDate(current, ".currentDate");

    dateStart.setDateToPage();
    dateCurrent.setDateToPage();

    dateStart.setDateToPage();
    dateCurrent.setDateToPage();

    console.log(dateStart);
    console.log(dateCurrent);

	// lab 0001
    function alertMessege() {
		return alert("Hello, World!");
	}

	selectElement(".alertHello").onclick = function(){
		alertMessege();
	};

	// modal hello
	function ModalMessege(text, item) {
		this.text = text;
		this.item = item;

		this.message = function() {
			alert("Hello, " + text + " !");
		};

		this.setModalMessege = function() {
			selectElement(".modalHello .message-body").innerHTML = this.text;
		};

		this.showModal = function(item) {
			selectElement(this.item).style.display = "flex";
		};

		this.hideModal = function(item) {
			selectElement(this.item).style.display = "none";
		}
	}

	var modalHelloWorld = new ModalMessege("Hello, World!", ".modalHello");
	console.log(modalHelloWorld);

	selectElement(".modalHelloShow").addEventListener("click", function() {
		modalHelloWorld.setModalMessege();
		modalHelloWorld.showModal();
	});

	selectElement(".modalHelloHide").addEventListener("click", function() {
		modalHelloWorld.hideModal();
	});



	// user modal info
	function ModalInfo(modalNode, messageNode) {
		this.modalNode = modalNode;
		this.messageNode = messageNode;

		this.showModal = function(modalNode) {
			selectElement(this.modalNode).style.display = "flex";
		};

		this.hideModal = function(modalNode) {
			selectElement(this.modalNode).style.display = "none";
		};

		this.getUserMessage = function(messageNode) {
			return selectElement(this.messageNode).value;
		};

		this.setModalMessege = function(messageText) {
			selectElement(".modalHello .message-body").innerHTML = messageText;
		};

		this.resetUserMessage = function(messageNode) {
			return selectElement(this.messageNode).value = "";
		}
	}

	var modalUserMessege = new ModalInfo(".modalHello", ".userMessage textarea.textarea")
	console.log(modalUserMessege);

	selectElement(".userMessageOk").addEventListener("click", function() {
		var message = modalUserMessege.getUserMessage();

		if (message !== " ") {
			modalUserMessege.setModalMessege(message);
			modalUserMessege.showModal();
		}
	});

	selectElement(".userMessageCancel").addEventListener("click", function() {
		modalUserMessege.resetUserMessage();
	});


	// user name hello
	var setModalMessege = function(text) {
    	selectElement(".modalHello .message-body").innerHTML = text;
  	};

  	var showModal = function(item) {
		selectElement(item).style.display = "flex";
	};

	var hideModal = function(item) {
		selectElement(item).style.display = "none";
	};

	var getUserName = function(item) {
		return selectElement(item).value;
	};

	var resetUserName = function(item) {
		return selectElement(item).value = "";
	};

	var regName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$");

	var inputValidUI = function(item, classValid, classInvalid) {
		selectElement(item).classList.add(classValid);
		selectElement(item).classList.remove(classInvalid);
	};

	var inputInvalidUI = function(item, classValid, classInvalid) {
		selectElement(item).classList.add(classInvalid);
		selectElement(item).classList.remove(classValid);
	};

	selectElement(".userNameOk").addEventListener("click", function() {
		var userFirstName = getUserName(".userFirstName input");
		var userLastName = getUserName(".userLastName input");

		if(regName.test(userFirstName) && regName.test(userLastName)) {
			setModalMessege("Ваше имя: " + userFirstName + " " + userLastName);
			showModal(".modalHello");
		}
		if (regName.test(userFirstName)) {
			inputValidUI(".userFirstName input", "is-success", "is-danger")
		}
		if (!regName.test(userFirstName)) {
			inputInvalidUI(".userFirstName input", "is-success", "is-danger");
		}
		if (regName.test(userLastName)) {
			inputValidUI(".userLastName input", "is-success", "is-danger")
		}
		if (!regName.test(userLastName)) {
			inputInvalidUI(".userLastName input", "is-success", "is-danger");
		}
	});

	selectElement(".btnFirstNameReset").addEventListener("click", function() {
		resetUserName(".userFirstName input");
	});

	selectElement(".btnLastNameReset").addEventListener("click", function() {
		resetUserName(".userLastName input");
	});


	// filter
	var inputNumberUI = function() {
		var newLabel = document.createElement('label');
		newLabel.className = 'label userNumber';
		newLabel.innerHTML = '';

		var newControl = document.createElement('div');
		newControl.className = 'control has-icons-right';

		var newInput = document.createElement('input');
		newInput.className = 'input';
		newInput.placeholder = 'Ваше число';
		newInput.type = 'text';

		var newDeleteBtn = document.createElement('span');
		newDeleteBtn.className = 'icon is-big is-right deleteUserNumber';

		var newDeleteBtnIcon = document.createElement('i');
		newDeleteBtnIcon.className = 'fa fa-times-circle';

		newLabel.appendChild(newControl);
		newControl.appendChild(newInput);
		newLabel.appendChild(newDeleteBtn);
		newDeleteBtn.appendChild(newDeleteBtnIcon);
		userNumbers.appendChild(newLabel);

		newDeleteBtnIcon.onclick = function() {
			userNumbers.removeChild(newLabel)
		}
	};

	selectElement('.addUserNumber').addEventListener('click', function() {
		inputNumberUI();
	});

	selectElement('.checkNumber').addEventListener('click', function() {
		var allUserNumbers = document.querySelectorAll('#userNumbers input.input');
		var arrayUserNumbers = [];

		for(var x = 0; x < allUserNumbers.length; x++) {
			var userNumber = allUserNumbers[x].value;
			var regNum = /[0-9]/g;

			if(regNum.test(userNumber)) {
				arrayUserNumbers.push(userNumber);
			}
		}

		var arrayResultUserNumbers = arrayUserNumbers.filter(function(item){
			if (item % 5 == 0 || item % 10 == 0) return item;
		});

		setModalMessege('[ '+ arrayResultUserNumbers + ' ]');
		showModal(".modalHello");

		console.log(arrayUserNumbers);
		console.log(arrayResultUserNumbers);
	});


})();