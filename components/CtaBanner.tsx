import CtaButton from "./CtaButton";

type PropsWithClassName<T = {}> = { className?: string } & T

function CtaBanner ({className} : PropsWithClassName) {
    return (
        <section>
        <div className="flex bg-Primary py-12 px-36">
            <div className="container flex">
                <div className="p-4 mb-24">
                    <h1 className="text-6xl font-light text-white">
                        Get inspired, empowered and motivated.
                    </h1>
                </div>  
            </div>
            <CtaButton>Be a Member</CtaButton>
            <div className=" absolute container flex flex-row drop-shadow-lg p-16 rounded-lg mt-48 bg-white">
                <div className="container flex">
                    <h1 className="text-4xl text-Primary font-light">
                        Invest in the next generation of techies.
                    </h1>
                </div>
                <div className="flex">
                    <a href="#" className="hidden md:block text-Primary p-3 px-16 border-2 border-Primary text-white rounded-full">
                        Be a partner
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
} 
export {CtaBanner as default}
