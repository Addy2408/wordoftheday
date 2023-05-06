// fetching current date
const date = new Date;
document.getElementById('date').innerHTML=date.toDateString();

// API URL
const api_url = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=f4jyq6fupmhuxuo4fgo1shbd3oq7dnem5pipkj528oib0hhpp';

// fetch API
fetch(api_url)
.then(response => response.json())
.then(result => {
    document.getElementById('word').innerHTML = result.word;
    document.getElementById('about').innerHTML = result.note;
    let definitions = result.definitions;
    let definition_list = ``;
    for (let i = 0; i < definitions.length; i++) {
        const element = definitions[i];
        if(element.text != null && element.partOfSpeech != null)
        {
            definition_list += `
                                <li id="meaning">${element.text}
                                <span>&#40;</span>
                                <span id="partOfSpeech">${element.partOfSpeech}</span>
                                <span>&#41;</span>
                                </li>
                                `;
        }
        document.getElementById('definition_list').innerHTML = definition_list;
    }
    let examples = result.examples;
    let example_list = ``;
    for (let i = 0; i < examples.length; i++) {
        const element = examples[i];
        example_list += `<li>${element.text}</li>`;
    }
    document.getElementById('example_list').innerHTML = example_list;
    console.log(result);
})
.catch(err => console.log(err));