
function signIn(){

	var mailData = document.getElementById('email').value;
	var passwordData = document.getElementById('password').value;

	console.log("SignIn email :"+mailData)
	console.log("SignIn password :"+passwordData)

	var x = localStorage.getItem(mailData);
 	var obj = JSON.parse(x);
	console.log("SignUp Email :"+obj.email)
	console.log("SignUp password :"+obj.password)

	var email = obj.email;
	var password = obj.password;

	if(mailData == email && passwordData == password){
		document.write("Home Page")
	}

	// document.getElementById("LogReg") = x;
	// if()



}