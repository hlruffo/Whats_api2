import { Client, LocalAuth, Message } from 'whatsapp-web.js'
import Qrcode from "qrcode-terminal"

interface ReciviedMessage{
    from: string,
    message: Message
}

export class Sistema {
    private messageList:ReciviedMessage[]=[]
    private bot: Client

    constructor() {
        this.bot = this.create()
        this.initializeEvents()
    }

    public execute(){
        this.bot.initialize()
    }

    private create(): Client {
        return new Client({
            authStrategy: new LocalAuth()
        });
    }

    private initializeEvents() {
        this.bot.on("qr", (qr: string) => {
            Qrcode.generate(qr, { small: true })
            //console.log(qr)
        })

        this.bot.on('message', (message: Message) => {
            this.messageList.push({
                from: message.from,
                message
            })
            console.log(this.messageList.length);
            
            console.log(`Mensagem recebida de ${message.from}: ${message.body}`)

        })

        this.bot.on("ready", () => {
            console.log("Conectado")
        })


    }

}