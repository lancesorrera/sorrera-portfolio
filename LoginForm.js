document.getElementById("form").addEventListener("submit", function (event) 
{
    event.preventDefault()

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "lancelot" && password === "lancelot0420") 
        {
        window.location.href = "portfolio.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
