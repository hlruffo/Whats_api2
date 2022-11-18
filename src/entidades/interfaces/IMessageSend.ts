import { Client } from "whatsapp-web.js"

export interface IMessageSend{
    send(): void
    injectBOT(bot: Client):void
}