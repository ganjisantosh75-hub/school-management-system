import hero from "../assets/image/hero.png";

function Hero() {
    return (
        <section
            id="home"
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="bg-black/50 w-full h-full flex items-center">

                <div className="max-w-7xl mx-auto w-full px-6">
                    <div className="max-w-xl text-white">


                        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                            Welcome to <br />
                            <span className="text-yellow-400">
                                Kamalam Public School
                            </span>
                        </h1>

                        <p className="text-xl mb-8">
                            Education • Culture • Spirituality
                        </p>

                        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:scale-105 transition duration-300">
                            Explore More
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;





