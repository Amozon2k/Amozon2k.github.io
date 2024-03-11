from aiogram import Bot, Dispatcher

import asyncio

bot = Bot(token='6744705952:AAEFjWRkWN-yb30gEXuGY0gd3bG6SnvWUO0')
dp = Dispatcher(bot=bot)

async def main():
    from handlers import dp
    try:
        await dp.start_polling()
    finally:
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print('Bot stopped!')
