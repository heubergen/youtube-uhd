function isSearchPage(url) {
    if (url.indexOf("results?search_query=") != -1 && url.indexOf('sp=EgJwAQ%253D%253D') == -1) {
        return true;
    }
    return false;
}

function handleUpdated(tabId, changeInfo, tabInfo) {
    if (changeInfo.url && isSearchPage(changeInfo.url)) {
        var updating = browser.tabs.update({
            url: changeInfo.url + "&sp=EgJwAQ%253D%253D"
        });
    }
}

browser.tabs.onUpdated.addListener(handleUpdated);