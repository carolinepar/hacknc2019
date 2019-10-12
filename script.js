var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let x = document.getElementsByClassName("userContentWrapper");
    let replace = document.createElement("p");
    replace.innerHTML = "<h1>KEYWORD FOUND AND REPLACED</h1>";
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
