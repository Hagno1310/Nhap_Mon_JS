// This will run in the page context (dantri.com.vn)
function changeTitle(title, index) {
    const elements = document.getElementsByClassName('dt-text-black-mine');
    if (elements.length > index) {
        elements[index].innerText = title;
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeTitle') {
        changeTitle(request.title, request.index);
        sendResponse({success: true});
    }
});