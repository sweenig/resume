function initialize(){
  var e = 0;
  var c = 0;
  var parenturl=parent.document.location.search; //get the parent page URL parameters
  parenturl=parenturl.replace('?',''); //remove the leading ? from the URL parameters
  var argsarray=parenturl.split('&'); //split the parameters into an array of parameter pairs
  var argsmatrix = new Array(argsarray.length); //create the matrix to hold the parameters after splitting
  for (var i = 0; i < argsarray.length; i++){ //split the array members and put into the matrix
    argsmatrix[i] = new Array(2);
    argsmatrix[i] = argsarray[i].split('=');
  }
  for (var j = 0; j < argsmatrix.length; j++){
    if (argsmatrix[j][0] == 'e'){ // if the email parameter is present
      document.getElementById('email').innerHTML = argsmatrix[j][1];
      document.getElementById('email').href='mailto:' + argsmatrix[j][1];
    }
    if (argsmatrix[j][0] == 'c'){ // if the cell phone number parameter is present
        document.getElementById('cell').innerHTML = argsmatrix[j][1];
    }
    if (argsmatrix[j][0] == "d"){ // if the dark mode parameter is present
      document.body.classList.toggle('dark-mode');
    }
  }
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}