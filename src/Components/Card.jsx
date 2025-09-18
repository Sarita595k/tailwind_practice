// Each card:
// Icon (emoji or SVG, inside a circle bg-fuchsia-100 text-fuchsia-600)
// Title (text-lg font-semibold)
// Description (2–3 lines, text-gray-600)
// Add hover animation (hover:shadow-xl hover:-translate-y-1 transition).

export const Card = () => {
    return (
        <div className="shadow-md rounded-lg p-6 m-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-in-out">
            <svg className="text-fuchsia-600 bg-fuchsia-100 rounded-full size-10 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            <h1 className="text-lg font-semibold capitalize">title</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum sunt, eveniet vitae delectus in laborum harum expedita voluptatibus veritatis odio sequi commodi itaque placeat quam ab consectetur maiores perferendis?</p>
        </div>
    )
}