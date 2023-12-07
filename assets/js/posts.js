function toggleTagged(id, btn) {
    list = document.getElementById(id);
    button = document.getElementById(btn);
    if (list.style.visibility == "visible") {
        list.style.visibility = "collapse";
        button.innerHTML = "Show More";
    }
    else {
        list.style.visibility = "visible";
        button.innerHTML = "Show Less";
    }
}