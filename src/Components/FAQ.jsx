

const FAQ = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-20">
            <h2 className="text-4xl text-dark mt-20 mb-4 font-semibold text-center">Frequently Asked Questions </h2>
            <div className="space-y-2">
            <div className="collapse collapse-arrow bg-base-200 text-dark">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    When are you opened?
                </div>
                <div className="collapse-content">
                    <p>We are open 24/7. You can reach us at any time?</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  text-dark">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Is it possible to cancel after order confirmation?
                </div>
                <div className="collapse-content">
                    <p>Unfortunately you can not cancel after confirmation.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  text-dark">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can we customize the wedding menu?
                </div>
                <div className="collapse-content">
                    <p>Of course. Your wish is our command.</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default FAQ;