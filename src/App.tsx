import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import IconMeseroBot from "./assets/icons/meserobot_icon.png"
import ButtonMenu from './component/ButtonMenu/ButtonMenu';
import ButtonClose from './component/ButtonClose/ButtonClose';

const linkList: Array<{ title: String, path: string }> = [
  {
    title: 'item 1',
    path: '/item1'
  },
  {
    title: 'item 2',
    path: '/item2'
  }, {
    title: 'item 3',
    path: '/item3'
  }, {
    title: 'item 4',
    path: '/item4'
  },
]

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="lg:hidden w-full flex justify-end p-4">
        <ButtonMenu show={show} setShow={setShow} />
      </div>
      <div className="flex container text-white">
        <div
          id="mega-menu-full-cta"
          className={
            show
              ? "absolute top-0 block lg:hidden bg-gray-800 h-screen h-full w-full p-4"
              : "lg:hidden p-4"
            }
            >
          <ButtonClose setShow={setShow} />
          <Navbar linkList={linkList} />
        </div>
        <div
          id="mega-menu-full-cta"
          className={"hidden lg:block bg-gray-800 h-screen w-1/6"}
          >
 
          <div className="flex h-24 justify-center aligns-center my-4">
            <img src={IconMeseroBot} alt="icon in home" />
          </div>
          <Navbar linkList={linkList} />
        </div>
        <div className="h-screen h-full w-5/6">
        <h1 className='text-black'>Bienvenido a MeseroBot</h1>
        </div>
      </div>
    </>
  );
}

export default App;
