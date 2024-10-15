import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSheetPlastic} from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import image1 from "/public/images/image1.png";
import image2 from '/public/images/image2.png';
import image3 from '/public/images/images3.png';
import image4 from '/public/images/image4.png';

export default function PopularCourse(){
    return(
        <div className="pt-[50px]">
            <h1 className="text-4xl font-bold text-center font-robot mb-[50px]">Popular Courses</h1>
            <div className="flex flex-wrap md:flex-wrap lg:flex-row sm:flex-wrap items-center justify-center lg:p-[20px] gap-10">
                <div className="border-b-[1px] border-black-200 hover:border-black cursor-pointer">
                    <div>
                        <Image 
                            src={image1}
                            alt="image1"
                            className='rounded-md'
                        />
                        <div className="m-[20px] mb-0">
                            <p className="text-blue-500">$59.00</p>
                            <h1 className="text-[17px] font-serif">How to Teach English Online...</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-8 m-[20px] mt-[10px] text-blue-500'>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faSheetPlastic} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Lessons</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faUserGraduate} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-black-200 hover:border-black cursor-pointer">
                    <div>
                        <Image 
                            src={image4}
                            alt="image1"
                            className='rounded-md'
                        />
                        <div className="m-[20px] mb-0">
                            <p className="text-blue-500">$59.00</p>
                            <h1 className="text-[17px] font-serif">How to Create In-Demand...</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-8 m-[20px] mt-[10px] text-blue-500'>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faSheetPlastic} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Lessons</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faUserGraduate} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-black-200 hover:border-black cursor-pointer">
                    <div>
                        <Image 
                            src={image3}
                            alt="image1"
                            className='rounded-md'
                        />
                        <div className="m-[20px] mb-0">
                            <p className="text-blue-500">$59.00</p>
                            <h1 className="text-[17px] font-serif">Instructional Design For...</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-8 m-[20px] mt-[10px] text-blue-500'>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faSheetPlastic} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Lessons</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faUserGraduate} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-black-200 hover:border-black cursor-pointer">
                    <div>
                        <Image 
                            src={image2}
                            alt="image1"
                            className='rounded-md'
                        />
                        <div className="m-[20px] mb-0">
                            <p className="text-blue-500">$59.00</p>
                            <h1 className="text-[17px] font-serif">Begin Teaching Online Full...</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-8 m-[20px] mt-[10px] text-blue-500'>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faSheetPlastic} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Lessons</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FontAwesomeIcon icon={faUserGraduate} className='h-[15px] w-[10%]' />
                                <p className='mt-[-5px]'>0 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}