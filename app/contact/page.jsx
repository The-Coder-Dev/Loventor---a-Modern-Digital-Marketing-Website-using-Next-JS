import PageButton from '@/components/PageButton'
import React from 'react'

const page = () => {
  return (
    <section className='bg-black h-screen w-full flex items-center justify-center'>
      <div className="mx-auto w-full max-w-7xl flex items-start justify-center ">
        <PageButton PageTitle={"Connect with us"} />
      </div>
    </section>
  )
}

export default page