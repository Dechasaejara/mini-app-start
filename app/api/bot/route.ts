export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import { Bot, Keyboard, webhookCallback } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const keyboard = new Keyboard().text('Show Status').text('Add').row().text('Join our community')
const bot = new Bot(token)
bot.command("start", async (ctx) => {
  const user = ctx.message?.from.username; // the message object
  await ctx.reply(`<b>Hello <i>${user}</i> , welcome to our bot.</b>`, { reply_markup: keyboard, parse_mode: "HTML" });
});

const handleMessageText = async (ctx: any) => {
  const message = ctx.message;
  if (!message) return;

  if (message.text === "Join our community") {
    return await ctx.reply("Click here to join our main channel:    https://t.me/+5IyRGnhrSvcxNmU0", { reply_markup: keyboard });
  }
  if (message.text === "Show Status") {
  }
  if (message.text === "Add") {
    return await ctx.reply(`Please enter amount `, { reply_markup: keyboard });
  }
  if (Number(message.text)) {
    // await db.insert(Users).values({}).returning();
    // await ctx.reply(messageText);
  }
};


bot.on("message:text", handleMessageText);

export const POST = webhookCallback(bot, 'std/http')

