

export type SectionBgProps = {
    children: React.ReactNode

}

const SectionBg:React.FC<SectionBgProps> = ({ children }) => {

    return <>
        <section className="w-screen h-screen overflow-y-hidden overflow-x-hidden linear-gradient-bg-screen">

            {children}

        </section>
    </>
}

export default SectionBg;


