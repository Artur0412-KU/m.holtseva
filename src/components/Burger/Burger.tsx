import BurgerImg from '../../assets/burger.svg'
import Close from '../../assets/close.svg'

export default function Burger() {
  return (
    <div className="drawer drawer-end hidden [@media(max-width:1024px)]:flex [@media(max-width:1024px)]:justify-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content cursor-pointer">

          <label htmlFor="my-drawer-4" className='flex justify-end'>
            <img src={BurgerImg} className='cursor-pointer'/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu text-base-content min-h-full w-80 p-[35px] bg-[#FFE0CE] flex items-center gap-[30px]">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay flex justify-end w-full">
               <img src={Close} className='cursor-pointer'/>
            </label>
            <li>
                <a href=''>Про мене</a>
            </li>
            <li>
                <a href=''>Курси</a>
            </li>
            <li>
                <a href=''>Сертифікати</a>
            </li>
            <li>
                <a href=''>Відгуки</a>
            </li>
            <li>
                <a href=''>Зв’язатися</a>
            </li>
          </ul>
        </div>
    </div> 
  )
}
