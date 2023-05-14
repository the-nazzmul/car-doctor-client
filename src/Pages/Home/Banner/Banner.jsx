import slide1 from './../../../assets/images/banner/1.jpg';
import slide2 from './../../../assets/images/banner/2.jpg';
import slide3 from './../../../assets/images/banner/3.jpg';
import slide4 from './../../../assets/images/banner/4.jpg';


const Banner = () => {
    const bannerOverlay = <>
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full w-1/2 rounded-xl">
            <div className='pl-32'>
                <h1 className='text-6xl font-bold text-white mb-4' >Affordable <br />
                    Price For Car <br />
                    Servicing</h1>
                <p className='text-white mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                    <button className="btn btn-error text-white">Error</button>
                    <button className="btn btn-outline btn-error">Error</button>
                </div>
            </div>
        </div>
    </>
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full rounded-xl object-cover" />
                {bannerOverlay}
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full rounded-xl object-cover" />
                {bannerOverlay}
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full rounded-xl object-cover" />
                {bannerOverlay}
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slide4} className="w-full rounded-xl object-cover" />
                {bannerOverlay}
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;