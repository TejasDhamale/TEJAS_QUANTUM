import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

function Button({ text = 'View here', isDark = true }) {
  // #7235f4
  return (
    <>
      {
        isDark ? <button className={`cursor-pointer border-[1.6px] border-[#9160fe] bg-radial from-[#6423f3] fromt-20%  to-[#7235f4] text-white px-4.5 py-1.5 rounded-[10px] flex items-center  gap-x-2`}> <ExternalLink className='size-4 font-light text-white/50 ' />  <span className='text-sm'>{text}</span> </button>
          :
          <button className={`cursor-pointer hover:text-white border-[1.6px] border-[#242732] bg-[#15191f]  text-[#464a5a] px-4.5 py-1.5 rounded-[10px] flex items-center gap-x-2`}> <Github className='size-4 font-light' />  <span className='text-sm'>{text}</span> </button>
      }
    </>
  )
}

export default Button;