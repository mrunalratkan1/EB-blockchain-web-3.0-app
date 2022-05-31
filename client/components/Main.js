import React from 'react'
import Image from 'next/image'
import { useContext,useEffect, useState } from 'react'
import a from '../assets/logo.png'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import { TransactionContext } from '../context/TransactionContext'
import { useRouter } from 'next/router'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14 padding-20px margin-20px`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4 padding-20px margin-20px`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl margin-20px`,
  transferPropContainer: `bg-[#140152] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between padding-20px margin-20px`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#1367b0] hover:bg-[#276296] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#1367b0] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#e0d8e6',
    padding: 0,
    border: 'none',
  }
}


const Main = () => {

  const { formData, handleChange, sendTransaction } =
  useContext(TransactionContext)

  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    if (!addressTo || !amount) 
      return

    sendTransaction()
  }



  return (
    <div>
      <div className={style.wrapper}>
      
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>First</div> 
          <div>   </div>
          
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e => handleChange(e, 'amount')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={a} alt='a' height={500} width={500} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
          
        </div>

        

       
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0x...'
            onChange={e => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
          Confirm
        </div>
      </div>
      
    <br>
    </br>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Second</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e => handleChange(e, 'amount')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={a} alt='a' height={500} width={500} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0x...'
            onChange={e => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
          Confirm
        </div>
      </div>



    </div>
    </div>
    

    

    
  )
}

export default Main