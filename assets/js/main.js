/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_options_selindex */


function select_font_type() {
    let x = document.getElementById("mySelect");
    let i = x.selectedIndex;
    document.getElementById("pFontType").innerHTML = 'font-type = ' + x.options[i].text;
    let ft = x.options[i].text;
    change_font_family(ft);
}


/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontfamily */

function change_font_family(ft) {
    write_input();
    document.getElementById("h2Output").style.fontFamily = ft;
}

function write_input() {
    let inputText = document.getElementById("myInput").value;
    console.log(inputText);
    if (inputText != '') {
        document.getElementById("h2Output").innerHTML = inputText;
    } else {
        document.getElementById("h2Output").innerHTML = "Please enter your text in the input field!";
    }

}

/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_range_get */

function change_font_size() {
    let x = document.getElementById("myRange").value;
    let font_size = x;
    console.log(font_size);
    document.getElementById("h2Output").style.fontSize = font_size + 'px';
    document.getElementById("h2Output").style.color = "#3f51b5";
}