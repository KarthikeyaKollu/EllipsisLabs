import { ContainerScroll } from "./ui/container-scroll-animation";
import codepad from '../assets/codepad.png'
import { TypewriterEffectSmoothDemo } from './Typing-demo'
export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden dark:bg-slate-950 bg-white  ">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white ">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Rust SDK
                            </span>
                        </h1>
                    </>
                }
            >
                <img
                    src={codepad}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />

            </ContainerScroll>
            <div><TypewriterEffectSmoothDemo /></div>


        </div>
    );
}
