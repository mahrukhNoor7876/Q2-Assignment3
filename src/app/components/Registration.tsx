export default function Registration(){
    return(
        <div className="mt-[50px] h-auto w-full bg-gray-100 grid grid-cols-1 lg:grid-cols-2 mb-[50px]">
            <div className="p-[50px]">
                <h1 className="text-1xl font-serif">Get Registered for the Bright Future</h1>
                <h1 className="text-5xl font-bold font-serif lg:mt-[1em]">Register Now</h1>
            </div>
            <div className="lg:p-[50px] pl-[20px] pr-[20px] lg:pl-0 lg-pr-0">
                <label htmlFor="name" className="text-[20px]">Full Name: </label>
                <input type="text" id="name" placeholder="Enter your name..." className="w-full h-[30px] mb-[20px] rounded-md p-[10px]"/>
                <label htmlFor="email" className="text-[20px]">Email: </label>
                <input type="email" id="email" placeholder="Enter your email.." className="w-full h-[30px] rounded-md p-[10px] mb-[20px]"/>
                <label htmlFor="tel" className="text-[20px]">Phone: </label>
                <input type="tel" id="tel" placeholder="Enter your cell no..." className="w-full h-[30px] rounded-md p-[10px] mb-[20px]"/>
                <label htmlFor="course" className="text-[20px]">Course: </label>
                <input type="text" id="course" placeholder="Enter your course name..." className="w-full h-[30px] rounded-md p-[10px] mb-[50px]"/>
                <button type="submit" className="float-right text-2xl bg-blue-900 p-[5px] mb-[50px] rounded-md text-white pl-[10px] pr-[10px] hover:bg-blue-800 hover:shadow-xl transition duration-200 active:scale-95">Submit</button>
            </div>
        </div>
    );
}