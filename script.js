var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let x = document.querySelectorAll('[data-testid=fbfeed_story]');
    let replace = document.createElement("p");
    replace.innerHTML = `
    <div class="replacement-div" style="text-align: center; width: 500px; margin: auto">
            <div class="text-warning">
                <h3>This post was marked as sensitive through the 
                    <span style="color: #3b5998">content warning</span> extension.</h3>
            </div>
            <div class="extra-info">
                <h5>To update your sensitivity settings and preferences, go to the 
                    <span style="color: #3b5998">content warning</span> extension in your browser.</h5>
            </div>
        </div>
    `;

    chrome.storage.sync.get("warnings", function(a){
      let keywords = [];
      if(a.warnings === undefined){
        keywords = [];
        console.log(keywords);
      } else{
        keywords = a.warnings;
        console.log(keywords);
      }
      for(let i = 0; i < x.length; i++) {
        for(let j = 0; j < keywords.length; j++) {
          if(x[i].textContent.includes(keywords[j])) {
            x[i].parentElement.replaceChild(replace, x[i]);
          }
        }
      }
    });
  });
});

// Options for the observer (which mutations to observe)
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
