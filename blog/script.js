    
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));
    // Cargar header y navbar en todas las páginas
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));
