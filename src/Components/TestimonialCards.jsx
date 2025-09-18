// Each card:
// Rounded white card with shadow
// User avatar (circle image w-16 h-16 rounded-full)
// Quote text (italic)
// User name + role

export const TestimonialCards = () => {
    const data = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "quotes": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus corrupti esse nesciunt animi quasi laudantium suscipit, praesentium quod veniam?",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }]
    return (
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide mt-10">
            {data.slice(0, 6).map((user, index) => {
                return <div key={index} className="bg-white shadow-lg rounded-lg p-4 min-w-sm">
                    <img className="rounded-full m-auto w-24 h-24" src={user.avatar} alt={user.first_name} />
                    <p className="text-center italic"><q>{user.quotes}</q></p>
                    <p className="font-bold mt-4">{user.first_name}</p>
                </div>
            })}
        </div>
    )
}