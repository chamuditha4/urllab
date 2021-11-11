function myFunction() {
    var nameValue = document.getElementById("urls").value;
    var find = '.io';
    var re = new RegExp(find, 'g');

    nameValue = nameValue.replace(re, '');
    document.getElementById("res").innerHTML = String(nameValue);
  }