from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart, Command
from aiogram.types import FSInputFile

from Keyboards import app_kb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(msg: types.Message):
    await msg.answer("Hi", reply_markup=app_kb)




# contact

@dp.callback_query(F.data == "Контакт")
async def Contacts(callback: types.CallbackQuery):
    await callback.message.answer_contact("(+998) 909080109", "Nigora", "Vaxidova")


# location
@dp.message(Command("расположение"))
async def get_locations(message: types.Message):
    await message.answer_location(41.3239474, 69.241994)


@dp.callback_query(F.data == "расположение")
async def location(callback: types.CallbackQuery):
    await callback.message.answer_location(41.3239474, 69.241994)


# card
@dp.callback_query(F.data == "оплатить")
async def card(callback: types.CallbackQuery):
    await callback.message.answer("оплатите по этой номер карты, номер карты 2505 0144 0635 0147🗃️")


# About
@dp.callback_query(F.data == "о нас")
async def about(callback: types.CallbackQuery):
    await callback.message.answer("это кафе-ресторан был открыт в 2023 году")


@dp.message(Command("о нас"))
async def get_about(message: types.Message):
    await message.answer("это кафе-ресторан был открыт в 2023 году")


# Help
@dp.callback_query(F.data == "помощь")
async def help(callback: types.CallbackQuery):
    await callback.message.answer("Чем мы можем вам помочь? (+998) 981010202", "Doston")



# Menu
@dp.callback_query(F.data == "Меню")
async def Menu(callback: types.CallbackQuery):
    await callback.message.answer_photo(photo=FSInputFile('867.png'))


@dp.message(Command("Меню"))
async def get_Menu(message: types.Message):
    await message.answer_photo(photo=FSInputFile("867.png"))


# delivery
@dp.callback_query(F.data == "Доставка")
async def Delivery(callback: types.CallbackQuery):
    await callback.message.answer("Поделитесь своим местоположением и поделитесь своим контактом")