'use client';
import { useState, useEffect, useContext } from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Card from './Card';
import Sidebar from './Sidebar';
import Grid from './Grid';
import moneyFormat from '@/utils/functions/moneyFormat';
import addedItem from '@/utils/functions/addItem';
import Input from './input';
import { FaTimes } from 'react-icons/fa';
import useContexts from '@/app/hooks/useContexts';
import AnimModal from '@/app/anim/AnimModal';
import ConfirModal from './ConfirmModal';
import { ToastContainer } from 'react-toastify';
export default function Dashboard() {
  const [moneyRevenue, setMoneyRevenue] = useState(0);
  const [moneyExpense, setMoneyExpense] = useState(0);
  const [moneyBalance, setMoneyBalance] = useState(0);
  const [inputDescription, setInputDescription] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [selectedType, setSelectedType] = useState('revenue');
  const convertMoneyRevenue = moneyFormat(moneyRevenue);
  const convertMoneyExpense = moneyFormat(moneyExpense);
  const convertMoneyBalance = moneyFormat(moneyBalance);
  const colorMoney = moneyBalance < 0 ? 'red' : 'green';
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { theme, notifySucess, sucess, setSucess } = useContexts();

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
    setConfirm(false);
  }
  useEffect(() => {
    if (sucess) {
      notifySucess();
      setSucess(false);
    }
  }, [sucess]);
  return (
    <div className="mb-10 flex">
      <ToastContainer />
      <aside>
        <Sidebar />
      </aside>

      <div className="mx-auto w-full">
        <header className="flex">
          <div className="w-full h-52 md:h-32 bg-purple-800 text-2xl text-white text-center font-bold pt-24 md:pt-4">
            <h1>Sistema de finanças</h1>
          </div>
        </header>
        <main className="md:ml-52">
          <section className="flex flex-wrap justify-center items-center gap-6 mt-6">
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
              colorMoney="green"
            />
            <Card
              title="Saldo"
              icon={<MdOutlineAttachMoney />}
              money={convertMoneyBalance}
              colorMoney={colorMoney}
            />
          </section>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded-md duration-500 font-bold ml-4 mb-6"
            >
              Adicionar
            </button>
            <button
              onClick={() => setConfirm(true)}
              className="text-white bg-red-700 hover:bg-red-600 w-32 p-2 border-none rounded-md duration-500 font-bold ml-4 mb-6"
            >
              Limpar tudo
            </button>
            {confirm && (
              <ConfirModal
                title="Deletar todos os itens"
                message="Tem certeza de que deseja excluir todos os itens?"
                onConfirm={clearItems}
                onCancel={() => setConfirm(false)}
                onCancelX={() => setConfirm(false)}
              />
            )}
          </div>
          <div>
            {showModal && (
              <section className=" fixed inset-0 h-screen w-full flex items-center justify-center z-30 bg-[#0000007F]">
                <AnimModal>
                  <div
                    className={`${
                      theme === 'dark'
                        ? 'shadow-xl bg-neutral-900 text-white'
                        : 'shadow-md bg-white'
                    } rounded-xl pt-4 px-4`}
                  >
                    <div className="flex justify-end">
                      <FaTimes
                        onClick={() => setShowModal(false)}
                        className=" cursor-pointer text-2xl"
                      />
                    </div>
                    <div className="w-[340px] sm:w-480 h-80 rounded-xl relative flex items-center justify-center flex-col text-center pt-4">
                      <div>
                        <Input
                          label="description"
                          onInputChange={handleDescription}
                          type="text"
                          inputDashboard={true}
                          labelDashboard={true}
                        />
                        <Input
                          label="value"
                          onInputChange={handleValue}
                          type="number"
                          inputDashboard={true}
                          labelDashboard={true}
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
                          className="text-white bg-green-700 hover:bg-green-600 w-32 p-2 border-none rounded-md duration-500 font-bold mt-6 sm:ml-4 sm:mt-0"
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimModal>
              </section>
            )}
          </div>
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
    </div>
  );
}
