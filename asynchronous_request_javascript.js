let httpRequest;
let timeOut;

function doRequest(url, destiny) {

    clearTimeout(timeOut);
    document.getElementById(destiny).innerHTML = "<center><img src='loader.gif' class='image-responsive mx-auto d-block'></center>"

    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.activeXObject) {
        try {
            httpRequest = new activeXObject("Msxm12.XMLTTP");
        } catch (e) {
            try {
                httpRequest = new activeXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Unable to instantiate XMLHttpRequest object for this browser version");
            }
        }
    }

    if (!httpRequest) {
        alert("error when trying to create an instance of the XHTML Request object");
    }

    httpRequest.onreadystatechange = situationRequest;

    httpRequest.open("GET", url);
    httpRequest.send();

}

function situationRequest() {
    if (httpRequest.readyState == 1) {
        console.log("The request will be made in seconds")
    }

    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log("The request has been made and the response has already been delivered");

        timeOut = setTimeout(() => {
            document.getElementById("div-content").innerHTML = httpRequest.responseText;
        }, 1000);
    }
}