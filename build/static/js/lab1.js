(function() {

    var selectElement = function(item) {
        return document.querySelector(item);
    };


    // lab 0001
    function alertMessege() {
        return alert("Hello, World!");
    }

    selectElement(".alertHello").onclick = function(){
        alertMessege();
    };


    // modal hello
    function ModalMessage(text, item) {
        this.text = text;
        this.item = item;

        this.message = function() {
            alert("Hello, " + text + " !");
        };

        this.setModalMessage = function() {
            selectElement(".modalHello .message-body").innerHTML = this.text;
        };

        this.showModal = function(item) {
            selectElement(this.item).style.display = "flex";
        };

        this.hideModal = function(item) {
            selectElement(this.item).style.display = "none";
        }
    }

    var modalHelloWorld = new ModalMessage("Hello, World!", ".modalHello");
    console.log(modalHelloWorld);

    selectElement(".modalHelloShow").addEventListener("click", function() {
        modalHelloWorld.setModalMessage();
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

        this.setModalMessage = function(messageText) {
            selectElement(".modalHello .message-body").innerHTML = messageText;
        };

        this.resetUserMessage = function(messageNode) {
            return selectElement(this.messageNode).value = "";
        }
    }

    var modalUserMessage = new ModalInfo(".modalHello", ".userMessage textarea.textarea")
    console.log(modalUserMessage);

    selectElement(".userMessageOk").addEventListener("click", function() {
        var message = modalUserMessage.getUserMessage();

        if (message !== " ") {
            modalUserMessage.setModalMessage(message);
            modalUserMessage.showModal();
        }
    });

    selectElement(".userMessageCancel").addEventListener("click", function() {
        modalUserMessage.resetUserMessage();
    });


    // user name hello
    var setModalMessage = function(text) {
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
            setModalMessage("Ваше имя: " + userFirstName + " " + userLastName);
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

        setModalMessage('[ '+ arrayResultUserNumbers + ' ]');
        showModal(".modalHello");

        console.log(arrayUserNumbers);
        console.log(arrayResultUserNumbers);
    });

})();