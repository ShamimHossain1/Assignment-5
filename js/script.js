////////  Get input value function ///////////////

function InputValue(InputId) {
    const getInputValue = document.getElementById(InputId);
    const InputValueString = getInputValue.value;
    const InputValue = parseFloat(InputValueString);
    return InputValue;
}



/////////// Calculation Area function /////////////////////

let itemsAppend = 0;
function appendCalculation(Name, Area) {

    if (itemsAppend === 6) {
        alert('Limited Calculation list added');
        return;

    }
    const placeToAppend = document.getElementById('calculation-list');
    const li = document.createElement('li');
    const nameSpan = document.createElement('span')
    const valueSpan = document.createElement('span')
    const areaSpan = document.createElement('span')
    const powerSpan = document.createElement('span')
    const convertBtn = document.createElement('button')
    const insideList = document.createElement('div')

    convertBtn.classList.add('convert-btn');
    insideList.style.display = 'flex';
    insideList.style.justifyContent = 'space-between';
    insideList.style.alignItems = 'center';

    nameSpan.innerText = Name;
    powerSpan.innerHTML = `<span>cm</span><sup>2</sup>`;
    areaSpan.innerText = Area;
    convertBtn.innerHTML = `<span>Convert to m</span><sup>2</sup>`;

    //   append 

    valueSpan.appendChild(areaSpan);
    valueSpan.appendChild(powerSpan);

    insideList.appendChild(nameSpan);
    insideList.appendChild(valueSpan);
    insideList.appendChild(convertBtn);

    li.appendChild(insideList);
    placeToAppend.appendChild(li);

    itemsAppend++


}



/////////////////// Triangle calculation ////////////////////////////

document.getElementById('triangle-btn').addEventListener('click', function () {

    const b = InputValue('triangle-b');
    const h = InputValue('triangle-h');
    if (isNaN(b) || isNaN(h) || b < 0 || h < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = 0.5 * b * h;
    const Name = 'Triangle'
    appendCalculation(Name, Area);
});

/////////////  Rectangle calculation function //////////////////


document.getElementById('rectangle-btn').addEventListener('click', function () {

    const w = InputValue('rectangle-w');
    const l = InputValue('rectangle-l');
    if (isNaN(w) || isNaN(l) || w < 0 || l < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = (w * l).toFixed(2);
    const Name = 'Rectangle'
    appendCalculation(Name, Area);


});

/////////////  Parallelogram calculation function //////////////////

document.getElementById('parallelogram-btn').addEventListener('click', function () {

    const b = InputValue('parallelogram-b');
    const h = InputValue('parallelogram-h');
    if (isNaN(b) || isNaN(h) || b < 0 || h < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = (b * h).toFixed(2);
    const Name = 'Parallelogram'
    appendCalculation(Name, Area);
});

/////////////  Rhombus calculation function //////////////////

document.getElementById('rhombus-btn').addEventListener('click', function () {

    const d1 = InputValue('rhombus-d1');
    const d2 = InputValue('rhombus-d2');
    if (isNaN(d1) || isNaN(d2) || d1 < 0 || d2 < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = (0.5 * d1 * d2).toFixed(2);
    const Name = 'Rhombus'
    appendCalculation(Name, Area);
});

document.getElementById('pentagon-btn').addEventListener('click', function () {

    const p = InputValue('pentagon-p');
    const b = InputValue('pentagon-b');
    if (isNaN(b) || isNaN(p) || p < 0 || b < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = (0.5 * p * b).toFixed(2);
    console.log(Area);
    const Name = 'Pentagon'
    appendCalculation(Name, Area);
});

/////////////  Ellipse calculation function //////////////////

document.getElementById('ellipse-btn').addEventListener('click', function () {

    const a = InputValue('ellipse-a');
    const b = InputValue('ellipse-b');
    if (isNaN(b) || isNaN(a) || b < 0 || a < 0) {
        alert('Input Valid Number');
        return;
    }
    const Area = (3.14 * a * b).toFixed(2);
    const Name = 'Ellipse'
    appendCalculation(Name, Area);
});