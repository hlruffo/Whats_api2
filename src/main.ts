import { EnvioMensagemTexto } from './entidades/useCases/envioMensagemTexto';
import { BotJS } from './entidades/botjs';

const bot = new BotJS(1000)

const mensagemTexto = new EnvioMensagemTexto({
    para:"5521982222126@c.us",
    mensagem: "oi gatão",
});

(async ()=>{
    await bot.execute();
    await bot.enviar(mensagemTexto)
    
})()