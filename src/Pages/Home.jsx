import Navbar from "../components/Navbar"
import mountain from "../assets/Images/mountain.jpg"
import scene1 from "../assets/Images/scene1.jpg"
import video1 from "../assets/Videos/video1.mp4"
import lumbini from "../assets/Images/lumbini.jpg"
import swambhu from "../assets/Images/swambhu.jpg"
import swambhu2 from "../assets/Images/swambhu2.jpg"
import kumari from "../assets/Images/kumari.jpg"
const Home = () => {
    return (
        <>
            <div id="top" className="bg-[#313641] h-[60vh] w-full nepalDiv text-white" >
                <Navbar />
                <div className="text-bodoni text-4xl md:text-6xl m-auto  mt-5">
                    <span>N</span>
                    <span>E</span>
                    <span>P</span>
                    <span>A</span>
                    <span>L</span>
                </div>
                <div className="text-poppins text-base mb-6 mx-auto p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum.</div>
            </div >


            <div className="overflow-hidden">
                <img src={mountain} alt="mountain" className="w-full h-full object-contain scale-1 " loading="lazy" />
            </div>
            <div className=" text-bodoni h-[60vh] w-[calc(100vw-2rem)] md:text-5xl font-medium flex justify-center items-center text-2xl  ">
                <h4 className="p-2">Nepal is a landlocked country</h4>
            </div>


            <section className="flex flex-col lg:flex-row bg-[#f7f7f7]  md:flex-col">
                <aside className="lg:w-[48vw]  lg:h-[80vh]  md:h-[48vh] md:w-full: ">
                    <img src={scene1} alt="temple" className="w-full h-full object-cover " loading="lazy" />
                </aside>
                <aside className=" h-[48vh] lg:w-[48vw]  lg:h-[80vh] md:w-full flex items-center justify-center text-poppins p-10 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione distinctio mollitia exercitationem amet sed, incidunt quaerat quae nemo eligendi! Omnis!
                </aside>
            </section>

            <video src={video1} loop muted preload="none" autoPlay className="my-10 overflow-hidden" />

            <div className=" text-bodoni h-[70vh] w-[calc(100vw-2rem)] text-xl md:text-3xl font-medium flex justify-center items-center mx-auto my-16 lg:text-4xl ">
                <h4 className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe quis optio rerum tempore quibusdam esse inventore deleniti molestias blanditiis!</h4>
            </div>


            <section className="flex flex-col-reverse lg:flex-row bg-[#f7f7f7]  md:flex-col">
                <aside className=" h-[50vh] lg:w-[50vw]  lg:h-[80vh] md:w-full flex items-center justify-center text-poppins p-10 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione distinctio mollitia exercitationem amet sed, incidunt quaerat quae nemo eligendi! Omnis!
                </aside>
                <aside className="lg:w-[50vw]  lg:h-[80vh]  md:h-[48vh] md:w-full w-full my-4 lg:my-0 ">
                    <img src={lumbini} alt="lumbini" className="w-full h-full object-cover " loading="lazy" />
                </aside>
            </section>

            <section className="flex flex-col lg:flex-row bg-[#f7f7f7]  md:flex-col-reverse">
                <aside className="lg:w-[50vw]  lg:h-[80vh]  md:h-[48vh] md:w-full my-4 lg:my-0 ">
                    <img src={swambhu} alt="temple" className="w-full h-full object-cover " loading="lazy" />
                </aside>
                <aside className=" h-[48vh] lg:w-[50vw]  lg:h-[80vh] md:w-full flex items-center justify-center  p-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione distinctio mollitia exercitationem amet sed, incidunt quaerat quae nemo eligendi! Omnis!
                </aside>
            </section>

            <section className="flex flex-col-reverse lg:flex-row bg-[#f7f7f7]  md:flex-col">
                <aside className=" h-[50vh] lg:w-[50vw]  lg:h-[80vh] md:w-full flex items-center justify-center text-poppins p-10 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione distinctio mollitia exercitationem amet sed, incidunt quaerat quae nemo eligendi! Omnis!
                </aside>
                <aside className="lg:w-[50vw]  lg:h-[80vh]  md:h-[48vh] md:w-full w-full ">
                    <img src={kumari} alt="kumari" className="my-4 lg:my-0 w-full h-full object-cover " loading="lazy" />
                </aside>
            </section>


            <section className="flex flex-col  lg:flex-row bg-[#f7f7f7]  md:flex-col-reverse">
                <aside className="lg:w-[50vw]  lg:h-[80vh]  md:h-[48vh] md:w-full: ">
                    <img src={swambhu2} alt="temple" className="w-full my-4 lg:my-0 h-full object-cover " loading="lazy" />
                </aside>
                <aside className=" h-[48vh] lg:w-[50vw]  lg:h-[80vh] md:w-full flex items-center justify-center text-poppins p-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione distinctio mollitia exercitationem amet sed, incidunt quaerat quae nemo eligendi! Omnis!
                </aside>
            </section>

            <div className="overflow-hidden transition-transform  duration-1000 absolute">
                <img src="src/assets//Images/bkt.jpg" alt="Bhaktapur" className="w-full h-full object-contain scale-1 mt-4 translate-y-11 md:translate-y-20" loading="lazy" />
                <img onClick={() => { window.location = "#top" }} src="src\assets\Images\toTop.svg" alt="back to top" className="relative w-10 md:w-20 left-[50vw] bottom-4 md:bottom-11" />
            </div>


        </>
    )
}

export default Home
