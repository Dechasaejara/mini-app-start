export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import { Bot, Keyboard, webhookCallback } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')
const channelId = 1670159978; // Replace with your channel ID
const keyboard = new Keyboard().text('Show Status').text('Post').row().text('Join our community')
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
  if (message.text === "Post") {
    await sendMessageToChannel("New message posted ")
    return await ctx.reply(`New message posted `, { reply_markup: keyboard });
  }
  return await ctx.reply(message);
};

// Function to send a message to the channel
const sendMessageToChannel = async (message: string) => {
  try {
    await bot.api.sendMessage(channelId, message);
    console.log('Message sent to channel:', message);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};


bot.on("message:text", handleMessageText);

export const POST = webhookCallback(bot, 'std/http')

