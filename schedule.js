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

    const recipientNumber = '9866046979';

    const message = 'Good morning';

    const scheduledTime = new Date('2023-12-21T22:05:00').getTime();

    const delay = scheduledTime - Date.now() + 5000;


    // Schedule the message
    setTimeout(() => {
        // console.log('Sending message with wid:', client.getState().wid);
        client.sendMessage(recipientNumber, message).then(() => {
            console.log('Message sent successfully!');
            client.destroy();
        });
    }, delay);
});

client.initialize();
