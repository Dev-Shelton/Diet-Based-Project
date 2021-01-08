function newParagraph() {

    var elementH = document.createElement("h2");
    var main = document.getElementById("main");
    main.appendChild(elementH);
    var textH = document.createTextNode("Children and Teens");
    elementH.appendChild(textH);

    var element = document.createElement("p");
    main.appendChild(element);

    var text = document.createTextNode("Children have become heavier as well. In the past 30 years, the prevalence of childhood obesity has more than doubled among children ages 2-5, has tripled among youth ages 6-11, and has more than tripled among adolescents ages 12-19. However, recent data suggest that the rate of overweight in children did not increase significantly between 1999 and 2008, except in the heaviest boys");
    element.appendChild(text);
}    


   
function removeHeader() {
    
    var elementH = document.getElementsByTagName("h2") [0];
    var parent = elementH.parentNode;
    parent.removeChild(elementH);

    var elementP = document.getElementsByTagName("p") [0];
    parent.removeChild(elementP);
}

function validateTextbox () {
     
    var box = document.getElementById("name");
    var box2 = document.getElementById("address");

    if (box.Value.length < 5 || box2.Value.length < 5) {
        alert("Please enter atleast 5 characters");
        box.focus();
        box.style.border = "soild 2px red";
        return false;
    }
}