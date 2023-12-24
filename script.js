// Calculator B
function calculateResultB() {
    var gValue = parseFloat(document.getElementById('g').value);
    var dValue = parseFloat(document.getElementById('d').value);
    var eValue = parseFloat(document.getElementById('e').value);
    dValue /= 100;
    eValue /= 100;
    var result = gValue * dValue * eValue;
    document.getElementById('resultB').textContent = result;
}

// Calculator A
function calculateResultA() {
    var bValue = parseFloat(document.getElementById('b').value);
    var cValue = parseFloat(document.getElementById('c').value);
    var result = bValue * cValue;
    document.getElementById('resultA').textContent = result;
}

// Calculator C
function calculateResultC() {
    var ndc1Value = parseFloat(document.getElementById('ndc1').value);
    var mValue = parseFloat(document.getElementById('m').value);
    var bshoValue = parseFloat(document.getElementById('bsho').value);
    var hoValue = parseFloat(document.getElementById('ho').value);
    var result = ndc1Value + mValue + bshoValue - hoValue;
    document.getElementById('resultC').textContent = result;
}
