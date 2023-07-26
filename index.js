function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const data = {
      name: name,
      email: email
    };
  
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data=>(data))
    .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);

    });
}

