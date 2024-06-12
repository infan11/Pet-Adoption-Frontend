import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import AxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const Search = () => {
    const axiosPublic = AxiosPublic();
    const [data, setData] = useState([]);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axiosPublic.get("/addPet")
            .then(res => {
                setData(res.data);
                setPets(res.data);
            })
            .catch(error => console.log(error));
    }, [axiosPublic]);

    const filter = (event) => {
        const query = event.target.value.toLowerCase();
        setPets(data.filter(pet => pet.category.toLowerCase().includes(query)));
    };

    return (
        <div className="max-w-7xl  mx-auto px-10 min-h-screen mt-4">
            <div className="flex relative">
                <input 
                    onChange={filter}
                    type="text" 
                    placeholder="Search Your Pet" 
                    className="w-full border-white border-2 p-3 px-14 text-white font-bold rounded-full bg-transparent mb-8 fromDivNavD" 
                />
                <div className="absolute mt-4  text-xl flex items-center pl-4">
                    <IoSearch className="text-white" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-7 mt-5 min-h-screen">
                <div className="grid md:grid-cols-3 gap-5">
                    {pets.length > 0 ? (
                        pets.map((petAdd) => (
                            <div key={petAdd._id} className="card card-compact w-80 mx-auto mt-1 cardA">
                                <figure><img src={petAdd.photo} className="w-full h-60 fromDivNavM" alt={petAdd.name} /></figure>
                                <div className="card-body">
                                    <h2 className="font-extrabold text-2xl font-mono text-white">{petAdd.name}</h2>
                                    <p className="text-xl font-bold text-white">{petAdd.category}</p>
                                    <p className="text-[16px] text-white">Age: {petAdd.age}</p>
                                    <p className="text-xl flex items-center gap-2 text-white"><GoLocation />{petAdd.location}</p>
                                    <div className="card-actions">
                                        <Link className="btn fromDivNavM w-full rounded-full px-11 font-bold text-white" to={`/details/${petAdd._id}`}>
                                            <button className="">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white font-bold text-center mt-5">No pets available for adoption.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
