chrome.storage.sync.get("warnings", function(data){
    if(data.warnings === undefined){
        chrome.storage.sync.set({"warnings": []}, function(){console.log("new storage made")});
    }
});

document.getElementById("addButton").onclick = function() {addWarning()};
document.getElementById("removeButton").onclick = function() {removeWarning()};

function addWarning(){
    let newWarning = document.getElementById("warnings").value;
    chrome.storage.sync.get("warnings", function(a){
        let warning = a.warnings;
        if(!warning.includes(newWarning)) {
            warning.push(newWarning);
            chrome.storage.sync.set({"warnings": warning}, function(){console.log("pls work", warning)})
        }
    });
    document.getElementById("warnings").value = "";
}

function removeWarning(){
    let removeWarning = document.getElementById("removals").value;
    chrome.storage.sync.get("warnings", function(a){
        let warning = a.warnings;
        let index = warning.indexOf(removeWarning);
        if(index > -1) {
            warning.splice(index, 1);
        }
        chrome.storage.sync.set({"warnings": warning}, function(){console.log("pls work", warning)})
    });
    document.getElementById("removals").value = "";
}

document.getElementById("warnings").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addButton").click();
    }
});