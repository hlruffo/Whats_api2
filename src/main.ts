import { EnvioMensagemImagem, EnvioMensagemAudio, EnvioMensagemTexto, EnvioMensagemVideo } from './entidades/useCases';
import { BotJS } from './entidades/botjs';
import { PATH_MEDIA } from './utils/constants';
import { resolve } from "path"

const bot = new BotJS({
    timeout: 5000,
    useChrome: true,
})

const mensagemTexto = new EnvioMensagemTexto({
    para: "5521982222126@c.us",
    mensagem: "oi gatão",
});
const mensagemImagem = new EnvioMensagemImagem({
    para: "5521982222126@c.us",
    mensagem: "curtiu minha pic?",
    path: resolve(PATH_MEDIA + "Screenshot.png")
});
const mensagemAudio = new EnvioMensagemAudio({
    para: "5521982222126@c.us",
    mensagem: "curtiu minha pic?",
    path: resolve(PATH_MEDIA + "audioteste.ogg"),
    audioAsVoice: false,
});
const mensagemVideo = new EnvioMensagemVideo({
    para: "5521982222126@c.us",
    mensagem: "Eu sei dançar",
    path: resolve(PATH_MEDIA + "video.mp4"),
    AsDocument: false,
    AsGif: false,
});

(async () => {
    await bot.execute();
    await bot.enviar(mensagemTexto)
    await bot.enviar(mensagemImagem)
    await bot.enviar(mensagemAudio)
    await bot.enviar(mensagemVideo)

})()