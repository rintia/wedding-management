import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';

const ContactUs = () => {
    return (
        <div className="border-t">
            <h1 className="text-4xl font-semibold text-center pt-4 text-dark my-12"> Contact Us </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto text-center mb-8 px-4">
                <div className='border-b md:border-none'>
                    <FaPhoneAlt className='text-dark mx-auto text-4xl mb-4'></FaPhoneAlt>
                    <h1 className="text-2xl font-semibold text-dark">By Phone</h1>
                    <p className="font-semibold text-sm">(Monday to Friday, 9:00 am to 7:00 pm)</p><br />
                    <p className='pb-4'>Gujrat, India
                        <br />Phone: 9574-5864-51
                        <br /> <br />International <br />
                        Phone: 472-6489-8746
                        </p>
                </div>
                <div className='border-b md:border-none pb-4'>
                <FaMailBulk className='text-dark mx-auto text-4xl mb-4'></FaMailBulk>
                    <h1 className="text-2xl font-semibold text-dark">By Mail</h1>
                    
                    <p>Just mail us your question, feedback or suggestions at our email.
                        <br /><br />Email: <br />wedding@knot.com
                        </p>
                </div>
                <div className='col-span-1 lg:col-span-1  md:col-span-2'>
                <BiChat className='text-dark mx-auto text-4xl mb-4 '></BiChat>
                    <h1 className="text-2xl font-semibold text-dark">Live Chat</h1>
                    
                    <p className='mb-2'>Chat with a member of our team</p>
                    <button className='btn border-dark border-2 rounded-none text-dark'> Start Chat</button>
                </div>

            </div>
           
        </div>
    );
};

export default ContactUs;