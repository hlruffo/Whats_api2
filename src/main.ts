import { EnvioMensagemImagem } from './entidades/useCases/envioMensagemImagem';
import { EnvioMensagemTexto } from './entidades/useCases/envioMensagemTexto';
import { BotJS } from './entidades/botjs';

const bot = new BotJS(1000)

const mensagemTexto = new EnvioMensagemTexto({
    para:"5521982222126@c.us",
    mensagem: "oi gatão",
});
const mensagemImagem = new EnvioMensagemImagem({
    para:"5521982222126@c.us",
    mensagem: "curtiu minha pic?",
    path: "src/media/Screenshot.png"
});

(async ()=>{
    await bot.execute();
    await bot.enviar(mensagemImagem)
    
})()