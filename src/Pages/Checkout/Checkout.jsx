import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
    const { title,price,_id, img } = useLoaderData()
    const {user} = useContext(AuthContext)


    const handleBookingService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;

        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            price
        }
        fetch(`http://localhost:4000/bookings`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('hoise bro')
            }
        })

    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold">Book Service: {title} </h1>

            <div className="card-body">
                <form onSubmit={handleBookingService}>
                    <div className="grid grid-cols-2 gap-8 my-16">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" defaultValue={'$'+price} className="input input-bordered" required/>
                        </div>
                    </div>
                    <div className="my-6 flex justify-center">
                        <input type="submit" value="Confirm Order"  className="btn btn-block"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;