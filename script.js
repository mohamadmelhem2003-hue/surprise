function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "princess birthday";

    if (password === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("errorMsg").innerText = "Wrong password 💔";
    }
}

