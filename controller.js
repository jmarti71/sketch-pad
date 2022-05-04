const container = document.querySelector(".sketch-container");
const btn16 = document.querySelector(".x16");
const btn32 = document.querySelector(".x32");
const btn64 = document.querySelector(".x64");
const resetBtn = document.querySelector(".clear-sketch");
const colorBtns = document.querySelectorAll('.color-btn');

let currentColor = 'black';
let selectedSizeBtn = null;
let selectedColorBtn = document.querySelector('#black');
selectedColorBtn.className = "color-btn selected";

function applyColor (hoveredDiv, currentColor) {
      hoveredDiv.style.background = currentColor;
}

function sizeTo16 () {
    disableSizeButtons(btn16);
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const item = document.createElement('div');
            item.className = "item grid16";
            container.appendChild(item);
        }
    }
    const itemDiv = document.querySelectorAll('.item');
    itemDiv.forEach(item => { item.addEventListener('mouseover', () => 
        { applyColor(item, currentColor) })
    });
}

function sizeTo32 () {
    disableSizeButtons(btn32);
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            const item = document.createElement('div');
            item.className = "item grid32";
            container.appendChild(item);
        }
    }   
    const itemDiv = document.querySelectorAll('.item');
    itemDiv.forEach(item => { item.addEventListener('mouseover', () => 
        { applyColor(item, currentColor) })
    });
}

function sizeTo64 () {
    disableSizeButtons(btn64);
    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
            const item = document.createElement('div');
            item.className = "item grid64";
            container.appendChild(item);
        }
    }
    const itemDiv = document.querySelectorAll('.item');
    itemDiv.forEach(item => { item.addEventListener('mouseover', () => 
        { applyColor(item, currentColor) })
    });
}

function disableSizeButtons (selectedBtn) {
    btn16.disabled = true;
    btn32.disabled = true;    
    btn64.disabled = true;
    selectedSizeBtn = selectedBtn;
    selectedSizeBtn.id = "selected";
}

function enableSizeButtons () {
    btn16.disabled = false;
    btn32.disabled = false;
    btn64.disabled = false;
}

function changeSktetchColor (button , color) {
    // Resets already selected button, then applies attributes to newly selected button
    if(selectedColorBtn !== null) {
        selectedColorBtn.className = "color-btn";
        selectedColorBtn = null;
    }
    selectedColorBtn = button;
    selectedColorBtn.className = "color-btn selected";
    currentColor = color;
}

function resetCanvas(parent) {
    // Reset attributes
    if(selectedSizeBtn !== null) {
        selectedSizeBtn.removeAttribute('id');
        selectedSizeBtn = null;
    }
    enableSizeButtons();
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

colorBtns.forEach((button) => { button.addEventListener('click', () => {
    changeSktetchColor(button, button.id); });
});
btn16.addEventListener('click', () => { sizeTo16() });
btn32.addEventListener('click', () => { sizeTo32() });
btn64.addEventListener('click', () => { sizeTo64() });
resetBtn.addEventListener('click', () => { resetCanvas(container) });