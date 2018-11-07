

function signUp(){

	 var fullName = document.getElementById("textData").value;
	 var education = document.getElementById("option1").value;
	 var city = document.getElementById("option2").value;
	 var email = document.getElementById("emailData").value;
	 var password = document.getElementById("passwordData").value;



console.log(fullName)
console.log(education)
console.log(city)
console.log(email)
console.log(password)

	if (fullName == "" || fullName == null ||fullName == " ") {
		alert("Fill Full Name")
	}

	if (education == "" || education == null ||education == "0" ) {
		alert("Select Education")
	}
	if (city == "" || city == null ||city == "0") {
		alert("Select City")
	}
	if (email == "" || email == null ||email == " " ) {
		alert("InCorrect EmaiL Address")

	}
	if (password == "" || password == null ||password == " ") {
		alert("InCorrect Password")
	}
	else{
	}

	if(fullName != "" && education != "0"  &&  city != "0"  &&  email != ""  && password != "" )

		var data = {
			"fullName" : fullName,
			"education": education,
			"city" : city,
			"email" : email,
			"password" : password
		}
		localStorage.clear()

		console.log(data)
		localStorage.setItem(email,JSON.stringify(data))


		// document.write("<div class="loader"></div>")
	 if (data != undefined && data != "") {

	 window.location.assign("loader.html")

	 }

	  window.history.forward();
        function noBack()
        {
            window.history.forward();
        }

	}