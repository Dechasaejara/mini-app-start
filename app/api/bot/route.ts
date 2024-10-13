export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import { fetchTelegramUpdates } from '@/app/actions/getupdate'
import { TelegramGetUpdate } from '@/lib/db/type'
import { Bot, Keyboard, webhookCallback } from 'grammy'
import { useRouter } from 'next/navigation';
import { text } from 'drizzle-orm/pg-core';

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
    // const data = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    // if (data.ok) {
    //   // await sendMessageToChannel(data.result[0].channel_post.chat.id, data.result[0].channel_post.text)
    //   return await ctx.reply(`New message posted ${JSON.stringify(data)}`, { reply_markup: keyboard });
    // }
    await sendMessageToChannel(-1001670159978, "First post from bot");
  }
  return await ctx.reply(message);
};

// Function to send a message to the channel
const sendMessageToChannel = async (chatId: number, message: string) => {
  try {
    await bot.api.sendMessage(chatId, message);
    console.log('Message sent to channel:', message);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};


bot.on("message:text", handleMessageText);
bot.on(("channel_post:photo"), async (ctx) => {
  const data: any = ctx.msg.photo;
  await ctx.reply(data);
})

export const POST = webhookCallback(bot, 'std/http')

