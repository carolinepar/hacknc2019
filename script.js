var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let x = document.getElementsByClassName("userContentWrapper");
    let i;
    for (i = 0; i < x.length; i++) {
      let replace = document.createElement("p");
      replace.innerHTML = "<h1>Hello World</h1>";
      x[i].parentElement.replaceChild(replace, x[i]);
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