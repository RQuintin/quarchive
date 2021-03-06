var saveOptions = function(e){
    let APIURLInput = document.querySelector("#api-url") as HTMLInputElement;
    let usernameInput = document.querySelector("#username") as HTMLInputElement;
    let APIKeyInput = document.querySelector("#api-key") as HTMLInputElement;
    browser.storage.sync.set({
        APIURL: APIURLInput.value,
        username: usernameInput.value,
        APIKey: APIKeyInput.value,
    });
    e.preventDefault()
}

var restoreOptions = function(){
    var gettingUsername = browser.storage.sync.get("username");
    gettingUsername.then(function (result) {
        let input = document.querySelector("#username") as HTMLInputElement;
        if (result.username !== undefined) {
            input.value = result.username;
        }
    })

    var gettingKey = browser.storage.sync.get("APIKey");
    gettingKey.then(function (result) {
        let input = document.querySelector("#api-key") as HTMLInputElement;
        if (result.APIKey !== undefined) {
            input.value = result.APIKey;
        }
    })

    var gettingURL = browser.storage.sync.get("APIURL");
    gettingURL.then(function (result) {
        let input = document.querySelector("#api-url") as HTMLInputElement;
        if (result.APIURL === undefined) {
            input.value = "https://quarchive.com"
        } else {
            input.value = result.APIURL;
        }
    })
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
