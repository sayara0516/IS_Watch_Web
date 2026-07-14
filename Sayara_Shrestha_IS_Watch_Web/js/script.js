function RedirectToProductPage(){
    window.location.href = 'product.html';
}
/*contact form*/
function validateForm() {
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Check if any required field is empty
    if (name == "" || email == "" || message == "") {
        alert("Please fill up every field.");
    }
    // Check if the phone number is incomplete or empty
    else if (phone.length < 10 || phone == "") {
        alert("Phone Number is incomplete.");
    }
    // If all checks pass, show a thank you message
    else {
        alert("Thank you for your feedback.");
    }
}

/* JS for review submit successfull*/
function submitreview() {
    const review = document.getElementById('review').value.trim();
    if (review.trim() === "") {
        alert("Please fill out the review box before submitting.");
    }
    else {
        showsubmit();
    }
}
function showsubmit() {
    const reviewbutton = document.querySelector('.popupsubmit');
    const popup = document.getElementById('popupsubmit');

    popup.style.display = 'block';
}
function closePopupsubmit() {
    const popup = document.getElementById('popupsubmit');
    popup.style.display = 'none';
}