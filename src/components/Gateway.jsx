import React from 'react'

const Gateway = () => {
  return (
    <div className='h-[100vh] overflow-y-auto'>
        <div className='bg-[#EDF1FF] w-full md:w-[450px] flex flex-col mx-auto my-10 p-4 rounded-2xl text-sans'>
            <div className='pt-2'>
                <h1 className='text-[#031A6E] font-semibold text-2xl'>Invoice No:</h1>
                <h3 className='border-2 border-dashed border-primary p-2 my-2 rounded-xl'>Txn memo</h3>
                <h1 className='text-[#031A6E] font-semibold text-2xl'>Company:</h1>
                <h3 className='border-2 border-dashed border-primary p-2 my-2 rounded-xl'>Txn comp</h3>
            </div>
            <div className='pt-6'>
                <button className='rounded-3xl text-white bg-primary py-2 px-4 flex mx-auto border-2 hover:bg-transparent border-primary hover:text-primary'>Connect Wallet</button>
            </div>
            <div className='flex flex-col bg-white rounded-2xl mt-8'>
              <div className='flex mx-auto'>
                <p className='pt-4 pb-2'>Scan to transfer</p>
              </div>
                <div className='h-52 mx-auto flex pb-4'>
                  <img src="Images/qr.svg" alt="QR Code" />
                </div>
            </div>
            <div className='flex flex-col bg-white rounded-2xl my-8 pb-6'>
                <h4 className='p-5 pb-1 font-bold'>Total Amount</h4>
                <div className='flex whitespace-nowrap bg-[#f6f6f6] py-1 px-2 my-2 mx-4 rounded-lg overflow-x-auto'>
                  <p className='mx-1 text-sm'>0.5eth</p>
                </div>
                <div className='justify-end flex px-4'><em className='opacity-60'>=$100</em></div>
                <hr className='mx-4'/>
                <h4 className='p-5 pb-1 font-bold'>Receiving Address</h4>
                <div className='flex whitespace-nowrap bg-[#f6f6f6] py-1 px-2 my-2 mx-4 rounded-lg overflow-x-auto'>
                  <p className='mx-1 text-xs'>0xa9662631501c0c04D57de3a0d5e553280bD4C8D60xa9662631501c0c04D57d</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gateway