function renderPage(url) {
  var page = require('webpage').create();
  page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';
  
  page.open(url, function(status) {
    console.log("Status: " + status);
    if(status === "success") {
      window.setTimeout(function () {
        console.log(page.content);
        page.render('page.png');
        phantom.exit();
      }, 1000); // Change timeout as required to allow sufficient time 
    }
    phantom.exit();
  });
}

renderPage('http://localhost:5001');