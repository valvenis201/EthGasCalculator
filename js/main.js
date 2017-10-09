let xhr = new XMLHttpRequest();

xhr.open('get', 'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', true);

xhr.send(null);

xhr.onload = function () {

    let str = JSON.parse(xhr.responseText);
    let ETHPV = str[0].price_usd;
    document.querySelector('#ETHPV').innerHTML = ETHPV;

    function Run() {
        let GasLimit = document.querySelector('#GasLimit').value,
            GasPrice = document.querySelector('#GasPrice').value,
            Gwei = GasPrice * 0.000000001,
            Fee = GasLimit * Gwei,
            NTDPV = 30,
            USD = Fee * ETHPV,
            NTD = USD * NTDPV;
        document.querySelector('#Gwei').innerHTML = Gwei.toFixed(9);
        document.querySelector('#Fee').innerHTML = Fee.toFixed(9);
        document.querySelector('#USD').innerHTML = USD.toFixed(2);
        document.querySelector('#NTD').innerHTML = NTD.toFixed(2);
    }
    let checkBtn = document.querySelector('#checkBtn');
    checkBtn.addEventListener('click', function () {
        Run();
    });

    let clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', function () {
        document.querySelector('#Gwei').innerHTML = '0.000000000';
        document.querySelector('#Fee').innerHTML = '0.000000000';
        document.querySelector('#USD').innerHTML = '0.00';
        document.querySelector('#NTD').innerHTML = '0.00';

    });
}