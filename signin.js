let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
//getting data from user using json.parse method
function Signin() 
{
    //taking the mobile and password input from the user and storing them in variables mobile and password
    let mobile = document.getElementById("mobile").value;
    
    let password = document.getElementById("pass").value;

    //validation to check requirements for mobile number

    if(mobile.length !== 10) 
    {
        alert("Please enter a valid mobile number");
    }
    else if(mobile.length == 0) 
    {
        alert("Please enter the mobile number");
    }
    //iterate over the array of REGISTERED users
    for(let i = 0; i<getUsersdata.length; i++) 
    {
        if(mobile == getUsersdata[i].mobile) 
        {
            if(password == getUsersdata[i].password)
            {
                alert("Sign in Successfull");
                //redirecting to homepage after successfull sign in
                window.location.href = "index.html"
            }
            else 
            {
                alert("Please enter the correct password");
            }
        }
        else 
        {
            alert("The User not registered");
            //redirecting to signup page if not signed up earlier
            window.location.href = "signup.html"
        }
    }
}
