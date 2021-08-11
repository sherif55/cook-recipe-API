var signupName= document.getElementById('signupName');
var signupEmail= document.getElementById('signupEmail');
var signupPassword= document.getElementById('signupPassword');
var signinEmail= document.getElementById('signinEmail');
var signinPassword= document.getElementById('signinPassword');

var signUpArray;

var username = localStorage.getItem('recordUsername')
if(username) // not equal null
{
    document.getElementById('username').innerHTML="welcome" + username
}

// lw el user da5al 3ndy 
if( localStorage.getItem('users')==null)
{
    signUpArray=[];
}
else
{
    signUpArray= JSON.parse(localStorage.getItem('users'));
}

// lw el user 3ndo account
 function hasAccount() { 
     if(localStorage.getItem('users')==null)
     {
         return false;
     }
  }
function signUp()
{
    if (isEmpty()== false)
    {
        document.getElementById('exist').innerHTML='<span class="text-danger m-3"> All inputs are required </span>'
        return false
    }
    var signUp=
    {
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }
    if ( signUpArray.length == 0)
    {
        signUpArray.push(signUp)
        localStorage.setItem('users' , JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML=`<span class="text-success m-3">sucsess</span>`
        return true
    }
    if (isEmailExist() == false)
    {
        document.getElementById('exist').innerHTML=`<span class="text-danger m-3">Email already exist</span>`
    }
    else
    {
        
        signUpArray.push(signUp)
        localStorage.setItem('users' , JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML=`<span class="text-success m-3">sucsess</span>`
    }
}


function isEmailExist() {
    for(var i=0 ; i<signUpArray.length; i++)
    {
        if(signUpArray[i].email.toLowerCase()== signupEmail.value.toLowerCase())
        {
            return false
        }
    }
}

function isEmpty() { 
    if(signupName.value=="" || signupEmail.value=="" || signupPassword.value==""  )
    {
        return false
    }
    else
    {
        return true
    }
 }

 function login()
 {
     if ( hasAccount() == false)
{
    document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">You dont have account please Sign up </span>`
    return false;
}
if ( isLoginEmpty()== false )
{
    document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">You dont have account please Sign up </span>`
    return false;
}
var password = signinPassword.value
var email = signinEmail.value
for( var i =0; i < signUpArray.length; i++)
{
    if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase()==password.toLowerCase()){
        localStorage.setItem('recordUsername', signUpArray[i].name);
        location.href="home.html";
    }  
    else
    
    {
        document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">incorrect email or password</span>`

    }
}

}

function isLoginEmpty() {  
    if(signinPassword.value == "" || signinEmail.value=="")
    {
        return false;
    }
    else{
        return true;
    }
}


function logout(){
    localStorage.removeItem('sessionUsername')
    location.href="index.html";
}