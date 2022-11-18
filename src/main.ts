import { PATH_MEDIA } from './utils/constants';
import { EnvioMensagemImagem } from './entidades/useCases/envioMensagemImagem';
import { EnvioMensagemTexto } from './entidades/useCases/envioMensagemTexto';
import { BotJS } from './entidades/botjs';
import { EnvioMensagemAudio } from './entidades/useCases/envioMensagemAudio';

const bot = new BotJS(1000)

const mensagemTexto = new EnvioMensagemTexto({
    para: "5521982222126@c.us",
    mensagem: "oi gatão",
});
const mensagemImagem = new EnvioMensagemImagem({
    para: "5521982222126@c.us",
    mensagem: "curtiu minha pic?",
    path: PATH_MEDIA + "Screenshot.png"
});
const mensagemAudio = new EnvioMensagemAudio({
    para: "5521982222126@c.us",
    mensagem: "curtiu minha pic?",
    path: PATH_MEDIA + "audioteste.ogg",
    audioAsVoice: false,
});

(async () => {
    await bot.execute();
    await bot.enviar(mensagemTexto)
    await bot.enviar(mensagemImagem)
    await bot.enviar(mensagemAudio)
    
})()