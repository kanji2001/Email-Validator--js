function vldemail() {
    const emailcheck = document.getElementById("Id").value;
    const emailRegex = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/

    if (emailRegex.test(emailcheck)) {
        document.getElementById("result").innerHTML = `${emailcheck} is valid email address`
    } else {
        document.getElementById("result").innerHTML =  `${emailcheck} is not valid email address`
    }
}