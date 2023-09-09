import React from 'react';
import { useNavigate } from 'react-router-dom';


function NewsletterSection() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/blogs')
  }
  return (
    <div className='py-[5rem]'>
        <div className="py-[2.5rem] px-[3rem] rounded-[12px] md:max-w-[500px] max-w-[400px] m-[0_auto] bg-[#6C62E2] text-center">
          <div className="newsletter__title mb-[0.1rem] text-[#F3F1FE] md:text-[2.3rem] text-[1.6rem] font-bold">
            Join Newsletter
          </div>
          <div className="mb-[1.2rem] text-[#F3F1FE]">
            Get regular updates every week
          </div>
          <form className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-center gap-[1rem]" onSubmit={handleSubmit}>
            <input type="email" required placeholder="Enter your email" className='w-full max-w-[300px] h-[40px] pl-[1rem] bg-[#F3F1FE] text-black border-none rounded-[4px]' />
            <button type="submit" className='h-[45px] cursor-pointer p-[0_1.3rem] md:p-[0_1.7rem] capitalize text-[#3B447A] bg-[#F3F1FE] border-none rounded-[4px] transition-[all_0.3s_ease] md:text-[1rem] text-[14px]'>Join</button>
          </form>
        </div>
    </div>
  );
}

export default NewsletterSection;
