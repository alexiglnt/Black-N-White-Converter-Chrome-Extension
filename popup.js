document.addEventListener('DOMContentLoaded', function () {
    var convertButton = document.getElementById('convertButton');
    var resetButton = document.getElementById('resetButton');

    convertButton.addEventListener('click', function () {
        console.log('Convert button clicked');
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'convert' });
        });
    });

    resetButton.addEventListener('click', function () {
        console.log('Reset button clicked');
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'reset' });
        });
    });
});
