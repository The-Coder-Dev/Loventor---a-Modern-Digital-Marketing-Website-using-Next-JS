import React from 'react'
import PageButton from '@/components/PageButton'

const Page = () => {
  return (
    <section className='bg-black h-screen w-full flex items-center justify-center'>
      <div className="mx-auto w-full max-w-7xl flex items-start justify-center ">
        <PageButton PageTitle={"About Loventor"} />
      </div>
    </section>
  )
}

export default Page