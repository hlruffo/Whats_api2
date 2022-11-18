import { Message } from "whatsapp-web.js";

export interface IReceiviedMessage {
    from: string,
    message: Message
}
