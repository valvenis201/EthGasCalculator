let xhr = new XMLHttpRequest();

xhr.open('get', 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10', true);

xhr.send(null);

xhr.onload = function () {

    let str = JSON.parse(xhr.responseText);
    let ETHPV = str[1].price_usd;
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
    let CheckBtn = document.querySelector('#CheckBtn');
    CheckBtn.addEventListener('click', function () {
        Run();
    });
}