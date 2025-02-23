// Yourfeature extension, https://github.com/datenstrom/yellow-example-feature

var initYourfeatureFromDOM = function() {
    
    // Animate element
    var animateElement = function() {
        var message = elements[elementIndex].getAttribute("data-message");
        var speed = elements[elementIndex].getAttribute("data-speed");
        if (elementPosition<=message.length) {
            elements[elementIndex].innerHTML = message.substring(0, elementPosition)+"&#x2588;";
            elementPosition++;
            setTimeout(animateElement, speed);
        } else if (elementPosition<=message.length+6) {
            var cursor = (elementPosition-message.length)%2 ? "&#x2588;" : "&nbsp;";
            elements[elementIndex].innerHTML = message.substring(0, elementPosition)+cursor;
            elementPosition++;
            setTimeout(animateElement, speed*3);
        } else {
            elementPosition = 0;
            elementIndex++;
            if (elementIndex>=elements.length) elementIndex = 0;
            if (elementIndex) setTimeout(animateElement, speed);
        }
    };
    
    // Handle click on element
    var onClickElement = function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (elementIndex==0 && elementPosition==0) {
            for (var i=0, l=elements.length; i<l; i++) {
                elements[i].innerHTML = "&nbsp;";
            }
            animateElement();
        }
    };
    
    // Initialise animation loop
    var elementIndex = 0;
    var elementPosition = 0;
    var elements = document.querySelectorAll(".yourfeature");
    for (var i=0, l=elements.length; i<l; i++) {
        elements[i].onclick = onClickElement;
    }
    if (elements.length) animateElement();
};

window.addEventListener("DOMContentLoaded", initYourfeatureFromDOM, false);
