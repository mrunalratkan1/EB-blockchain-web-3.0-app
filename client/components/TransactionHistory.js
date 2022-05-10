import React from 'react'
import Image from 'next/image'
import { useContext,useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import a from '../assets/a.png'
import b from '../assets/b.jpg'
import { TransactionContext } from '../context/TransactionContext'

const style = {
    wrapper: `p-4 w-screen flex justify-between items-left`,
    headerLogo: `flex w-1/4 items-left justify-start`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-left text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonsContainer: `flex w-1/4 justify-start items-center`,
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-left`,
    buttonIconContainer: `flex items-left justify-left w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-left justify-left text-[#4F90EA]`,
  }

const TransactionHistory = () => {
    const [selectedNav, setSelectedNav] = useState('swap')
    
    const { connectWallet, currentAccount } = useContext(TransactionContext)

    console.log(connectWallet,currentAccount)

    return (
      <div>
        <div className={style.wrapper}>
        <div className={style.headerLogo}>
           <br></br>
          
        </div>
        <div className={style.nav}>
         </div>
         <div
              onClick={() => setSelectedNav('swap')}
              className={`${style.navItem} ${
                selectedNav === 'swap' && style.activeNavItem
              }`}
            >
              Transaction History
            </div>
            <div
              onClick={() => setSelectedNav('swap')}
              className={`${style.navItem} ${
                selectedNav === 'swap' && style.activeNavItem
              }`}
            >
              Users
            </div>
         </div>
      </div>
        
    )
  }

export default TransactionHistory