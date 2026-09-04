
function StayTuned() {
    return (
        <>
            <div className='w-full flex justify-center items-center bg-[#F5F5F5] py-10'>
                <div className='text-center w-[90%]'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-[length:var(--fs-1)] font-bold mb-4'> <i className="bi bi-envelope mr-2"></i> Stay Tuned</h2>
                            <p className='text-gray-600'>Follow us for the latest updates and offers!</p>
                        </div>
                        <div >
                            <div className='flex gap-3 items-start justify-between'>
                                <div>
                                    <input className="border p-2 rounded min-w-56" type="email" placeholder='Enter Email Address' />
                                </div>
                                <div>
                                    <input className="border p-2 rounded min-w-56" type="number" placeholder='Enter Phone Number'/>
                                </div>
                                <button className='bg-black text-white rounded min-w-56 p-2 cursor-pointer hover:bg-[var(--salmon-pink)] font-semibold' type="submit">Subscribe</button>
                            </div>
                            <div className='flex gap-2 items-center mt-2 '>
                                <input className="mr-2" type='checkbox' name='subscription' id='subscription' />
                                <label htmlFor='subscription'>I agree to the terms and conditions</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StayTuned
