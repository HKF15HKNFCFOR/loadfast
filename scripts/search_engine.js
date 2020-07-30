
function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function turnText() {
  var response;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'database/name_database.txt', false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
       response = xmlhttp.responseText;
    }
  return(response)
}
function tableSearch() {
    let phrase = document.getElementById('search').value;
  if (phrase!=''){
let link='https://loadfast.tk/download.html#num=';

const myText = turnText(); // инициализируем переменную, содержащую строку
let array = myText.split('\n');
let filter = phrase;
 let res =array.filter(x => x.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  let arrayHtml='';
      let len = res.length;
    if (phrase == '#allout'){
res = array;
        len = res.length-1;
    }
for (let i=0; i<len; i++) {
    let results = res[i];
    arrayHtml += '<p><a href="'+link+array.indexOf(results)+'" target="_blank">' + results + '</a></p>';
}
document.getElementById("counter").innerHTML = 'Нашлось '+len+' файл(-ов)';
document.getElementById("search_results").innerHTML = arrayHtml;
  
  }
}
