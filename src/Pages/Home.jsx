import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <div className="bg-[#313641] h-[50vh] w-full nepalDiv text-white" >
                <Navbar />
                <div className="poppins text-4xl m-auto mt-5">
                    <span>N</span>
                    <span>e</span>
                    <span>p</span>
                    <span>a</span>
                    <span>l</span>
                </div>
                <div className="poppins text-base mb-6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum.</div>
            </div>
        </>
    )
}

export default Home
