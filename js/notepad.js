//**************************************** BOLD
document.getElementById('bold').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const isBold = getText.style.fontWeight === "700";
    if(isBold){
        const makeBold = document.getElementById('text').style.fontWeight = "400";
    }
    else{
        const makeBold = document.getElementById('text').style.fontWeight = "700";
    }
    getText.appendChild(makeBold);

})
//**************************************** ITALIC
document.getElementById('italic').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const isItalic = document.getElementById('text').style.fontStyle === "italic";
    if(isItalic){
        const makeItalic = document.getElementById('text').style.fontStyle = "normal";
    }
    else{
        const makeItalic = document.getElementById('text').style.fontStyle = "italic";
    }
    
    getText.appendChild(makeItalic);

})
//**************************************** UNDERLINE
document.getElementById('underline').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const isUnderline = document.getElementById('text').style.textDecoration === "underline";
    if(isUnderline){
        const makeUnderline = document.getElementById('text').style.textDecoration = "none";
    }
    else{
        const makeUnderline = document.getElementById('text').style.textDecoration = "underline";
    }
    
    getText.appendChild(makeUnderline);
})
//**************************************** ALIGN LEFT
document.getElementById('left').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const makeLeft = document.getElementById('text').style.textAlign  = "left";
    getText.appendChild(makeLeft);
})
//**************************************** ALIGN CENTER
document.getElementById('center').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const makeCenter = document.getElementById('text').style.textAlign  = "center";
    getText.appendChild(makeCenter);
})
//**************************************** ALIGN RIGHT
document.getElementById('right').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const makeRight = document.getElementById('text').style.textAlign  = "right";
    getText.appendChild(makeRight);
})
//**************************************** ALIGN JUSTIFY
document.getElementById('justify').addEventListener('click', function () {
    const getText = document.getElementById('text');
    const makeJustify = document.getElementById('text').style.textAlign  = "justify";
    getText.appendChild(makeJustify);
})
//**************************************** FONT SIZE
document.getElementById('size').addEventListener('change', function (event) {
    const listValue = event.target.value;
    const getText = document.getElementById('text');
    getText.style.fontSize = listValue;
});
//**************************************** TEXT TRANSFORM
document.getElementById('transform').addEventListener('change', function (event) {
    const listValue = event.target.value;
    const getText = document.getElementById('text');
    getText.style.textTransform  = listValue;
});
//**************************************** FONT COLOR
document.getElementById('color').addEventListener('input', function (event) {
    const selectedColor = event.target.value;
    const getText = document.getElementById('text');
    getText.style.color  = selectedColor;
});