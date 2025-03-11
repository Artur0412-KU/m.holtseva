import Modal from '../Modal/Modal'

export default function Contact() {
  return (
    <div id='call' className='bg-[url(/src/assets/background/form.png)] bg-cover py-[62px] px-[194px] flex flex-col gap-[116px] items-center mb-[100px] rounded-[30px] [@media(max-width:1024px)]:px-[30px] [@media(max-width:1024px)]:bg-center [@media(max-width:1024px)]:py-[80px] [@media(max-width:1024px)]:bg-[url(/src/assets/background/form-mobile.png)] [@media(max-width:1024px)]:rounded-[0px]'>
      <h1 className='text-[36px] text-center text-[#FFF0E7] font-bold [@media(max-width:1024px)]:text-[24px]'>Заповніть форму, і я зв’яжуся з вами для узгодження деталей уроку.</h1>
      <button onClick={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} className="py-[15px] px-[64px] bg-[#FFF0E7] rounded-[10px] text-black text-[18px] transition hover:bg-[#dec5b6] hover:text-white [@media(max-width:1024px)]:px-[32px] [@media(max-width:1024px)]:text-[12px] ">Зв’язатися</button>
      <Modal/>
    </div>
  )
}
