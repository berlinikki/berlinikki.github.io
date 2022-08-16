function openTab(evt, tabLang) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
  
    lang_parts = document.getElementsByClassName(tabLang);
    for (i = 0; i < lang_parts.length; i++) {
        lang_parts[i].style.display = "block";
    }

    evt.currentTarget.classList.add("active");
}


function openDefaultTab() {
    document.getElementById("default").click();
}
