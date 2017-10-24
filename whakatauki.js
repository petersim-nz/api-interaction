/*****************************************************\
| JavaScript for Random Whakatauki Generator          |
| Peter Sim, October, 2017                            |
\*****************************************************/

// Wait until the DOM has loaded, then call the start function.
document.addEventListener('DOMContentLoaded', start)

function start () {
  getProverb()
}

function getProverb() {
  var xhr = new XMLHttpRequest()
  var url = "https://eda-te-reo.herokuapp.com/api/whakatauki"
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText)
      showProverb(myArr)
    }
  }
  xhr.open("GET", url, true)
  xhr.send()
}

function showProverb(arr) {
  document.getElementById('whakatauki').innerHTML = arr.source
  document.getElementById('pakeha').innerHTML = arr.translation
}
