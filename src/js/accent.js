var naavy = document.querySelectorAll('[data-enable-accent]');
var length = naavy.length;

for(var i=0; i<length; i++) {
    naavy[i].addEventListener("click", function() {
        highlight(this);
    });
}

function highlight(element) {
    for(var i=0; i<length; i++) {
       naavy[i].classList.remove("is-accent");
    }

    element.classList.add("is-accent");
}
