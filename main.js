    function calculateAge() {

    var birthdateInput = document.getElementById("birthdate");
    var birthdateString = birthdateInput.value;

        if (!birthdateString) {
          alert("Please kindly enter a valid birthdate ❤.");
            return;
        }

    var birthdate = new Date(birthdateString);

    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthdate.getFullYear() - (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate()));

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "You are " + age + " years old.";
}