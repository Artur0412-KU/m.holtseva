import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
    name: string,
    email: string,
    message: string,
}

export default function Modal() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
        `Привіт! Я ${data.name} \n ${data.message}`
    );

    window.location.href = `mailto:mari.goltseva@gmail.com?subject=${subject}&body=${body}`;
   };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#FFE0CE]">
            <form method="dialog">
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h2 className="py-2 font-semibold">Заповніть форму, і я зв’яжуся з вами для узгодження деталей уроку.</h2>

    
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-[8px]">
              <label className="form-control">
                <span className="label-text">Ім'я</span>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-[#FFE0CE]" {...register('name', {required: "Поле для вводу обов'язкове"})} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </label>

              <label className="form-control">
                <span className="label-text">Email</span>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-[#FFE0CE]" {...register('email', {required: "Поле для вводу обов'язкове"})}  />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </label>

              <label className="form-control">
                <span className="label-text">Повідомлення</span>
                <textarea placeholder="Your Message" className="textarea textarea-bordered w-full bg-[#FFE0CE]" rows={4} {...register('message', {required: "Поле для вводу обов'язкове"})}  />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </label>

              <div className="modal-action">
                <button type="submit" className="btn w-full bg-[#FFF0E7] rounded-[10px] hover:bg-[#dec5b6] hover:text-white">Надіслати</button>
              </div>
            </form>
          <div className="modal-action">
          </div>
        </div>
    </dialog>


  )
}
