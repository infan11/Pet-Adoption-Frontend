
const SectionTitle = ({ heading , subHeading , imageHeading}) => {
    return (
        <div>
         <div className="justify-center items-center">
         <p className="text-xl  font-bold  text-center">{heading}</p>
            <p className="text-3xl  font-bold text-center text-black">{subHeading}</p>
            <img className="w-12 mx-auto mix-blend-darken hover:animate-spin" src={imageHeading} alt="" />
         </div>
         
        </div>
    );
};

export default SectionTitle;