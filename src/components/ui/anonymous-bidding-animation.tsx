"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { UserIcon } from "@heroicons/react/24/solid"

export function AnonymousBiddingAnimation() {
  const [currentStage, setCurrentStage] = useState(0)
  const [bids, setBids] = useState<{ id: number; amount: number; isWinner?: boolean }[]>([])
  
  // Animation stages
  useEffect(() => {
    const stages = [
      () => {
        // Stage 1: Show bidders appearing
        setBids([
          { id: 1, amount: 0 },
          { id: 2, amount: 0 },
          { id: 3, amount: 0 },
          { id: 4, amount: 0 },
        ])
      },
      () => {
        // Stage 2: Initial bids
        setBids([
          { id: 1, amount: 850000 },
          { id: 2, amount: 920000 },
          { id: 3, amount: 890000 },
          { id: 4, amount: 875000 },
        ])
      },
      () => {
        // Stage 3: Competitive bidding
        setBids([
          { id: 1, amount: 950000 },
          { id: 2, amount: 1020000 },
          { id: 3, amount: 980000 },
          { id: 4, amount: 1050000 },
        ])
      },
      () => {
        // Stage 4: Final bid with winner
        setBids([
          { id: 1, amount: 1100000 },
          { id: 2, amount: 1180000 },
          { id: 3, amount: 1150000 },
          { id: 4, amount: 1250000, isWinner: true },
        ])
      },
    ]

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        const nextStage = (prev + 1) % stages.length
        stages[nextStage]()
        return nextStage
      })
    }, 2000)

    // Initialize first stage
    stages[0]()

    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount: number) => {
    if (amount === 0) return "?"
    return `€${(amount / 1000000).toFixed(2)}M`
  }

  return (
    <div className="relative w-full">
      {/* LIVE indicator - positioned absolutely relative to parent card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute -top-2 right-0 flex items-center gap-1.5 z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-red-500"
        />
        <span className="text-xs font-semibold text-gray-400">LIVE</span>
      </motion.div>

      {/* Bidders Grid - adjusted spacing */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <AnimatePresence mode="wait">
          {bids.map((bid, index) => (
            <motion.div
              key={bid.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: bid.isWinner ? 1.02 : 1,
                y: 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              className={`relative flex flex-col items-center justify-center p-3 rounded-lg border ${
                bid.isWinner 
                  ? 'border-green-500/50 bg-green-500/10' 
                  : 'border-white/20 bg-white/5'
              } transition-all duration-300 min-h-[110px]`}
            >
              {/* Anonymous Bidder Icon - made smaller */}
              <div className={`relative mb-2 ${bid.isWinner ? 'animate-pulse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-gray-400">?</span>
                </div>
              </div>

              {/* Bidder Label */}
              <span className="text-[11px] text-gray-500 mb-1">
                Bieter {bid.id}
              </span>

              {/* Bid Amount */}
              <motion.div
                key={`${bid.id}-${bid.amount}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm font-bold ${
                  bid.isWinner ? 'text-green-400' : 'text-white'
                }`}
              >
                {formatCurrency(bid.amount)}
              </motion.div>

              {/* Winner Badge - adjusted position */}
              {bid.isWinner && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-1.5 -right-1.5 bg-green-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                >
                  Höchstgebot
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stage Indicator - positioned below grid */}
      <div className="mt-4 flex justify-center gap-1">
        {[0, 1, 2, 3].map((stage) => (
          <motion.div
            key={stage}
            animate={{
              width: stage === currentStage ? 20 : 6,
              backgroundColor: stage === currentStage ? '#fff' : '#6b7280',
            }}
            className="h-0.5 rounded-full transition-all duration-300"
          />
        ))}
      </div>
    </div>
  )
}