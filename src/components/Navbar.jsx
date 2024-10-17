import { useState } from 'react';

const Navbar = () => {



  const [open1,setOpen1] = useState(false);
  const [open2,setOpen2] = useState(false);
  const [open3,setOpen3] = useState(false);
  const [open4,setOpen4] = useState(false);
  const [open5,setOpen5] = useState(false);


    return(
        <>
            <div className="h-[100px] px-3 py-2 rounded-lg mt-2 mx-2 bg-slate-500">
                <div className="flex items-center justify-around">
                    <div className='relative flex flex-col items-center' >
                        <p className='text-3xl text-white select-none cursor-pointer' onClick={() => setOpen1(!open1)}>Ali</p>
                        <div className={`${open1 ? "openAni" : "opacity-0"} absolute text-center bg-white select-none cursor-pointer mt-9 flex flex-col gap-3 rounded-lg p-3 w-[180px]`}>
                            <p>Hayal Kahvesi Çekim</p>
                            <p>Gaia Çekim</p>
                            <p>Kart Yedekleme</p>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center' >
                        <p className='text-3xl text-white select-none cursor-pointer' onClick={() => setOpen2(!open2)}>Köksal</p>
                        <div className={`${open2 ? "openAni" : "opacity-0"} absolute text-center bg-white select-none cursor-pointer mt-9 flex flex-col gap-3 rounded-lg p-3 w-[180px]`}>
                            <p>Cervos Reels</p>
                            <p>Symbola Edit</p>
                            <p>Fimi Reels</p>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center' >
                        <p className='text-3xl text-white select-none cursor-pointer' onClick={() => setOpen3(!open3)}>Elif</p>
                        <div className={`${open3 ? "openAni" : "opacity-0"} absolute text-center bg-white select-none cursor-pointer mt-9 flex flex-col gap-3 rounded-lg p-3 w-[180px]`}>
                            <p>Berkay Koç Reels</p>
                            <p>Gia Edit</p>
                            <p>Karacabey Edit</p>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center' >
                        <p className='text-3xl text-white select-none cursor-pointer' onClick={() => setOpen4(!open4)}>Eda</p>
                        <div className={`${open4 ? "openAni" : "opacity-0"} absolute text-center bg-white select-none cursor-pointer mt-9 flex flex-col gap-3 rounded-lg p-3 w-[180px]`}>
                            <p>Dönefis Tasarım</p>
                            <p>Karacabey Logo</p>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center' >
                        <p className='text-3xl text-white select-none cursor-pointer' onClick={() => setOpen5(!open5)}>Rauf</p>
                        <div className={`${open5 ? "openAni" : "opacity-0"} absolute text-center bg-white select-none cursor-pointer mt-9 flex flex-col gap-3 rounded-lg p-3 w-[180px]`}>
                            <p>Karacabey Edit</p>
                            <p>Berkay Koç Reels</p>
                            <p>Sunlife Reels</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
