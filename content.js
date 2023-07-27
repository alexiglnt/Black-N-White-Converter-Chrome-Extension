chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'convert') {
        console.log('Received convert message');
        document.documentElement.style.filter = 'grayscale(100%)';
        sendResponse({ message: 'Website converted to black and white.' });
    } else if (request.action === 'reset') {
        console.log('Received reset message');
        document.documentElement.style.filter = 'none';
        sendResponse({ message: 'Website reset to original colors.' });
    }
});
