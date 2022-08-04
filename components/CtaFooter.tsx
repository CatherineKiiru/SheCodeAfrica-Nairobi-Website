import CtaButton from "./CtaButton";

type PropsWithClassName<T = {}> = { className?: string } & T

function CtaFooter ({className} : PropsWithClassName) {
    return (
        <section>
            <div className={`${className}`}>
                <div className="absolute container mx-auto h-96 pl-0 bg-#B70569">
                    <div className="" ></div>
                </div>
            </div>
        </section>
    )
} 

export {CtaButton as default}









/* TO BE DELETED AND TRANSFERRED TO TS FOLDER
In JS we group and pass data through objects. So in TypeScript, we represent
data through object types.


define the type of props, pass in a parameter then the function 
The function will have the classnames for styling with tailwind*/

/*Next, style the elements with tailwind in the order they appear in figma i.e.:

1. Create function for the button
2. Button - be a member
3. Rectangle 29
4. Text - Invest in the next generation of techies
5. Rectangle 30
6. Text - Get inspired sentence
7. Button - be a member

Common elements:
1. Defining type with propsWithClassName
2. Writing a function with className and PropsWithClassName
3. Styling the function with Tailwind

To create rectangle, define:
The container is the parent element
The rectangle is the child element
The text
the button





*/