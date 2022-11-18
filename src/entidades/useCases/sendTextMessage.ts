import { Client } from 'whatsapp-web.js';
import { IMessageSend } from './../interfaces/IMessageSend';


export class SendTextMessage implements IMessageSend {
    private bot: Client | undefined

    constructor(private data: { to: string; message: string }) {

    }
    injectBOT(bot: Client): void {
        this.bot = bot

    }
    async send(): Promise<void> {
        await this.bot?.sendMessage(this.data.to, this.data.message)
    }

}