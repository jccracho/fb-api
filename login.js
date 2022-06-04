const login = require("facebook-chat-api");

login({email: "Jibes Miserte", password: "09368924417"}, (err, api) => {
    if(err) return console.error(err);
    // Here you can use the api
});
