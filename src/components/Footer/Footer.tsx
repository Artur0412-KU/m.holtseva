import Logo from '../../assets/logo.svg'
import Telegram from '../../assets/social-media/telegram_svgrepo.com.svg'
import Instagram from '../../assets/social-media/instagram_svgrepo.com.svg'

export default function Footer() {
  return (
    <div className='bg-[#FFE0CE] px-[64px] py-[41px] [@media(max-width:1024px)]:px-[32px] flex flex-row items-center justify-between [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:gap-[30px]'>
        <img src={Logo} className='w-[72px]'/>

        <ul className='flex gap-[96px] text-[16px] [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:gap-[30px] text-center'>
            <a href="#about" className='transition hover:text-zinc-900/45'>Про мене</a>
            <a href="#courses" className='transition hover:text-zinc-900/45'>Курси</a>
            <a href="certificates" className='transition hover:text-zinc-900/45'>Сертифікати</a>
            <a href="" className='transition hover:text-zinc-900/45'>Відгуки</a>
            <a href="" className='transition hover:text-zinc-900/45'>Зв’язатися</a>
        </ul> 

        <div className='flex gap-[15px]'>
            <a href='https://t.me/maria_holtseva' className='[@media(max-width:1024px)]:w-[30px]' target='_blank'>
                <img src={Telegram} alt=''/>
            </a>
            <a href='https://www.instagram.com/maria_eng_italiano?igsh=cmRiMmRodHJpMWo%3D&utm_source=qr' className='[@media(max-width:1024px)]:w-[30px]' target='_blank'>
                <img src={Instagram} alt=''/>
            </a>
        </div>
    </div>
  )
}
