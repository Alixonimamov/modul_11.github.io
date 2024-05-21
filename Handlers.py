import os
from aiogram import Dispatcher, F, Bot
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery
from Keyboards import app_kb, buy_ikb
from dotenv import load_dotenv

load_dotenv()
PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')

BOT_TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start(msg: Message):
    await msg.answer("Salom", reply_markup=app_kb)


@dp.message(Command("pay"))
async def order(msg: Message):
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="Telegram bot orqali to'lov!",
        description="Telegram bot orqali to'lov qilishni o'rganyammiz!",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=[
            LabeledPrice(label="Product1", amount=200000),
            LabeledPrice(label="Product2", amount=100000)
        ],
    )


@dp.pre_checkout_query()
async def pre_checkout_query(checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(checkout_query.id, ok=True)


@dp.message(F.func(lambda msg: msg.web_app_data.data))
async def get_btn(msg: Message):
    text = msg.web_app_data.data
    print(text)
    product_data = text.split("|")
    products = {}
    for i in range(len(product_data)):
        if len(product_data[i].split("/")) >= 3:
            title = product_data[i].split('/')[0]
            price = product_data[i].split('/')[1]
            quantity = int(product_data[i].split('/')[2])
            product = {
                "Nomi": title,
                "Price": int(price),
                "Quantity": int(quantity)
            }
            products[i] = product
    print(products)
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="To'lov",
        description="Telegram bot orqali to'lov!",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=[LabeledPrice(
            label=f"{product['Nomi']} ({product['Quantity']})",
            amount=product["Price"]
        ) for product in products.values()],
    )
