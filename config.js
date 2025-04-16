const fs = require('fs')
const chalk = require('chalk')

/* ==== SETTINGS ==== */
global.prefa = [',','!','.','#','&']
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = true //auto view status/story
global.antilinkMode = true; // Default: disabled
global.ownernomer = "2349169319387"
global.ownername = "𝚚𝚞𝚎𝚎𝚗-𝚛𝚞𝚟𝚊 𝙰𝙸"
global.ownernumber = '2349169319387' 

module.exports = {
    // ... other settings ...
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes in seconds
    }
};
global.reactSettings = {
  enabled: true, // Master switch
  emojis: ['❤️', '🔥', '👍', '😂', '😮'], // Reaction pool
  cooldown: new Map(), // Stores last reaction time per chat
  noReactZones: [ // Groups/channels where reactions are blocked
    '120363301955930948@g.us' // QUEEN RUVA AI BETA group
  ]
};
                   /* ==== QUEEN RUVA AI BETA CONTROL ==== */
                   
global.ytname = "YT: https://www.youtube.com/@iconic-tech"; 
global.socialm = "GitHub: https://github.com/kineboii"; 
global.location = "zimbabwe/bulawayo";
global.ownername = "iconic tech";
global.botname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ"; 

global.packname = "ʀᴏʙᴏᴛɪᴄ"; 
global.author = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ";

global.themeemoji = "🤖";
global.wm = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ"; 

global.link = "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp"

global.typemenu = "\u0076\u0031"

// Global Texts
global.xbugtex = {
    xtxt: "queen ʀᴜᴠᴀ 👨‍💻",
}

// Reply Messages
global.mess = {
    done: "ʙᴏᴛ ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ᴅᴏɴᴇ..!",
    prem: "Oh no 😔! This for ǫᴜᴇᴇɴ ʀᴜᴠᴀ premium users only...",
    admin: "Only Admins can use this 😨",
    botAdmin: "I'm not an admin here 🏖️",
    owner: "You are not my owner 😡",
    group: "This is only for group chats?🤔",
    private: "Use this in my DM 😡",
    wait: "Wait... I'm on it...",
    error: "Error!",
}

// Watch file changes
global.thumb = fs.readFileSync("./QueenMedia/ruva.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// Module exports
module.exports = {
    antilinkMessage: "This is for groups only for links?🤔",
    mess: {
        owner: "You are not my owner 😡",
        wait: "Please wait... I'm fetching that!",
        done: "I'm done 😊",
    },
}




