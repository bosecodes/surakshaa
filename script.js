//generate random password

function generate(){

	//set password length/complexity

	let complexity = document.getElementById("slider").value;

	//possible password values
	let values = "QWERTYUIOPASDFGHJKLZXCVBNM123456789qwertyuiopasdfghjklzxcvbnm[];':,.+-=%&*$#@!()|"

	let password = "";

	//create for loop to choose password characters

	for(var i = 1; i < complexity; i++){
		password += values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
	}

	//add the password to the textbox / display area

	document.getElementById("display").value = password;

	//add password to the previously generated passwords section

	document.getElementById("lastpass").innerHTML += password + "<br>";
}

//default length is 25
let display = document.getElementById("length").innerHTML = "Length : 25";

//function to set length based on slider position

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}
