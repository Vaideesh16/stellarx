let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];//to get items from local storage
console.log(getUsersdata); //JSON data type to store data in backend or local storage

function Signup() {
    let username = document.getElementById("naam").value;
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;
    //mobile number condition check for different cases
    if(mobile.length == 0) {
        alert("Enter Mobile Number");       
    }

    //shows alerts for invalid inputs
    else if(mobile.length != 10) {
        alert("Mobile number should have minimum 10 digits");
    }

    else {
        let userData = {
            username:username,
            mobile:mobile,
            password:password,
        }
        //created an array to store details of users stringify the user array
        let users = [...getUsersdata, userData];
        //Send to local storage the details
        localStorage.setItem("usersdata", JSON.stringify(users));

        alert("Signup Successfull");
        //send user to sign in page after successfull signup
        window.location.href = "signin.html"
    }
}
