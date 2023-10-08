
import PropTypes from 'prop-types';
const Review = ({ review }) => {
    const { customer_name, customer_image, review_title, review_description } = review;
    return (
        <div className="card bg-light  pt-8 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded-full mx-auto">
                    <img src={customer_image} />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <p>{customer_name}</p>
                <h2 className="card-title">{review_title}</h2>
                <p>{review_description}</p>

            </div>
        </div>
    );
};

export default Review;

Review.propTypes = {
    review: PropTypes.object,
}