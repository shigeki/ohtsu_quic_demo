HTTP/1.1 200 OK
Server: nginx/1.9.7
Date: Fri, 18 Dec 2015 08:29:14 GMT
Content-Type: application/javascript
Content-Length: 1235
Last-Modified: Fri, 18 Dec 2015 07:18:23 GMT
Connection: keep-alive
ETag: "5673b33f-4d3"
Accept-Ranges: bytes

var maxi = 0xffffff;
var interval = 100;
var maximage = 255;

window.onload = function() {
  var now = Date.now();
  var protocol_version = window.chrome.loadTimes().npnNegotiatedProtocol;
  var version = document.getElementById('version');
  version.innerHTML = protocol_version;
  function DrawImage(i, color) {
    if (i > maxi) return;
    var xhr = new XMLHttpRequest();
    var num = i%maximage;
    var url = 'images/img_'+ color +'_'+ num + '.png';
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        var blob = this.response;
        var area = document.getElementById('imagearea-' + color);
        var img = document.createElement('img');
        img.onload = function(e) {
          window.URL.revokeObjectURL(img.src); // Clean up after yourself.
        };
        img.src = window.URL.createObjectURL(blob);
        var firstChild = area.firstChild;
        if (firstChild) area.removeChild(area.firstChild);
        area.appendChild(img);
        setTimeout(function() {
          DrawImage(++i, color);
        }, interval);
      }
    };
    xhr.send();
  }

  DrawImage(0, 'red');
  DrawImage(0, 'green');
  DrawImage(0, 'blue');
};
