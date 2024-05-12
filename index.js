window.onload = function () {
    var form = document.getElementById('settingsForm');

    form.onsubmit = function (e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;

        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        alert('Settings saved!');

        // Redirect to the next page
        window.location.href = "new.html";
    };
};
