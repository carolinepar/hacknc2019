var x = document.getElementsByClassName("_2s1y");
//x.style.backgroundColor = "red";
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    //let x = document.getElementsByClassName("userContentWrapper");
    let x = document.querySelectorAll('[data-testid=fbfeed_story]');
    
    let i;

    for(i = 0; i < x.length; i++) {
      if(typeof(x[i]) !== 'undefined') {
        let oldNode = x[i];
        let child = x[i].childNodes[0];
        //child.style.display = 'none';
        let replace = document.createElement("div");
        replace.innerHTML = `<div class="replacement-div"><div class="text-warning"><h1>This post was marked as sensitive through the PLACEHOLDER_EXTENSION_NAME</h1></div><div class="view-check-form"><button class="contentButton" type="button" onclick="display()">Would you like to see this post?</button></div></div>`;
        x[i].parentElement.replaceChild(replace, x[i]);
       
      }
    }
    

    function display() {
      alert('yeet');
    }
    /*for (i = 0; i < x.length; i++) {
    


      //let oldNode = x[i];
      let replace = document.createElement("div");
      replace.innerHTML = `<div class="replacement-div"><div class="text-warning"><h1>This post was marked as sensitive through the PLACEHOLDER_EXTENSION_NAME</h1></div><div class="view-check-form"><button class="contentButton" type="button" onclick="alert("yeet")">Would you like to see this post?</button></div></div>`;
    
      x[i].parentElement.replaceChild(replace, x[i]);*/

      //let parent = x[i].parentElement;
      //x[i].style.display = "none";
      //alert(parent.hasChildNodes);
        
      //oldNodes[i] = x[i].parentElement.removeChild();
      //x[i].appendChild(replace);
      //x[i].parentElement.parentElement.appendChild(replace);


      
      //x[i].parentElement.appendChild(replace);

      //
            
      
     // x[i].parentElement.replaceChild(replace, x[i]);
    
  });
});
/*
function displayContent (post) {
    x[i].style.display = "initial";
}
*/function display () {
  alert("yeet");
}

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