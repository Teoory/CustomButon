const borderCategoryCheckbox = document.getElementById('borderCategory');
const backgroundCategoryCheckbox = document.getElementById('backgroundCategory');
const textCategoryCheckbox = document.getElementById('textCategory');

const borderOptions = document.querySelector('.borderOptions');
const backgroundOptions = document.querySelector('.backgroundOptions');
const textOptions = document.querySelector('.textOptions');

borderCategoryCheckbox.addEventListener('change', function() {
    borderOptions.style.display = this.checked ? 'block' : 'none';
});

backgroundCategoryCheckbox.addEventListener('change', function() {
    backgroundOptions.style.display = this.checked ? 'block' : 'none';
});

textCategoryCheckbox.addEventListener('change', function() {
    textOptions.style.display = this.checked ? 'block' : 'none';
});


const backgroundGradientCheckbox = document.getElementById('backgroundGradient');
const backgroundGradientOptions = document.querySelector('.backgroundGradientOptions');
const gradientStartColorInput = document.getElementById('gradientStartColor');
const gradientEndColorInput = document.getElementById('gradientEndColor');
const gradientDirectionSelect = document.getElementById('gradientDirection');
const myButton = document.getElementById('myButton');

backgroundGradientCheckbox.addEventListener('change', function() {
    if (this.checked) {
        applyGradient();
    } else {
        myButton.style.background = ''; // Reset background to default
    }
    backgroundGradientOptions.style.display = this.checked ? 'block' : 'none';
});

gradientStartColorInput.addEventListener('input', applyGradient);
gradientEndColorInput.addEventListener('input', applyGradient);
gradientDirectionSelect.addEventListener('change', applyGradient);

function applyGradient() {
  if (backgroundGradientCheckbox.checked) {
    const startColor = gradientStartColorInput.value;
    const endColor = gradientEndColorInput.value;
    const direction = gradientDirectionSelect.value;

    myButton.style.background = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
  }
}

const cssOutput = document.getElementById('cssOutput');
function updateOutput() {
    cssOutput.value = ''; // Önce textarea'yı temizle

    // Her bir stil özelliğini textarea'ya ekleyerek göster
    cssOutput.value += `border-radius: ${borderRadiusInput.value}px;\n`;
    cssOutput.value += `border-width: ${borderWidthInput.value}px;\n`;
    cssOutput.value += `border-color: ${borderColorInput.value};\n`;
    cssOutput.value += `background-color: ${backgroundColorInput.value};\n`;

    // Eğer gradient checkbox işaretli ise, gradient değerlerini textarea'ya ekle
    if (backgroundGradientCheckbox.checked) {
        cssOutput.value += `background: linear-gradient(${gradientDirectionSelect.value}, ${gradientStartColorInput.value}, ${gradientEndColorInput.value});\n`;
    } else {
        cssOutput.value += `background-color: ${backgroundColorInput.value};\n`; // Eğer checkbox işaretli değilse, sadece arka plan rengini ekle
    }

    cssOutput.value += `color: ${textColorInput.value};\n`;
    cssOutput.value += `font-family: ${fontFamilySelect.value};\n`;
    cssOutput.value += `font-size: ${fontSizeInput.value}px;\n`;
}


const borderRadiusInput = document.getElementById('borderRadius');
const borderWidthInput = document.getElementById('borderWidth');
const borderColorInput = document.getElementById('borderColor');
const backgroundColorInput = document.getElementById('backgroundColor');
const textColorInput = document.getElementById('textColor');
const fontFamilySelect = document.getElementById('fontFamily');
const fontSizeInput = document.getElementById('fontSize');

borderRadiusInput.addEventListener('input', function() {
    myButton.style.borderRadius = `${this.value}px`;updateOutput();
});

borderWidthInput.addEventListener('input', function() {
    myButton.style.borderWidth = `${this.value}px`;updateOutput();
});

borderColorInput.addEventListener('input', function() {
    myButton.style.borderColor = this.value;updateOutput();
});

backgroundColorInput.addEventListener('input', function() {
    myButton.style.backgroundColor = this.value;updateOutput();
});

gradientStartColorInput.addEventListener('input', function() {
    updateGradient();updateOutput();
});

gradientEndColorInput.addEventListener('input', function() {
    updateGradient();updateOutput();
});

gradientDirectionSelect.addEventListener('change', function() {
    updateGradient();updateOutput();
});

textColorInput.addEventListener('input', function() {
    myButton.style.color = this.value;updateOutput();
});

fontFamilySelect.addEventListener('change', function() {
    myButton.style.fontFamily = this.value;updateOutput();
});

fontSizeInput.addEventListener('input', function() {
    myButton.style.fontSize = `${this.value}px`;updateOutput();
});
updateOutput()
function updateGradient() {
    const startColor = gradientStartColorInput.value;
    const endColor = gradientEndColorInput.value;
    const direction = gradientDirectionSelect.value;

    myButton.style.background = `linear-gradient(${direction}, ${startColor}, ${endColor})`;
}