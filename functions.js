function initialize(){
  if (!window.URLSearchParams) {
    return;
  }

  var search = window.location.search;
  try {
    if (parent && parent !== window && parent.document && parent.document.location) {
      search = parent.document.location.search;
    }
  } catch (err) {
    search = window.location.search;
  }

  var params = new URLSearchParams(search);
  var emailElement = document.getElementById('email');
  var cellElement = document.getElementById('cell');

  if (emailElement && params.has('e')) {
    var email = params.get('e').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailElement.textContent = email;
      emailElement.setAttribute('href', 'mailto:' + encodeURIComponent(email));
    }
  }

  if (cellElement && params.has('c')) {
    var phone = params.get('c').trim();
    if (/^[0-9()+.\-\s]+$/.test(phone)) {
      cellElement.textContent = phone;
    }
  }

  if (params.has('d')){ // if the dark mode parameter is present
    document.body.classList.toggle('dark-mode');
  }
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
