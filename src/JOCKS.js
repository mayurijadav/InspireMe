import React from "react";

// Here i have used fectch Api for the new data every time.

document.getElementById('fetchQuote').addEventListener('click', function () {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quoteDisplay').textContent = data.content;
    })
    .catch(error => console.error('Error:', error));
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