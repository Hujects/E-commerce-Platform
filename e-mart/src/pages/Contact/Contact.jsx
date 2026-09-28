
import Footer from '../../components/footer/Footer';
import ExpandingPanels from '../../components/UIKIT/ExpandingPanles';
import TopHeader from './../../components/header/TopHeader';
import PrimaryButton from './../../components/UIKIT/PrimaryButton';
function Contact() {
    return (
        <div className='w-full max-w-[--max-width]'>
                <div>
                    <TopHeader />
                </div>
            <div  className='w-[90%] mx-auto'>
                
                <div className='grid grid-cols-4 mt-5 gap-5'>
                    <div className='rounded p-5 shadow'>
                        <div>
                            <i className="bi bi-geo-alt text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Our location</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 shadow'>
                        <div>
                            <i className="bi bi-telephone-fill text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Phone Number</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 shadow'>
                        <div>
                            <i className="bi bi-envelope-fill text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Email Address</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 shadow'>
                        <div>
                            <i className="bi bi-headset text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Live Chat</h2>
                            <p className='my-1 text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Chat with us for instant help </p>
                            <button className="bg-[var(--salmon-pink)] text-white font-semibold py-2 px-4 rounded-full hover:bg-[var(--davys-gray)]"> <i className="bi bi-chat"></i> Start Chat</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 tablet:grid-cols-1 xs:grid-cols-2 gap-5 mt-5'>
                    <div className='p-7 rounded relative shadow items-start justify-start'>
                        <img src="/contact_message.png" className="h-30 w-30 absolute right-0 top-2"/>
                    <p className='text-[var(--salmon-pink)] font-medium mb-1 mt-3'>Send Us a Message!</p>
                    <h2 className='text-[length:var(--fs-1)] font-bold mb-1'>We'd love to hear from you</h2>
                    <p className="text-[var(--sonic-silver)] text-[length:var(--fs-8)] w-80 mb-4">Fill out the form below and we'll get back to you as soon as possible.</p>
                    <form  action="">
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='grid grid-cols-1 my-4 '>
                                <label for="name" className="font-medium mb-1 text-[var(--davys-gray)]">Full Name:</label>
                                <input type="text" id='name' placeholder='Your Name' className="contact_box"/>
                            </div>
                            <div className='grid grid-cols-1 my-4 '>
                                <label for='email' className="font-medium mb-1 text-[var(--davys-gray)]">Email Address:</label>
                                <input type="email" name="email" id="email" placeholder='your@gmail.com' className="contact_box"/>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 my-4 '>
                            <label for="subject" className="font-medium mb-1 text-[var(--davys-gray)]">Subject:</label>
                            <select name="subject" id="subject" className="contact_box">
                                <option value="0">Select and option</option>
                                <option value="1">Order Status</option>
                                <option value="1">Returns & Actions</option>
                                <option value="1">Product Exchange</option>
                                <option value="1">Others</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-1 my-4 '>
                            <label for="message" className="font-medium mb-1 text-[var(--davys-gray)]">Message:</label>
                            <textarea className='contact_box' name="message" id="message" rows="7" placeholder='Write your message here.....'></textarea>
                        </div>
                        <div className='grid grid-cols-1 my-4'>
                            <PrimaryButton btnTxt={<i className="bi bi-send text-white font-semibold inline-flex items-center justify-center"><span className="ml-2">Send Message</span></i>} />
                        </div>
                    </form>
                </div>
                    <div>
                        <section className="w-full">
                            <div>
                                <img src="/contact_banner.png" alt="" className="w-full mb-2"/>
                            </div>
                            <div className="relative mx-auto h-[350px] w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg">
        
                                {/* Google Map */}
                                <iframe
                                title="Hujects Location"
                                className="absolute inset-0 h-full w-full border-0"
                                src="https://www.google.com/maps?q=Hujects,Bashundhara,Dhaka&output=embed"
                                loading="lazy"
                                allowFullScreen
                                />

                                {/* Location Card */}
                                <div className="absolute right-4 top-4 rounded-lg bg-white p-4 shadow-md">
          
                                    <div className="flex items-start justify-between">
                                        <div>
                                          <h3 className="text-lg font-semibold text-gray-800">
                                            Hujects
                                          </h3>

                                          <p className="text-sm text-gray-500">
                                            Bashundhara, Dhaka 1229
                                          </p>
                                    </div>

                                        {/* Directions icon */}
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <i class="bi bi-arrow-return-left h-6 w-6 text-2xl text-blue-600 hover:text-blue-800 transition-colors"></i>
                                        </button>
                                    </div>

                                    {/* Rating */}
                                    <div className="mt-2 flex items-center gap-2">
                                      <span className="text-sm font-medium text-gray-700">
                                        4.8
                                      </span>

                                      <div className="flex text-yellow-400">
                                        ★★★★★
                                      </div>

                                      <span className="text-sm text-gray-500">
                                        (124)
                                      </span>
                                    </div>

                                     {/* Link */}
                                    <button className="mt-2 text-sm font-medium text-blue-600 hover:underline">
                                      View larger map
                                    </button>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
                <div className='bg-[#FEF5F7] p-5 rounded my-7 shadow'>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='grid grid-cols-[48px_1fr] gap-5 border-r border-[#fee8ea]'>
                                <div>
                                    <i className="bi bi-headset text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-15 h-15 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                                </div>
                                <div className='mt-4'>
                                    <h2 className='font-medium text-[length:var(--fs-5)] mb-2'>Quick Support</h2>
                                    <p className="text-[var(--sonic-silver)] text-[length:var(--fs-8)]">Our Team is ready to help you with any questions or concerns.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-[48px_1fr] gap-5 border-r border-[#fee8ea]'>
                                <div>
                                    <i className="bi bi-shield-check text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-15 h-15 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                                </div>
                                <div className='mt-4'>
                                    <h2 className='font-medium text-[length:var(--fs-5)] mb-2'>Secure Shopping</h2>
                                    <p className="text-[var(--sonic-silver)] text-[length:var(--fs-8)]">Shop with confidence knowing your information is protected!</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-[48px_1fr] gap-5 border-r border-[#fee8ea]'>
                                <div>
                                    <i className="bi bi-truck-flatbed text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-15 h-15 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                                </div>
                                <div className='mt-4'>
                                    <h2 className='font-medium text-[length:var(--fs-5)] mb-2'>Fast & Reliable Delivery</h2>
                                    <p className="text-[var(--sonic-silver)] text-[length:var(--fs-8)]">Get your products delivered quickly and safely!</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-[48px_1fr] gap-5 '>
                                <div>
                                    <i className="bi bi-heart text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-15 h-15 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                                </div>
                                <div className='mt-4'>
                                    <h2 className='font-medium text-[length:var(--fs-5)] mb-2'>100% Satisfaction Guarantee</h2>
                                    <p className="text-[var(--sonic-silver)] text-[length:var(--fs-8)]">We're confident you'll love your purchase, or we'll make it right!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                    <ExpandingPanels/>
                    <Footer/>

        </div>
    )
}

export default Contact;
