// components/BackActions.tsx
'use client'

import { useRouter, usePathname } from 'next/navigation'

const BackActions: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="p-4">
      <h3
        onClick={handleBack} 
        className="cursor-pointer text-blue-500 hover:text-blue-600 text-2xl pt-20"
      >
        ←
      </h3>
    </div>
  )
}

export default BackActions 