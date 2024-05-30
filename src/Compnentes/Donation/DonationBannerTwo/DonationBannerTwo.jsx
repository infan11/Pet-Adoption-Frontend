

const DonationBannerTwo = () => {
    return (
        <div>
        <div className="grid md:grid-cols-2  items-center  lg:px-36 p-8  fromDivNavM">
        <div>
                <h2 className="md:text-2xl lg:text-3xl mb-3 font-extrabold text-white">Together To Help The World Better!</h2>
                <p className="text-white font-bold mb-3">Please help us change lives around the world.</p>
            </div>
            <div >
                <button  className="btn lg:ml-80  w-80 bg-green-500 fromDivNavM text-white font-bold ">DONATION NOW ➡  </button>
            </div>
        </div>
        </div>
    );
};

export default DonationBannerTwo;