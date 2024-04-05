import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { MovingBorderDemo } from './Button'
import { TypewriterEffectSmoothDemo } from './Typing-demo'
import logo from '../assets/logo.png'
export function LampDemo() {
  return (
    <> 
    <div className="bg-slate-950 hidden pl-10 pt-5 lg:flex justify-between">
    <img src={logo} width={250} height={100} />

    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pr-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
      <LampContainer>

        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
        Building the liquidity backbone of DeFi.


        </motion.h1>

        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-500 to-slate-700 py-4 bg-clip-text text-center text-md font-medium md:w-[60%] tracking-tight text-transparent md:text-2xl"
        >
       High throughput blockchains have enabled the creation of new financial primitives. Ellipsis Labs is building Phoenix, a decentralized limit order book on Solana that is fully on-chain, non-custodial, and crankless.




        </motion.p>

        <MovingBorderDemo />
      


      </LampContainer>


    </>
  );
}
