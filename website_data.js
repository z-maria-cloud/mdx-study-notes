var fs = require('fs');
const { exec } = require('child_process');

let days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]

let data = {}

//

const today = new Date();

let minutes = today.getMinutes()

if (minutes < 10) {
    minutes = `0${minutes}`
}

let lastModifiedString = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}, ${today.getHours()}:${minutes}`

let wordCount = exec("find ./docs/ -type f -exec wc -w {} + | awk '/total/{print $1}'", (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Command stderr: ${stderr}`);
    }

    let data = {
    date: lastModifiedString,
    words: stdout.replace("\n", ""),
    pages: Math.floor(parseInt(stdout.replace("\n", "")) / 250)
    }

    console.log(data)

    fs.writeFile('./src/pages/site_update_data.json', JSON.stringify(data), 'utf8', function(err) {
    if (err) throw err;
    console.log("done.");
});

})






