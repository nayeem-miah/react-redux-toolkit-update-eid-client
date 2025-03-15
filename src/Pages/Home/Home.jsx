import Banner from "../../Components/HomePage/Banner";
import CountdownTimer from "../../Components/HomePage/CountdownTimer";
import FAQ from "../../Components/HomePage/FAQ";
import RecentProduct from "../../Components/HomePage/RecentProduct";
import ReviewSection from "../../Components/HomePage/ReviewSection";
import Scene from "../../Components/HomePage/tree";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="my-10">
                <CountdownTimer />
            </div>
            <div className="my-10">
                <RecentProduct />
            </div>
            <div
                className="my-5"><FAQ />
            </div>
            <div
                className="my-5"><ReviewSection />
            </div>
            {/* <div style={{ height: '100vh' }}>
                <Scene />
            </div> */}

        </div>
    )
}
export default Home;

