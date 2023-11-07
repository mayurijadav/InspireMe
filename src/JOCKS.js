import React from "react";

// Here i have used fectch Api for the new data every time.
 
document.getElementById('fetchQuote').addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.quotable.io/random', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var quoteData = JSON.parse(xhr.responseText);
      document.getElementById('quoteDisplay').textContent = quoteData.content;
    }
  };
  xhr.send();
});

function jocks(){
   
  
    return(
        <div>
            <button id="fetchQuote">Get Quote</button>
            <div id="quoteDisplay"></div>
        </div>
    );
};

export default jocks;