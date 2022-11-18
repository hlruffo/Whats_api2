import { IEnvioMensagem } from './IEnvioMensagem';
import { IReceiviedMessage } from './IMessageReceived';
export interface Iprojeto {
    mensagemRecebida(msg: IReceiviedMessage): Promise<void | IEnvioMensagem>
}