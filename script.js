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
            <div>
                <button class="view-check-button" style="padding: 6px 18px; border-radius: 4px;"
                 type="button" onclick="alert('Hello world!')">Would you like to see this post?</button>
            </div>
            <div class="extra-info">
                <h5>To update your sensitivty settings and preferences, go to the 
                    <span style="color: #3b5998">content warning</span> extension in your browser</h5>
            </div>
        </div>
    `;
    let keywords = ["PEACHES"];
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