import CtaButton from "./CtaButton";

type PropsWithClassName<T = {}> = { className?: string } & T

function CtaBanner ({className} : PropsWithClassName) {
    return (
        <section>
            <section>
        <div className="flex bg-Primary py-12 px-12"> 
           
            <div className="container flex">
                <div className="p-4 ">
                    <h1 className="text-center md:text-left text-6xl font-light text-white">
                        Get inspired, empowered and motivated.
                    </h1>
                </div>  
            </div>
            <div className="mt-4">    
            <a href="#" className="hidden md:block flex p-3 px-16 text-white border-2 border-white text-white rounded-full">
                    Be a member
                </a>
            </div>
            
        </div>
        <div className="container flex drop-shadow-lg p-16 rounded-lg bg-white">
            <div className="">
                <h1 className="text-4xl text-Primary font-light">
                    Invest in the next generation of techies.
                </h1>
            </div>
            <div className="">
                <a href="#" className="hidden md:block flex text-Primary p-3 px-16 border-2 border-Primary text-white rounded-full">
                    Be a partner
                </a>
            </div>
        </div>

    </section>
        </section>
    )
} 

export {CtaButton as default}
