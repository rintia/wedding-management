

import { useLoaderData } from "react-router-dom";
import Review from "./Review";


const Reviews = () => {
    const allData = useLoaderData();
    const reviews =[]
   allData.map(data => reviews.push(data.reviews[0], data.reviews[1]));
   console.log(reviews)
    
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-dark my-12 text-center font-semibold text-4xl">Couples loves us</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
            </div>
        </div>
    );
};

export default Reviews;