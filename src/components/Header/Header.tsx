import Logo from '../../assets/logo.svg'
import Burger from '../Burger/Burger'

export default function Header() {
  return (
    <div className='bg-[#FFE0CE] px-[64px] [@media(max-width:1024px)]:px-[32px] flex flex-row items-center justify-around  [@media(max-width:1024px)]:justify-between'>
        <img src={Logo}/>

        <ul className='flex gap-[96px] [@media(max-width:1024px)]:hidden text-[16px]'>
            <a href="#about" className='transition hover:text-zinc-900/45'>Про мене</a>
            <a href="#courses" className='transition hover:text-zinc-900/45'>Курси</a>
            <a href="#certificates" className='transition hover:text-zinc-900/45'>Сертифікати</a>
            <a href="#reviews" className='transition hover:text-zinc-900/45'>Відгуки</a>
            <a href="#call" className='transition hover:text-zinc-900/45'>Зв’язатися</a>
        </ul> 
        <Burger/>
    </div>
        
  )
}
