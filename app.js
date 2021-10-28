function trans() {
    var userInput = document.querySelector('#user-input').value;

    const url = 'https://api.funtranslations.com/translate/minion.json?text=';
    fetch(url + userInput)
        .then(response => response.json())
        // .then(data => console.log(data.contents.translated));
        .then(data => {
            var result = data.contents.translated;
            document.querySelector('#translation-output').innerText = result;
        })

}