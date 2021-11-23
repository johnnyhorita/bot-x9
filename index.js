//ETHBUSD
//max 4314
//min 4129

const WebSocket = require('ws');
const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethbusd@kline_1h');

const { Telegraf } = require('telegraf');
const bot = new Telegraf('<SEU TOKEN AQUI>');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const valor = parseFloat(data.k.c);
    console.log('Valor Atual:' + valor);

    if (valor >= 4200){
        bot.telegram.sendMessage(<SEU CHAT ID AQUI>, 'Vender!');
        console.log('Vender!');
    }
    else if (valor <= 4129)
        console.log('Comprar!');
}

console.log('conectado');