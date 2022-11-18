import { MessageMedia } from 'whatsapp-web.js';
import { BaseEnvio } from './baseEnvio';


export class EnvioMensagemAudio extends BaseEnvio {
    constructor(private data: { para: string; mensagem: string, path: string, audioAsVoice?: boolean, AsDocument?:boolean }) {
        super()
    }

    async enviar(): Promise<void> {
        const audio = MessageMedia.fromFilePath(this.data.path)

        await this.bot?.sendMessage(this.data.para, audio, {
            caption: this.data.mensagem,
            sendAudioAsVoice: this.data.audioAsVoice,
            sendMediaAsDocument: this.data.AsDocument
        })
        return;

    }


}