var xhttp = new XMLHttpRequest();
var xTransSessionId;


xhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 409) {
    xTransSessionId = xhttp.getResponseHeader("X-Transmission-Session-Id");
    alert(xhttp.getResponseHeader("Host"));
    sendMagnet();
    //alert(xTransSessionId);
  }

  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }

};

function sendMagnet() {

  xhttp.open("POST", "http://localhost:9091/transmission/rpc", true);
  xhttp.setRequestHeader("X-Transmission-Session-Id", xTransSessionId);
  xhttp.send(JSON.stringify({
    "arguments": {
      "filename": "magnet:?xt=urn:btih:e56880dbbdc834706c9f9272c84c68517a7adbb9&dn=Her+%282013%29+1080p+BrRip+x264+-+YIFY&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969"
    },
    "method": "torrent-add",
    "tag": 39693
  }));
}


function loadDoc() {
  sendMagnet();
}
