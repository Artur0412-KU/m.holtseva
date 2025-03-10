import Modal from "../Modal/Modal";

export default function Main() {
  return (
    <div className='bg-[url(/src/assets/background/main.png)] bg-cover py-[232px] flex flex-col items-center gap-[30px] [@media(max-width:1024px)]:py-[104px]  [@media(max-width:1024px)]:bg-center'>
        <h1 className='font-semibold text-[36px] [@media(max-width:1024px)]:text-[24px] text-white'>👋 Привіт, я Маша</h1>
        <h3 className='text-[24px] font-regular [@media(max-width:1024px)]:text-[16px] text-white'>Викладач англійської та італійської</h3>
        <a onClick={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} className="py-[15px] px-[64px] bg-[#FFF0E7] rounded-[10px] text-black text-[18px] transition hover:bg-[#dec5b6] hover:text-white [@media(max-width:1024px)]:px-[32px] [@media(max-width:1024px)]:text-[12px] ">
            Зв’язатися
        </a>
        <Modal/>
    </div>
  )
}
