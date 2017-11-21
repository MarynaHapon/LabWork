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

        var medicalCardID = "1",
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

    var Petrov = new Patient();

    Petrov.setId("12324234");
    Petrov.setSurname("Surname");
    Petrov.setName("Name");
    Petrov.setPatronymic("Patronymic");
    Petrov.setAddress("Kyiv Vishneva 32");
    Petrov.setPhone("+380681165655");
    Petrov.setMedicalCardID("123123123123");
    
    console.log(Petrov.toStringInfo());
    console.log(Petrov.getId());
    console.log(Petrov.getSurname());
    console.log(Petrov.getName());
    console.log(Petrov.getPatronymic());
    console.log(Petrov.getAddress());
    console.log(Petrov.getPhone());
    console.log(Petrov.getMedicalCardID());
})();