function desactivateTool() {
    var tool = document.querySelectorAll('.tool'),
        toolLength = tool.length;

    for (var i = 0; i < toolLength; i++) {
        tool[i].style.display = 'none';
    }
}

function getTool(elements) {
    while (elements = elements.nextSibling) {
        if (elements.className === 'tool') {
            return elements;
        }
    }
    return false;
}

var check = {};

check['lName'] = function(id) {
    var name = document.getElementById(id),
        toolStyle = getTool(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        toolStyle.display = 'none';
        return true;

    } else {
        name.className = 'incorrect';
        toolStyle.display = 'inline-block';
        return false;
    }
};

check['fName'] = check['lName'];

check['email'] = function() {
    var email = document.getElementById('email'),
        toolStyle = getTooltip(email).style,
        reg = /^[\d\w\.]+@[\d\w\.]+\.[\w]{2,5}$/;

    if (reg.test(email.value)) {
        email.className = 'correct';
        toolStyle.display = 'none';
        return true;

    } else {
        email.className = 'incorrect';
        toolStyle.display = 'inline-block';
        return false;
    }
};

(function() { 

    var contactForm = document.getElementById('contactForm'),
        inputs = document.querySelectorAll('input[type=text], input[type=email]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }

    contactForm.addEventListener('submit', function(e) {
        var result = true;
        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            alert('Le formulaire est bien rempli.');
        }
        e.preventDefault();
    });

})();

desactivateTool();