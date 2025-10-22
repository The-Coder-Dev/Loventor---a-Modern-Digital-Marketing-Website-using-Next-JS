import React from 'react'

const PageButton = ({PageTitle}) => {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-b from-[#02123153] to-[#0e0f104a] border-[1px] backdrop-blur-2xl border-white/20 w-fit px-3 py-2 rounded-xl ">
            <div className="bg-secondary h-[6px] w-[6px] rounded-full "></div>
            <h1 className="text-secondary font-extralight">{PageTitle}</h1>
    </div>
  )
}

export default PageButton