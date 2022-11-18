import { SendTextMessage } from './entidades/useCases/sendTextMessage';
import { BotJS } from "./entidades/bot"

const bot = new BotJS()
const textMessage = new SendTextMessage({
    to: "5521982222126@c.us",
    message: "oi"
});

(async () => {
    await bot.execute()
    await bot.send(textMessage)
})
