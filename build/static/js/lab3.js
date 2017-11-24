(function(){
    var numberRegExp = new RegExp("^[0-9]+$");
    var nameRegExp = new RegExp("^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$");
    var phoneRegExp = new RegExp("^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$");


    function Person() {
        var id = 0,
            surname = "",
            name = "",
            patronymic = "",
            address = "",
            phone = "";

        this.setId = function (personId) {
            if (personId != "" && numberRegExp.test(personId) ) {
                id = personId;
            }
            if (personId == "" || !numberRegExp.test(personId)) {
                throw new Error("incorrect id");
            }
        };

        this.getId = function() {
            return id;
        };

        this.setSurname = function (personSurname) {
            if(personSurname != "" && nameRegExp.test(personSurname) ) {
                surname = personSurname;
            }
            if (personSurname == "" || !nameRegExp.test(personSurname)) {
                throw new Error("incorrect surname");
            }
        };

        this.getSurname = function () {
            return surname;
        };

        this.setName = function (personName) {
            if(personName != "" && nameRegExp.test(personName) ) {
                name = personName;
            }
            if (personName == "" || !nameRegExp.test(personName)) {
                throw new Error("incorrect name");
            }
        };

        this.getName = function () {
            return name;
        };

        this.setPatronymic = function (personPatronymic) {
            if(personPatronymic != "" && nameRegExp.test(personPatronymic) ) {
                patronymic = personPatronymic;
            }
            if (personPatronymic == "" || !nameRegExp.test(personPatronymic)) {
                throw new Error("incorrect patronymic");
            }
        };

        this.getPatronymic = function () {
            return patronymic;
        };

        this.setAddress = function (personAddress) {
            if(personAddress != "") {
                address = personAddress;
            }
            if (personAddress == "") {
                throw new Error("incorrect address");
            }
        };

        this.getAddress = function () {
            return address;
        };

        this.setPhone = function (personPhone) {
            if(personPhone != "" && phoneRegExp.test(personPhone)) {
                phone = personPhone;
            }
            if (personPhone == "" || !phoneRegExp.test(personPhone)) {
                throw new Error("incorrect phone");
            }
        };

        this.getPhone = function () {
            return phone;
        };

        this.toStringInfo = function () {
            return id + " / " + surname + " " + name + " " + patronymic + " / " + address + " / " + phone;
        };
    }


    function Patient() {
        Person.call(this);

        var medicalCardID = "",
            diagnosis = "";

        this.setMedicalCardID = function (personMedicalCardID) {

            if(personMedicalCardID != "" && numberRegExp.test(personMedicalCardID)) {
                medicalCardID = personMedicalCardID;
            }
            if (personMedicalCardID == "" || !numberRegExp.test(personMedicalCardID)) {
                throw new Error("incorrect medical card ID");
            }

        };

        this.getMedicalCardID = function () {
            return medicalCardID;
        };

        this.setDiagnosis = function (personDiagnosis) {

            if(personDiagnosis != "") {
                diagnosis = personDiagnosis;
            }
            if (personDiagnosis == "") {
                throw new Error("incorrect diagnosis");
            }

        };

        this.getDiagnosis = function () {
            return diagnosis;
        };
    }


    function Store() {
        var store = [];

        this.getStore = function () {
            return store;
        };

        this.equalsID = function (item) {
            var currentStore = this.getStore();

            for(var i = 0; i < currentStore.length; i++) {

                if(currentStore[i].id == item) return true;

            }
        };

        this.setDiagnosisForCardID = function (item, res) {
            var currentStore = this.getStore();

            for(var i = 0; i < currentStore.length; i++) {

                if(currentStore[i].medicalCardID == item) {
                    return currentStore[i].diagnosis = res;
                }

            }
        };

        this.searchDiagnosis = function (item) {
            var currentStore = this.getStore();
            var subStore = [];

            for(var i = 0; i < currentStore.length; i++) {

                if(currentStore[i].diagnosis == item) {
                    subStore.push(currentStore[i]);
                }
            }

            return subStore;
        };

        this.pushToStore = function (item) {
            return store.push({
                "id": item.getId(item),
                "surname": item.getSurname(),
                "name": item.getName(),
                "patronymic": item.getPatronymic(),
                "address": item.getAddress(),
                "phone": item.getPhone(),
                "medicalCardID": item.getMedicalCardID(),
                "diagnosis": item.getDiagnosis()
            });
        }
    }


    var toStr = function (item) {
      return item.medicalCardID + " - " + item.surname + " " + item.name + " " + item.patronymic + " - " + item.diagnosis;
    };


    function Modal() {

        this.showModal = function () {
            document.querySelector(".modal").style.display = "flex";
        };

        this.hideModal = function () {
            document.querySelector(".modal").style.display = "none";
        };

        this.setModalTitle = function (title) {
            document.querySelector(".modal .modal-card-title").innerHTML = title;
        };

        this.setModalMessage = function (text) {
            document.querySelector(".modal .modal-card-body").innerHTML = text;
        };

        this.allInclusive = function (title, text) {
            this.showModal();
            this.setModalTitle(title);
            this.setModalMessage(text);
        }
    }


    var modalMessage = new Modal();
    var patientStore = new Store();


    // test patients list
    var Petrov = new Patient();
        Petrov.setId("00000001");
        Petrov.setSurname("Чейни");
        Petrov.setName("Джон");
        Petrov.setPatronymic("Федорович");
        Petrov.setAddress("Kyiv Vishneva 32");
        Petrov.setPhone("+380681165655");
        Petrov.setMedicalCardID("00000001");
        Petrov.setDiagnosis("Ипохондрик");
    patientStore.pushToStore(Petrov);

    var Sidorov = new Patient();
        Sidorov.setId("00000002");
        Sidorov.setSurname("Сидоров");
        Sidorov.setName("Петр");
        Sidorov.setPatronymic("Викторович");
        Sidorov.setAddress("Kyiv Vishneva 33");
        Sidorov.setPhone("+380681165656");
        Sidorov.setMedicalCardID("00000002");
        Sidorov.setDiagnosis("Ипохондрик");
    patientStore.pushToStore(Sidorov);

    var Markova = new Patient();
        Markova.setId("00000003");
        Markova.setSurname("Маркова");
        Markova.setName("Елизавета");
        Markova.setPatronymic("Давидовна");
        Markova.setAddress("Kyiv Vishneva 35");
        Markova.setPhone("+380681165657");
        Markova.setMedicalCardID("00000003");
    patientStore.pushToStore(Markova);

    var Poznakova = new Patient();
        Poznakova.setId("00000004");
        Poznakova.setSurname("Познякова");
        Poznakova.setName("Роза");
        Poznakova.setPatronymic("Марковна");
        Poznakova.setAddress("Kyiv Vishneva 88");
        Poznakova.setPhone("+380681165658");
        Poznakova.setMedicalCardID("00000004");
    patientStore.pushToStore(Poznakova);

    // input items
    var inputId = document.getElementById("ID"),
        inputSurname = document.getElementById("surname"),
        inputName = document.getElementById("name"),
        inputPatronymic = document.getElementById("patronymic"),
        inputAddress = document.getElementById("address"),
        inputPhone = document.getElementById("phone"),
        inputMedicalCardID = document.getElementById("medicalCardID"),
        inputDiagnosisMedicalCardID =  document.getElementById("diagnosisMedicalCardID"),
        inputDiagnosis = document.getElementById("diagnosis"),
        searchDiagnosis = document.getElementById("searchDiagnosis");

    // close modal message
    document.querySelector(".modal button.delete").addEventListener("click", function () {
        modalMessage.hideModal();
    });

    // check btn submit
    document.getElementById("registerPatient").addEventListener("click", function () {
        try {
            var currentPatient = new Patient();

            if ( !patientStore.equalsID( inputId.value )) {
                currentPatient.setId(inputId.value);
                currentPatient.setSurname(inputSurname.value);
                currentPatient.setName(inputName.value);
                currentPatient.setPatronymic(inputPatronymic.value);
                currentPatient.setAddress(inputAddress.value);
                currentPatient.setPhone(inputPhone.value);
                currentPatient.setMedicalCardID(inputMedicalCardID.value);
                patientStore.pushToStore(currentPatient);
                modalMessage.allInclusive("Регистрация нового пациента", "Успешно завершена.");
            }
        }

        catch(e){
            console.log(e);
        }

        console.log(patientStore.getStore());
    });

    // reset input fields
    document.getElementById("resetPatient").addEventListener("click", function () {
        inputId.value = "";
        inputSurname.value = "";
        inputName.value = "";
        inputPatronymic.value = "";
        inputAddress.value = "";
        inputPhone.value = "";
        inputMedicalCardID.value = "";
    });

    // diagnosis part
    document.getElementById("diagnosisSubmit").addEventListener("click", function () {
        var medicalCardID = inputDiagnosisMedicalCardID.value;
        var diagnosis = inputDiagnosis.value;

        if ( patientStore.equalsID( medicalCardID )) {
            console.log(patientStore.setDiagnosisForCardID( medicalCardID, diagnosis ));
            console.log(patientStore.getStore());
            modalMessage.allInclusive("Диагноз пациента", "Успешно сохранен.");
        }


    });

    document.getElementById("diagnosisCancel").addEventListener("click", function () {
        inputDiagnosisMedicalCardID.value = "";
        inputDiagnosis.value = "";
    });

    document.getElementById("resultDiagnosis").addEventListener("click", function () {
        var inputDiagnosis = searchDiagnosis.value;
        var array = patientStore.searchDiagnosis( inputDiagnosis );

        var sign = document.createElement('div');
        var query = document.createElement('span');
        var date = document.createElement('span');
        var time = new Date();

        sign.innerHTML = "Запрос: " + inputDiagnosis;
        sign.className = "diagnosisSign";
        date.innerHTML = time.toLocaleString('en-GB');

        sign.appendChild(query);
        sign.appendChild(date);
        diagnosisPatient.appendChild(sign);

        for(var i = 0; i < array.length; i++) {
            var data = document.createElement('p');

            data.innerHTML = toStr( array[i] );

            diagnosisPatient.appendChild( data );
            console.log( array[i] );
        }

        var hr = document.createElement('hr');
        hr.className = "navbar-divider";
        diagnosisPatient.appendChild( hr );

        console.log( inputDiagnosis );
        console.log( patientStore.searchDiagnosis( inputDiagnosis ));
    });

    document.getElementById("searchMedicalCart").addEventListener("click", function () {
        var startRange = document.querySelector("#startRange").value;
        var endRange = document.querySelector("#endRange").value;

        var array = patientStore.getStore();

        var sign = document.createElement('div');
        var query = document.createElement('span');
        var date = document.createElement('span');
        var time = new Date();

        sign.innerHTML = "Запрос: ";
        sign.className = "diagnosisSign";
        date.innerHTML = time.toLocaleString('en-GB');

        sign.appendChild(query);
        sign.appendChild(date);
        resultMedicalCart.appendChild(sign);

        for(var i = 0; i < array.length; i++) {
            console.log(array);

            if (startRange <= array[i].medicalCardID && array[i].medicalCardID <= endRange) {

                var data = document.createElement('p');
                data.innerHTML = toStr( array[i]) ;
                resultMedicalCart.appendChild( data );

            }
        }

        var hr = document.createElement('hr');
        hr.className = "navbar-divider";
        resultMedicalCart.appendChild( hr );
    });
    //console.log(PatientStore.getStore());
})();