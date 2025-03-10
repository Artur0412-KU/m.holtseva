type CardProps = {
    image: string,
    title: string,
    link: () => void,
}

export default function Card({image, title, link}: CardProps) {
  return (
    <a onClick={link} className='bg-[#B39D90] transition w-full p-[18px] rounded-[20px] hover:scale-105' target='_blank'>
        <img src={image} alt=''/>
        <h1 className='text-[20px] text-white font-semibold mt-[20px]'>{title}</h1>
    </a>
  )
}
