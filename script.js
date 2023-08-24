const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=f9b07b016d995c8455b666bc9d5b832a931ef22c");
    data = await response.json();

    for(let i=0;i<1500;i++){
        emoji.push({
            emojiname: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiname;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})
