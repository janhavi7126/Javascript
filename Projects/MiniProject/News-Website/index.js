//96416b5f8eaf42a2825b766c3cc8db43

let newsAcc = document.getElementById('newsAccordion');

let xhr = new XMLHttpRequest();
xhr.open('GET','http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=96416b5f8eaf42a2825b766c3cc8db43',true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml ="";
        articles.forEach(function(element,index){
            let text = element.content
            let str ="";
            if(text != null){
             str += text.substr(0,element.content.length -13);
            }
           
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                            <button
                                class="btn btn-link "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}"
                                aria-expanded="true"
                                aria-controls="collapse${index}"
                            >
                            <strong>Breaking News  ${index +1} : </strong> ${element.title}
                            </button>
                            </h2>
                            <div
                            id="collapse${index}"
                            class="accordion-collapse collapse"
                            aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                                ${str} .<a href="${element["url"]}"  target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>`
             newsHtml +=news;
        }); 
        newsAcc.innerHTML = newsHtml;
    }else{
        console.log("error");
    }

}
xhr.send()


