import Image from 'next/image'
import RegisterConsultationImg from "@/app/assets/images/register_for_consultation/register_for_consultation_hero_image.jpg";
import ExapinkBtn from '../ui/ExapinkBtn';


const GridCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className=' rounded-3xl'>
          <Image
            alt="หาหมอออนไลน์"
            src={RegisterConsultationImg}
            className='object-cover w-full h-full rounded-3xl'
          />
        </div>
        <div>
          <h3 className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            หาหมอออนไลน์
            <br className="hidden sm:block" />
            พร้อมส่งยาถึงหน้าบ้าน
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-6 leading-relaxed">
            4 ขั้นตอนง่ายๆ
            <br className="hidden sm:block" />
            1.สมัครสมาชิก — 2.ลงทะเบียน — 3.จองคิวหมอ — 4.รอรับยา
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <ExapinkBtn
              label="ปรึกษาแพทย์ทันที"
              classBtn="!w-full sm:!w-[280px] !py-3 !text-lg md:!text-xl"
              href="/"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default GridCard