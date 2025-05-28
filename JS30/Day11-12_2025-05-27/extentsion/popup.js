document.getElementById('btn').addEventListener('click', () => {
    const title = document.getElementById('changeTitle').value;
    const index = parseInt(document.getElementById('index').value);
    
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0].url.includes('dantri.com.vn')) {
            // Send message to content script
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'changeTitle',
                title: title,
                index: index
            }, (response) => {
                if (response && response.success) {
                    console.log('Title changed successfully');
                } else {
                    console.error('Failed to change title');
                }
            });
        } else {
            alert('This extension only works on dantri.com.vn');
        }
    });
});