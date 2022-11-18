import { Iprojeto } from './interfaces/Iprojeto';
import { PATH_CHROME } from './../utils/constants';
import { Client, LocalAuth, Message } from 'whatsapp-web.js'
import Qrcode from "qrcode-terminal"
import { IRecievedMessage } from "./interfaces/IRecievedMessage"
import { IEnvioMensagem } from './interfaces/IEnvioMensagem';


function delay(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout)
    })
}

export class BotJS {
    private messageList: IRecievedMessage[] = [];
    private bot: Client;

    constructor(
        private params: {
            timeout: number;
            useChrome?: boolean;
            projeto?: Iprojeto;
            pathSession?: string;
        }
    ) {
        this.bot = this.create();
        this.initializeEvents();
    }

    public async execute() {
        await this.bot.initialize();
        this.process()
    }

    public async enviar(msg: IEnvioMensagem) {
        msg.injetarBOT(this.bot);
        msg.enviar();
    }

    private async process() {
        while (true) {
            if (this.messageList.length > 0) {
                const msg = this.messageList.shift()
                if (msg && this.params.projeto) {
                    const response = await this.params.projeto.mensagemRecebida(msg);
                    if (response) {
                        this.enviar(response)
                    }
                }
            }
            console.log("Messages" + this.messageList.length)

            await delay(this.params.timeout)
        }
    }

    private create(): Client {
        return new Client({
            puppeteer: {
                executablePath: this.params.useChrome ? PATH_CHROME : undefined,
            },
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