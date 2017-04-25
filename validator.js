var name, surname, male, female, adress, phone, country, about;

var name_field = document.getElementById("name");
var surname_field = document.getElementById("surname");
male = document.getElementById("male");
female = document.getElementById("female");
var adress_field = document.getElementById("adress");
var phone_field = document.getElementById("phone");
country = document.getElementById("country");
var about_field = document.getElementById("about");
document.getElementById("myform").onsubmit = function () {return validator()};

function validator(){
    name = name_field.value;
    surname = surname_field.value;
    adress = adress_field.value;
    phone = phone_field.value;
    about = about_field.value;
    name_field.style.outline = "initial";
    surname_field.style.outline = "initial";
    male.style.outline = "initial";
    female.style.outline = "initial";
    adress_field.style.outline = "initial";
    phone_field.style.outline = "initial";
    country.style.outline = "initial";
    about_field.style.outline = "initial";
    if (validname()){
        if (validsurname()){
            if (validsex()){
                if (validadress()){
                    if (validphone()){
                        if (validcountry()){
                            return validabout();
                        }
                    }
                }
            }
        }
    }
    return false;
}
function validname(){
    if (name.length < 2 || !name.match(/^[A-Za-z]+$/)){
        name_field.style.outline = "1px solid red";
        alert("Imię powinno zawierać tylko litery oraz minimum dwa znaki");
        return false;
    }
    else {
        return true;
    }
}
function validsurname(){
    if (surname.length < 2 || !surname.match(/^[A-Za-z]+$/)){
        surname_field.style.outline = "1px solid red";
        alert("Nazwisko powinno zawierać tylko litery oraz minimum dwa znaki");
        return false;
    }
    else {
        return true;
    }
}
function validsex(){
    if (male.checked || female.checked){
        return true;
    }
    else {
        male.style.outline = "1px solid red";
        female.style.outline = "1px solid red";
        alert("Zaznacz swoją płeć.");
        return false;
    }
}
function validadress(){
    if (adress.length >= 10 || adress.match(/^[0-9a-zA-Z]+$/)){
        return true;
    }
    else {
        adress_field.style.outline = "1px solid red";
        alert("Użyłeś niedozwolonego znaku lub twój adres ma mniej niż 10 znaków.");
        return false;
    }  
}
function validphone(){
    if (phone.match(/^[0-9]+$/)){
        return true;
    }
    else {
        phone_field.style.outline = "1px solid red";
        alert("Telefon ma składać się wyłącznie z cyfr.");
        return false;
    }
}
function validcountry(){
    if (country.value == "default"){
        country.style.outline = "1px solid red";
        alert("Wybierz województwo");
        return false;
    }
    else {
        return true;
    }
}
function validabout(){
    if (about.split(" ").length >= 5){
        return true;
    }
    else {
        about_field.style.outline = "1px solid red";
        alert("Twój opis powinien zawierać minimum piąć słów.");
        return false;
    }
}