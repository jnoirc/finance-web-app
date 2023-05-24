'use client';
import {
  useSignOut,
  useAuthState,
  useDeleteUser,
} from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ListType } from '@/types/type';
import { FaTimes, FaReadme } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { SiGoogleanalytics } from 'react-icons/si';
import { IoMdNotifications } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import Header from './Header';
import ConfirModal from './ConfirmModal';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [signOut, loading] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const [deleteUser] = useDeleteUser(auth);
  const route = useRouter();
  if (loading) {
    <p>Procesando...</p>;
  }
  const logout = () => {
    signOut()
      .then(() => {
        localStorage.removeItem('token');
        route.push('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (user) {
      deleteUser()
        .then(() => {
          route.push('/login');
          localStorage.removeItem('token');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <aside
        className={`${
          showSidebar ? 'left-0' : '-left-52 md:left-0'
        } fixed h-screen w-52 bg-white shadow-xl duration-500 z-20 overflow-y-auto`}
      >
        <button
          className="md:hidden absolute right-4 top-3 text-2xl"
          onClick={() => setShowSidebar(false)}
        >
          <FaTimes />
        </button>
        <div className="mt-10">
          <List icon={<RiDashboardFill />} title="Dashboard" />
        </div>
        <List icon={<SiGoogleanalytics />} title="Análise" />
        <div className="flex">
          <List icon={<IoMdNotifications />} title="Notificações" />
          <div className="bg-red-400 rounded-md ml-3 flex justify-center items-center w-10 h-5 mt-2.5 text-white">
            <span>7</span>
          </div>
        </div>
        <Link href='/readme'>
          <List icon={<FaReadme />} title="Sobre" />
        </Link>
        <List icon={<AiFillSetting />} title="Configurações" />
        <List
          onClick={handleDeleteUser}
          icon={<AiFillDelete />}
          title="Deletar conta"
        />
        <List
          onClick={() => setShowModal2(true)}
          icon={<BiLogOut />}
          title="Sair"
        />
      </aside>
      <Header onClick={() => setShowSidebar(!showSidebar)} />
      {showModal && (
        <ConfirModal
          title="Excluir conta"
          message="Depois de cancelar uma conta, ela é excluída permanentemente. Essa
        ação não pode ser desfeita."
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          onCancelX={() => setShowModal(false)}
        />
      )}
      {showModal2 && (
        <ConfirModal
          title="Sair"
          message="Tem certeza que quer mesmo sair?"
          onConfirm={logout}
          onCancel={() => setShowModal2(false)}
          onCancelX={() => setShowModal2(false)}
        />
      )}
    </>
  );
}

export const List = ({ title, icon, onClick }: ListType) => {
  return (
    <nav>
      <ul
        onClick={onClick}
        className="flex items-center mb-3.5 ml-4 cursor-pointer text-zinc-600 hover:bg-purple-600 hover:text-white p-2 rounded duration-500"
      >
        <span className="text-xl">{icon}</span>
        <li className="ml-2 font-medium">{title}</li>
      </ul>
    </nav>
  );
};
