import Image from "next/image";

export default function HeroSection(){
    return(
        <div>
            <header className="h-[470px] w-full grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
                <div className="pl-[50px] w-[91%]">
                    <h1 className="text-blue-900 font-bold text-5xl mt-[1.5em] sm:mt-[3em] mb-[10px]">The Educators</h1>
                    <p className="text-1xl text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel eaque possimus neque culpa quo, aut labore maxime tenetur doloribus recusandae! Laboriosam mollitia aperiam impedit unde earum fugit dignissimos sit?</p>
                    <p className="text-blue-900 font-bold cursor-pointer">Learn More</p>
                    <button className="text-white bg-blue-900 text-2xl p-[5px] pl-[10px] pr-[10px] rounded-md ml-auto mt-[10px] hover:bg-blue-800 hover:shadow-xl transition duration-200 active:scale-95">Register Now</button>
                </div>
                <div className="relative flex items-center justify-center w-full hidden lg:flex">
                    <div className="absolute h-[250px] w-[250px] border-[20px] border-blue-900 transform rotate-45 ml-[10em] mt-[3em] mr-[5em]"></div>        
                    <div className="absolute h-[250px] w-[250px] border-[20px] border-blue-900 transform rotate-45 ml-[15em] mt-[3em] mr-[5em]"></div>        
                    <Image 
                        src="/images/image5.png"
                        alt="image"
                        height={300}
                        width={300}
                        className="absolute mr-[7em]"
                    />
                </div>
            </header>
        </div>
    );
}