import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {faBook} from "@fortawesome/free-solid-svg-icons";

export default function MainSection(){
    return(
        <div>
            <main className="flex flex-wrap lg:flex-row sm:flex-wrap gap-1 items-center justify-center mb-[50px] mt-[50px]">
                <div className="flex flex-col items-center justify-center bg-white w-[90%] sm:w-1/2 pt-[30px] rounded-md shadow-lg lg:mr-[20px] cursor-pointer hover:border-b-[5px] hover:border-green-500 lg:w-[30%]">
                    <FontAwesomeIcon icon={faLightbulb} className='h-[80px] w-[30%] text-blue-900'/>
                    <div className='w-full p-[30px] text-justify'>
                        <h1 className='text-2xl font-bold text-center mb-[10px] text-blue-900'>Best Industry Leaders</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore temporibus repudiandae quas non illo maiores, culpa, dolor nobis iste inventore debitis maxime excepturi error! Labore inventore asperiores numquam rem.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[90%] sm:w-1/2 pt-[30px] rounded-md shadow-lg lg:mr-[20px] cursor-pointer lg:mt-[-150px] bg-white hover:border-b-[5px] hover:border-orange-500 lg:w-[30%] mt-[50px]">
                    <FontAwesomeIcon icon={faUserGraduate} className='h-[80px] w-[30%] text-blue-900'/>
                    <div className='w-full p-[30px] text-justify'>
                        <h1 className='text-2xl font-bold text-center mb-[10px] text-blue-900'>Learn Course Online</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore temporibus repudiandae quas non illo maiores, culpa, dolor nobis iste inventore debitis maxime excepturi error! Labore inventore asperiores numquam rem.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:mt-0 bg-white w-[90%] sm:w-1/2 pt-[30px] rounded-md shadow-lg cursor-pointer hover:border-b-[5px] hover:border-blue-500 lg:w-[30%] mt-[50px]">
                    <FontAwesomeIcon icon={faBook} className='h-[80px] w-[30%] text-blue-900'/>
                    <div className='w-full p-[30px] text-justify'>
                        <h1 className='text-2xl font-bold text-center mb-[10px] text-blue-900'>Book Library & Store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore temporibus repudiandae quas non illo maiores, culpa, dolor nobis iste inventore debitis maxime excepturi error! Labore inventore asperiores numquam rem.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}