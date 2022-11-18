import { Client } from 'whatsapp-web.js';
import { IEnvioMensagem } from './../interfaces/IEnvioMensagem';


export class EnvioMensagemTexto implements IEnvioMensagem {
    private bot: Client | undefined;

    constructor(private data: { para: string; mensagem: string }) {
    }

    injetarBOT(bot: Client): void {
        this.bot = bot;
    }

    async enviar(): Promise<void> {
        await this.bot?.sendMessage(this.data.para, this.data.mensagem)
        return;

    }


}