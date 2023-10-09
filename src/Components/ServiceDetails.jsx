import { useLoaderData, useParams } from "react-router-dom";
import Review from "./Review";


const ServiceDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id == idInt);
    const { name, image, detail_images, service_details, price, reviews } = detail;
    return (
        <div className="mt-12 max-w-screen-xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl grid grid-cols-2 gap-2">
                    <div className="row-span-2"><img className="h-full" src={image} alt="" /></div>
                    <div><img className="h-full" src={detail_images[0]} alt="" /></div>
                    <div><img className="h-full" src={detail_images[1]} alt="" /></div>

                </div>
                <div className=" text-center my-auto space-y-4">
                    <h1 className=" font-semibold text-dark text-4xl">{name}</h1>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                    </div>
                    <p>{service_details}</p>
                    <p><span className="font-semibold">Price: </span>${price}</p>
                    <button className="btn border-none bg-dark text-light hover:bg-light hover:text-dark btn-primary">Place Order</button>
                </div>
            </div>
            <div>
                <h1 className="my-20 text-center text-dark text-4xl"> Sweet Reviews</h1>
                <div className="grid grid-cols-2 gap-8 mx-auto mb-12">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;