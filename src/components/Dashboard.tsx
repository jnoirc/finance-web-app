'use client';
import { useState } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { InputTwo } from './input';
import { AiFillDelete } from 'react-icons/ai';

export default function Dashboard() {
  const [moneyRevenue, setMoneyRevenue] = useState(0);
  const [moneyExpense, setMoneyExpense] = useState(0);
  const [moneyBalance, setMoneyBalance] = useState(0);

  const convertMoneyRevenue = moneyRevenue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const convertMoneyExpense = moneyExpense.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const convertMoneyBalance = moneyBalance.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="mb-10">
      <aside>
        <Sidebar />
      </aside>

      <header className="flex">
        <div className="w-full h-32 bg-purple-800 text-2xl text-white text-center font-bold pt-4">
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
            <InputTwo title="Descrição" type="text" />
            <InputTwo title="Valor" type="number" />
          </div>
          <div className="mt-8">
            <input
              id="radioRevenue"
              className="w-5 h-5 cursor-pointer"
              type="radio"
              name="option"
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
            />
            <label
              className="text-xl font-bold ml-2 cursor-pointer"
              htmlFor="radioExpense"
            >
              Despesa
            </label>
            <hr className="block sm:hidden" />
            <button className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded duration-500 font-bold ml-4 mt-6 sm:mt-0 ">
              Adicionar
            </button>
          </div>
        </section>

        <section className="grid grid-cols-4 place-items-center bg-white shadow-2xl p-2 mt-4">
          <div>
            <h2 className='font-bold'>Dscrição</h2>
            <span className='block mt-4 font-medium'>Salário</span>
          </div>
          <div>
            <h2 className='font-bold'>Valor</h2>
            <span className='block mt-4 font-medium'>R$10000,00</span>
          </div>
          <div>
            <h2 className='font-bold'>Tipo</h2>
            <span className='block mt-4'>
              <BsFillArrowUpCircleFill className='text-2xl'/>
            </span>
          </div>
          <div>
            <h2 className='font-bold'>Excluir</h2>
            <span className='block mt-4'>
              <AiFillDelete className='text-2xl cursor-pointer'/>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
