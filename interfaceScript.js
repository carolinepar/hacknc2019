let ar = [];
chrome.storage.sync.get("warnings", function(a){ar = a.warnings});
if(ar == undefined){
    chrome.storage.sync.set({"warnings": []}, function(){console.log("added")});
}
document.getElementById("addButton").onclick = function() {addWarning()};

function addWarning(){
    let newWarning = document.getElementById("warnings").value;
    chrome.storage.sync.get("warnings", function(a){
        let warning = a.warnings;
        warning.push(newWarning);
        chrome.storage.sync.set({"warnings": warning}, function(){console.log("pls work", warning)})
    });
}

document.getElementById("warnings").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addButton").click();
    }
});
