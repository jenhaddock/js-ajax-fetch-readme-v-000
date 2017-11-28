const app = "I don't do much.";

const token = 'e1c3668f22a2804516855f7b33bc0920b1a28e48'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
