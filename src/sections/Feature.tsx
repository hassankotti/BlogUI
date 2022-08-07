import React from 'react'
import * as bg_feature from '../assets/images/bg_feature.png'

const Feature = () => {

    return (
        <section className="md:aspect-h-3 md:aspect-w-9 aspect-w-4 aspect-h-3  bg-heavy-metal-900 mt-6 relative px-4 container">
            <div className="bg-features bg-cover aspect-h-2 max-w-full  h-auto bg-center object-cover w-full [mask-image:linear-gradient(90deg,white,rgba(0,0,0,.23))] brightness-50">
            </div>
            <div className='md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16 flex flex-wrap items-center'>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                    <div className="max-w-5xl pb-6 md:pb-0 md:px-6 flex-col md:block  items-center  md:pt-0 pt-4">
                        <span className="border-spacing-2 text-white border-r-2 border-teal-500 pr-2 text-base font-medium uppercase">إستراتيجية</span>
                        <div>
                            <h1 role="heading" className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-white font-medium leading-6 lg:leading-10 text-right">ما هو مستقبل التجارة الاكترونية</h1>
                        </div>
                        <p className="my-3 break-words text-sm lg:text-xl xl:text-2xl text-white">
                            ترليون في عام 2014 إلى 4.5 في عام 2024 من المتوقع ا تريد إلى 1.5
                        </p>
                        <span className="mt-5 lg:mt-8 py-3 lg:py-4  font-normal text-white rounded-lg text-xs lg:text-sm xl:text-lg ">
                            بواسطة عبد الله علي
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature