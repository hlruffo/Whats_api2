import { IReceiviedMessage } from './../entidades/interfaces/IMessageReceived';
import { IEnvioMensagem } from '../entidades/interfaces/IEnvioMensagem';
import { Iprojeto } from './../entidades/interfaces/Iprojeto';
import { EnvioMensagemTexto } from '../entidades/useCases';


export class Projeto implements Iprojeto {
    mensagemRecebida(msg: IReceiviedMessage): Promise<void | IEnvioMensagem> {
        return new Promise<void | IEnvioMensagem>((resolve) => {
            //regra do bot
            if (msg.message.body == "ping") {
                const mensagemTexto = new EnvioMensagemTexto({
                    para: msg.from,
                    mensagem: "pong"
                });
                resolve(mensagemTexto)
            }
            resolve()
        });
    }

}