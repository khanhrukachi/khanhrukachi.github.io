// coding implementation
function validate(){
    let validateName = document.forms["waterform"]["name"].value;
    let validateEmail = document.forms["waterform"]["email"].value;
    let validateSubject = document.forms["waterform"]["subject"].value;
    let validateMessage = document.forms["waterform"]["message"].value;
    let l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(validateName == "")
    {
        alert("You must be fill name");
        return false;
    }
    if(validateEmail ==""|| l.test(validateEmail)==false)
    {
        alert("Invalid email format, please re-enter!");
        return false;
    }
    if(validateSubject == "")
    {
        alert("You must be fill subject");
        return false;
    }
    if(validateMessage == "" || validateMessage.length <= 20)
    {
        alert("You must enter a message longer than 20 characters");
        return false;
    }

    if(validateName != "" && validateEmail !="" && validateSubject !="" && validateMessage !="")
    {
        alert("Successful submission! Thank you for using our service!");
    }
}
// end coding implementation