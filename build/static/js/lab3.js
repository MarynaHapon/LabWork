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


    var patientStore = new Store();


    // test
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
        inputDiagnosis = document.getElementById("diagnosis");


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
            }
        }

        catch(e){
            console.log(e);
        }

        console.log(patientStore.getStore());
    });

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
        }
    });

    document.getElementById("diagnosisCancel").addEventListener("click", function () {
        inputDiagnosisMedicalCardID.value = "";
        inputDiagnosis.value = "";
    });

    //console.log(PatientStore.getStore());
})();