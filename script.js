localStorage.setItem('name','shlok')
console.log(localStorage.getItem('name'))

// localStorage.removeItem('name')


sessionStorage.setItem('name','John')
console.log(sessionStorage.getItem('name'))


// Cookies

document.cookie = 'name=Shlok; expires=' + new Date(2025, 0, 1).toUTCString();

document.cookie = 'lastName=Shlok; expires=' + new Date(2025, 0, 1).toUTCString();


console.log(document.cookie)