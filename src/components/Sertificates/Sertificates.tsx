import Certificate1 from '../../assets/certificates/certificate1.png'
import Certificate2 from '../../assets/certificates/certificate2.png'

export default function Sertificates() {
  return (
    <div id='certificates' className='py-[100px] px-[83px] [@media(max-width:1024px)]:px-[30px]'>
        <h1 className='text-[36px] font-bold text-center text-[#968377] mb-[50px] [@media(max-width:1024px)]:text-[32px]'>Сертифікати</h1>

        <div className='flex items-center justify-center gap-[50px] [@media(max-width:1024px)]:flex-col'>
          <img src={Certificate1} className='transition w-[30%] [@media(max-width:1024px)]:w-full hover:scale-105'/>
          <img src={Certificate2} className='transition w-[30%] [@media(max-width:1024px)]:w-full hover:scale-105'/>
        </div>
    </div>
  )
}
