function nextStep(step) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('step' + i).style.display = (i === step) ? 'block' : 'none';
    }
}

function prevStep(step) {
    nextStep(step);
}


const translations = {
    en: {
        step1Label: 'Choose your pizza:',
        step2Label: 'Choose your size:',
        step3Label: 'Enter your delivery address:'
    },
    es: {
        step1Label: 'Elige tu pizza:',
        step2Label: 'Elige tu tamaño:',
        step3Label: 'Ingresa tu dirección de entrega:'
    },
    ru: {
        step1Label: 'Выберите пиццу:',
        step2Label: 'Выберите размер:',
        step3Label: 'Введите ваш адрес доставки:'
    }
};

function changeLanguage() {
    const lang = document.getElementById("languageSwitcher").value;
    document.getElementById("step1Label").innerText = translations[lang].step1Label;
    document.getElementById("step2Label").innerText = translations[lang].step2Label;
    document.getElementById("step3Label").innerText = translations[lang].step3Label;
}