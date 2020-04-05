
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

fetch("http://content.guardianapis.com/search?from-date="+ date +"&show-elements=image'&show-blocks=body&api-key=" + APIKEY).then(function(response) {
    response.text().then(function(text) {
      console.log(text);
      var news = JSON.parse(text)
      console.log(news.response.results[0].blocks.body[0].bodyHtml)
      //console.log(news.response.results[0].webTitle);

      news.response.results.forEach(i => {
        //   console.log(i.webTitle);
          newsList.create(i.webTitle, i.webUrl, i.blocks.body[0].bodyHtml.substring(0,100) + "...", i.webUrl);
          document.getElementById("news").innerHTML = newsList.htmlWrap();
      })
    });
  });

  
  //http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-04-04


  