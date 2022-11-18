import { Client, LocalAuth, Message } from 'whatsapp-web.js'
import Qrcode from "qrcode-terminal"
import { resolve } from 'styled-jsx/css'

interface ReciviedMessage {
    from: string,
    message: Message
}

function delay(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout)
    })
}

export class Sistema {
    private messageList: ReciviedMessage[] = []
    private bot: Client
    private timeout: number

    constructor(timeout: number = 5000) {
        this.timeout = timeout
        this.bot = this.create()
        this.initializeEvents()
    }

    public async execute() {
        await this.bot.initialize()
        this.process()
    }

    private async process() {
        while (true) {
            if (this.messageList.length > 0) {
                const msg = this.messageList.shift()
                if (msg?.message.body.startsWith('!canal')) {
                    msg?.message.reply('Sim eu sou um bot, seu bundão ')
                }
            }
            console.log("Messages" + this.messageList.length)

            await delay(this.timeout)
        }
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