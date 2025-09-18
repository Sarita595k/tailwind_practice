// Full screen height (h-screen flex items-center justify-center)
// Background: gradient (bg-gradient-to-r from-fuchsia-600 to-indigo-600)
// Centered:
// Big heading (text-6xl font-bold text-white)
// Subheading (text-xl text-gray-200 mt-4)
// Button group:
// Primary → Get Started (bright button with hover effect)
// Secondary → Learn More (outline button)

export const HeroSection = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-fuchsia-600 to-indigo-600 
        flex flex-col justify-center items-center text-center p-4
        ">
            <div>
                <h1 className="text-6xl font-bold text-white font-oswald">Welcome here</h1>
                <p className="text-xl text-gray-200 mt-4 font-oswald">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi voluptate est, voluptates debitis nobis mollitia nihil, vitae dicta veritatis, obcaecati necessitatibus. Officia, maiores atque dolore voluptatem nostrum ipsum, dolor soluta quod porro quos, iusto nulla optio dicta ullam deleniti.</p>
            </div>
            <div className="flex justify-around mt-6 w-full">
                <button className="button-design text-white bg-fuchsia-800 hover:bg-black transition-all duration-700">get started</button>
                <button className="button-design text-white hover:text-black transition-all duration-700">learn more</button>
            </div>
        </div>
    )
}