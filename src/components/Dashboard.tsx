'use client';
import { useState, useEffect } from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Card from './Card';
import Sidebar from './Sidebar';
import { InputTwo } from './input';
import Grid from './Grid';
import formatMoney from '@/utils/functions/moneyFormat';
import addedItem from '@/utils/functions/addItem';

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
        <section className="block text-center lg:flex gap-4 items-center justify-center mt-2 ">
          <div className="block sm:flex justify-center gap-4">
            <InputTwo
              onChange={(e) => setInputDescription(e.target.value)}
              title="Descrição"
              type="text"
            />
            <InputTwo
              onChange={(e) => setInputValue(e.target.value)}
              title="Valor"
              type="number"
            />
          </div>
          <div className="mt-8">
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
            <hr className="block sm:hidden" />
            <button
              onClick={() =>
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
                )
              }
              className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded duration-500 font-bold ml-4 mt-6 sm:mt-0"
            >
              Adicionar
            </button>
          </div>
        </section>
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
