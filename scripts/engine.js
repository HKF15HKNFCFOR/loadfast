

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

let regexp = /num=([^&]+)/i;
    let index = '2';
    if (!!regexp.exec(document.location.hash)) 
        index = regexp.exec(document.location.hash)[1];
  alert(document.location.hash);
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'database/name_database.txt', false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
        var response = xmlhttp.responseText;
var theElement = document.getElementById("elem");
theElement.innerHTML = response.split('\n')[index];
    }
     var xmlhttpnew = getXmlHttp();
    xmlhttpnew.open('GET', 'database/src_database.txt', false);
    xmlhttpnew.send(null);
    if (xmlhttp.status == 200) {
        var responsesrc = xmlhttpnew.responseText;
document.getElementById('link').setAttribute('href',responsesrc.split('\n')[index]);
    }
