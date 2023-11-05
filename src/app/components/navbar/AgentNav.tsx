// 'use client'
// import AgentModal from '@/components/modals/AgentModal'
// import { useShowAccountModal } from '@/libs/store'
// import Image from 'next/image'
// import { Dispatch, FC, SetStateAction } from 'react'
// import { AiOutlineMenu } from 'react-icons/ai'
// import { FaUserCircle } from 'react-icons/fa'

// type AccountNavProps = {
//     currentAgent: any
// }

// const AgentNav: FC<AccountNavProps> = ({currentAgent}) => {
//   const { showAccountModal, setShowAccountModal } = useShowAccountModal()

//   return (
//     <div className="w-full flex items-center justify-between px-5">
//     <Image
//           src="/lg_logo.png"
//           alt="Logo"
//           width={100}
//           height={100}
//           className="select-none"      
//         />
//       <div onClick={setShowAccountModal} className="relative flex items-center bg-white rounded-full p-3 cursor-pointer select-none">
//       <FaUserCircle size={30} className="text-primaryBlue" />
//       <AiOutlineMenu size={30} />
//      <AgentModal currentAgent={currentAgent} />
  
//       </div>
//     </div>
// )
// }

// export default AgentNav