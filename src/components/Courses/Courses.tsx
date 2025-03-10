import Card from '../Card/Card'
import En1 from '../../assets/cards/en.png'
import It1 from '../../assets/cards/it.png'
import En2 from '../../assets/cards/en2.png'
import It2 from '../../assets/cards/it2.png'
import Modal from '../Modal/Modal'

export default function Courses() {
  return (
    <div  id = 'courses' className='py-[70px] px-[28px] bg-[#FFF7F3] rounded-[30px] [@media(max-width:1024px)]:py-[52px] [@media(max-width:1024px)]:px-[34px] '>
        <h1 className='text-center text-[36px] font-bold text-[#968377] mb-[50px] [@media(max-width:1024px)]:text-[32px]'>Курси</h1>

        <div className='flex flex-row items-center justify-between gap-[20px] [@media(max-width:1024px)]:grid [@media(max-width:1024px)]:grid-cols-2 [@media(max-width:500px)]:flex [@media(max-width:500px)]:flex-col'>
            <Card link={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} title='Англійська для початківців' image={En1}/>
            <Card link={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} title='Італійська для початківців' image={It1}/>
            <Card link={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} title='Часи в англійській мові' image={En2}/>
            <Card link={()=> (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()} title='Часи в італійській мові' image={It2}/>
        </div>

        <Modal/>
    </div>
  )
}
