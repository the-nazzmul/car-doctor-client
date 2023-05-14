import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-16">Services</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
                {
                    services.map(service =>
                        <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;