
"use client"
import React, { useState } from 'react';
import BtnNav from '../comman/BtnNav/BtnNav';

function Talk() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "This field is required.";
        if (!formData.email.trim()) {
            newErrors.email = "This field is required.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.message.trim()) newErrors.message = "This field is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form Data:", formData);
            setFormData({ fullName: '', email: '', message: '' });
        }
    };

    return (
        <section className='bg-[#26262c] text-white lg:py-32 py-12 px-4'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:items-start items-center'>
                <div>
                    <h3 className='text-2xl lg:text-5xl lg:leading-16 font-semibold mb-4'>
                        Ready to Take Your Internet Marketing to the Next Level?
                    </h3>
                    <p className='mb-4 tracking-wide lg:text-[20px] text-[#ffffff] font-semibold'>
                        Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et nunc justo.
                    </p>
                    <p className='tracking-wide lg:text-[20px] text-[#f4f4f5]'>
                        Risus tincidunt in laoreet risus dignissim montes, velit egestas eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat amet, adipiscing purus elementum risus, vitae euismod leo amet eget quam enim blandit diam quis diam proin enim suspendisse massa.
                    </p>
                </div>

                <div className='md:px-10 md:p-0 p-5 px-5 md:border-l md:border-t-0 border-t border-gray-700'>
                    <h4 className='text-2xl lg:text-5xl lg:leading-16 font-semibold mb-4'>Let’s Talk</h4>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='text'
                                name='fullName'
                                placeholder='Full name'
                                className='w-full p-3 bg-white text-black focus:outline-none'
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName}</p>}
                        </div>

                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email address'
                                className='w-full p-3 bg-white text-black focus:outline-none'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                name='message'
                                placeholder='Your message'
                                className='w-full p-3 bg-white text-black focus:outline-none'
                                rows='4'
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                        </div>

                        <div>
                            <div onClick={handleSubmit} >
                                <BtnNav btn={'Get a Quote'} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Talk;