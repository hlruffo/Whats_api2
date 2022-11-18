import { Message } from "whatsapp-web.js";

export interface IRecievedMessage {
    from: string,
    message: Message
}