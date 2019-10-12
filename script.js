var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let x = document.getElementsByClassName("userContentWrapper");
    let replace = document.createElement("p");
    replace.innerHTML = `
    <div class="replacement-div" style="text-align: center; width: 500px; margin: auto">
            <div class="text-warning">
                <h3>This post was marked as sensitive through the 
                    <span style="color: #3b5998">content warning</span> extension</h3>
            </div>
            <div class="extra-info">
                <h5>To update your sensitivty settings and preferences, go to the 
                    <span style="color: #3b5998">content warning</span> extension in your browser</h5>
            </div>
        </div>
    `;
    
    let keywords = ["peaches"];
    let ar = [];
    chrome.storage.sync.get("warnings", function(a){ar = a.warnings});
    if(ar != undefined){
      keywords = ar;
      //console.log(keywords);
    }

    for(let i = 0; i < x.length; i++) {
      for(let j = 0; j < keywords.length; j++) {
        if(x[i].textContent.toLowerCase().includes(keywords[j].toLowerCase())) {
          x[i].parentElement.replaceChild(replace, x[i]);
        }
      }
    }
  });
});

// Select the node that will be observed for mutations
const targetNode = document.querySelector('[aria-label="News Feed"]');

// Options for the observer (which mutations to observe)
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});