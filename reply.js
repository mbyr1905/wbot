const qrcode = require('qrcode-terminal');

const { Client , LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message',message=>{
    const msg=message.body
    if(msg ==="hello 123" || msg ==="Hello 123")
    {
        message.reply("hi there this is mbyr's bot, \n he is sleeping right now, you can talk to me ");
    }
    else if(msg === "good morning" || msg === 'good night' || msg === "Good morning" || msg === 'Good night'){
        message.reply(msg);
    }
});

client.initialize();
