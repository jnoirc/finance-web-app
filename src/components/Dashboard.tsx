'use client';
import { useState, useEffect } from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Card from './Card';
import Sidebar from './Sidebar';
import Grid from './Grid';
import formatMoney from '@/utils/functions/moneyFormat';
import addedItem from '@/utils/functions/addItem';
import Input from './input';
import { FaTimes } from 'react-icons/fa';

export default function Dashboard() {
  const [moneyRevenue, setMoneyRevenue] = useState(0);
  const [moneyExpense, setMoneyExpense] = useState(0);
  const [moneyBalance, setMoneyBalance] = useState(0);
  const [inputDescription, setInputDescription] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [selectedType, setSelectedType] = useState('revenue');
  const convertMoneyRevenue = formatMoney(moneyRevenue);
  const convertMoneyExpense = formatMoney(moneyExpense);
  const convertMoneyBalance = formatMoney(moneyBalance);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      const items = JSON.parse(storedItems);
      let revenueTotal = 0;
      let expenseTotal = 0;

      items.forEach((item: any) => {
        if (item.type === 'revenue') {
          revenueTotal += parseFloat(item.value);
        } else if (item.type === 'expense') {
          expenseTotal += parseFloat(item.value);
        }
      });

      setMoneyRevenue(revenueTotal);
      setMoneyExpense(expenseTotal);
      setMoneyBalance(revenueTotal - expenseTotal);
    }
  }, []);

  const handleDescription = (value: any) => {
    setInputDescription(value);
  };

  const handleValue = (value: any) => {
    setInputValue(value);
  };

  function addItems() {
    addedItem(
      {
        description: inputDescription,
        value: inputValue,
        type: selectedType === 'revenue' ? 'revenue' : 'expense',
      },
      moneyRevenue,
      setMoneyRevenue,
      moneyExpense,
      setMoneyExpense,
      moneyBalance,
      setMoneyBalance
    );
    setShowModal(false);
  }

  function clearItems() {
    localStorage.removeItem('items');
    setMoneyRevenue(0);
    setMoneyExpense(0);
    setMoneyBalance(0);
  }

  return (
    <div className="mb-10">
      <aside>
        <Sidebar />
      </aside>

      <header className="flex">
        <div className="w-full h-52 bg-purple-800 text-2xl text-white text-center font-bold pt-24">
          <h1>Sistema de finanças</h1>
        </div>
      </header>

      <main>
        <section className="flex flex-wrap justify-center gap-6 mt-6">
          <Card
            title="Receita"
            icon={<BsFillArrowUpCircleFill />}
            money={convertMoneyRevenue}
            colorMoney="green"
          />
          <Card
            title="Despesa"
            icon={<BsFillArrowDownCircleFill />}
            money={convertMoneyExpense}
            colorMoney="red"
          />
          <Card
            title="Saldo"
            icon={<MdOutlineAttachMoney />}
            money={convertMoneyBalance}
            colorMoney="green"
          />
        </section>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded duration-500 font-bold ml-4 mb-6"
          >
            Adicionar
          </button>
          <button
            onClick={clearItems}
            className="text-white bg-red-700 hover:bg-red-600 w-32 p-2 border-none rounded duration-500 font-bold ml-4 mb-6"
          >
            Limpar tudo
          </button>
        </div>
        {showModal && (
          <section className="fixed inset-0 h-screen w-full bg-gray-500 flex items-center justify-center z-30">
            <div className="bg-white w-370 sm:w-480 h-80 rounded-lg shadow-md relative transition-opacity flex items-center justify-center flex-col text-center pt-4">
              <FaTimes
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 cursor-pointer text-2xl"
              />
              <div>
                <Input
                  label="description"
                  onInputChange={handleDescription}
                  type="text"
                />
                <Input
                  label="value"
                  onInputChange={handleValue}
                  type="number"
                />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center">
                <div>
                  <input
                    id="radioRevenue"
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                    name="option"
                    checked={selectedType === 'revenue'}
                    onChange={() => setSelectedType('revenue')}
                  />
                  <label
                    className="text-xl font-bold ml-2 cursor-pointer"
                    htmlFor="radioRevenue"
                  >
                    Receita
                  </label>
                  <input
                    id="radioExpense"
                    className="w-5 h-5 ml-4 cursor-pointer"
                    type="radio"
                    name="option"
                    checked={selectedType === 'expense'}
                    onChange={() => setSelectedType('expense')}
                  />
                  <label
                    className="text-xl font-bold ml-2 cursor-pointer"
                    htmlFor="radioExpense"
                  >
                    Despesa
                  </label>
                </div>
                <button
                  onClick={addItems}
                  className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded duration-500 font-bold mt-6 sm:ml-4 sm:mt-0"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </section>
        )}
        <section>
          <Grid
            setMoneyRevenue={setMoneyRevenue}
            setMoneyExpense={setMoneyExpense}
            setMoneyBalance={setMoneyBalance}
            moneyRevenue={moneyRevenue}
            moneyExpense={moneyExpense}
            moneyBalance={moneyBalance}
          />
        </section>
      </main>
    </div>
  );
}
