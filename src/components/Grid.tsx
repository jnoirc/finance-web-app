'use client';
import { useContext } from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { DeleteItem, ItemType } from '@/types/type';
import deleteItem from '@/utils/functions/deleteItem';
import { ThemeContext } from '@/context/themeContext';

export default function Grid(props: DeleteItem) {
  const storedItems = localStorage.getItem('items');
  const items = storedItems ? JSON.parse(storedItems) : [];
  const { theme }: any = useContext(ThemeContext);

  return items.map((item: ItemType, index: number) => (
    <section
      className={`${
        theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white'
      } grid grid-cols-4 place-items-center shadow-2xl p-2 mt-4 pl-6 rounded-md`}
      key={index}
    >
      <div className="w-28  sm:mt-0 sm:w-52">
        <h2 className="font-bold">Descrição</h2>
        <span className="block mt-4 font-medium break-words">
          {item.description}
        </span>
      </div>
      <div>
        <h2 className="font-bold">Valor</h2>
        <span className="block mt-4 font-medium">{item.value}</span>
      </div>
      <div>
        <h2 className="font-bold">Tipo</h2>
        <span className="block mt-4">
          {item.type === 'revenue' ? (
            <BsFillArrowUpCircleFill className="text-2xl" />
          ) : (
            <BsFillArrowDownCircleFill className="text-2xl" />
          )}
        </span>
      </div>
      <div>
        <h2 className="font-bold">Excluir</h2>
        <span className="block mt-4">
          <AiFillDelete
            className="text-2xl cursor-pointer"
            onClick={() =>
              deleteItem(
                index,
                props.setMoneyRevenue,
                props.setMoneyExpense,
                props.setMoneyBalance,
                props.moneyRevenue,
                props.moneyExpense,
                props.moneyBalance
              )
            }
          />
        </span>
      </div>
    </section>
  ));
}
