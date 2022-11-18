import { EnvioMensagemImagem, EnvioMensagemAudio, EnvioMensagemTexto, EnvioMensagemVideo } from './entidades/useCases';
import { BotJS } from './entidades/botjs';
import { PATH_MEDIA } from './utils/constants';
import { resolve } from "path"
import { Projeto } from './projetos/projeto';

const projeto = new Projeto()
const bot = new BotJS({
    timeout: 5000,
    useChrome: true,
    projeto:projeto,
});


(async () => {
    await bot.execute();
    

})()