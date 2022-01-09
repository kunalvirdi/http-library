//HTTP library using ES5 objects/constrcutor and XMLHTTPREQUEST

// Version:1.0 of HTTP library using Ajax and XHTTP

function HTTP() {
  this.http = new XMLHttpRequest();
}


// Make a HTTP GET request
HTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    //We use self because in function this keyword will become the scope of that function[Taking a fucntion as object] to maintain we declare this as separate parameter/Although we can use arrow function here.
    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
      //We use callback here to maintain asynchronous nature. If we not use callbacks here then we don't get our o/p
            callback(null,self.http.responseText);
        } else {
            callback('Error:'+self.http.status,null);
        }
    }
    
    this.http.send();
}


// Make a HTTP POST request
HTTP.prototype.post = function (url,data,callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callback(self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}



// Make a HTTP PUT request
HTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
    
  let self = this;
  this.http.onload = function () {
    callback(self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make a HTTP DELETE request

HTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null,'Post-Deleted');
    } else {
      callback("Error:" + self.http.status, null);
    }
  };

  this.http.send();
};