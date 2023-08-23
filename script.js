document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can implement actual form submission or validation logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
});
