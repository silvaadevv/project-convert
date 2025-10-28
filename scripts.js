const button = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');
const currencyFrom = document.getElementById('currency-from');

function convertValues() {
    const input = document.getElementById('input-currency');
    const currencyValueToConvert = document.getElementsByClassName('currency-value-to-convert')[0];
    const currencyValueConverted = document.getElementsByClassName('currency-value')[0];

    const rates = {
        real: 1,
        dolar: 5.41,
        euro: 6.29,
        libra: 7.28,
        bitcoin: 578862.33
    };

    const from = currencyFrom.value;
    const to = currencySelect.value;
    const inputValue = Number(input.value.replace(',', '.')) || 0;

    const valueInReal = inputValue * rates[from];
    const convertedValue = valueInReal / rates[to];

    if (from === 'bitcoin') {
        currencyValueToConvert.innerHTML = inputValue.toFixed(8) + ' BTC';
    } else {
        const currencyCodes = { real: 'BRL', dolar: 'USD', euro: 'EUR', libra: 'GBP' };
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: currencyCodes[from]
        }).format(inputValue);
    }

    if (to === 'bitcoin') {
        currencyValueConverted.innerHTML = convertedValue.toFixed(8) + ' BTC';
    } else {
        const currencyCodes = { real: 'BRL', dolar: 'USD', euro: 'EUR', libra: 'GBP' };
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: currencyCodes[to]
        }).format(convertedValue);
    }
}

function changeCurrencyFrom() {
    const currencyName1 = document.getElementById('currency-from-name');
    const currencyImg1 = document.getElementById('currency-from-img');

    if (currencyFrom.value == 'dolar') {
        currencyName1.innerHTML = 'Dólar Americano';
        currencyImg1.src = './assets/currency/dolar.png';
    }

    if (currencyFrom.value == 'real') {
        currencyName1.innerHTML = 'Real';
        currencyImg1.src = './assets/currency/real.png';
    }

    if (currencyFrom.value == 'euro') {
        currencyName1.innerHTML = 'Euro';
        currencyImg1.src = './assets/currency/euro.png';
    }

    if (currencyFrom.value == 'libra') {
        currencyName1.innerHTML = 'Libra Esterlina';
        currencyImg1.src = './assets/currency/libra.png';
    }

    if (currencyFrom.value == 'bitcoin') {
        currencyName1.innerHTML = 'Bitcoin';
        currencyImg1.src = './assets/currency/bitcoin.png';
    }

    convertValues();
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img');

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = './assets/currency/dolar.png';
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real';
        currencyImg.src = './assets/currency/real.png';
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/currency/euro.png';
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina';
        currencyImg.src = './assets/currency/libra.png';
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin';
        currencyImg.src = './assets/currency/bitcoin.png';
    }

    convertValues();
}

currencyFrom.addEventListener('change', changeCurrencyFrom);
currencySelect.addEventListener('change', changeCurrency);
button.addEventListener('click', convertValues);
