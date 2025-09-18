// 4. Testimonials Section
// Background: light gray (bg-gray-50)
// Title: “What Our Users Say” (centered)
// 3 cards side by side (carousel feel).
// Each card:
// Rounded white card with shadow
// User avatar (circle image w-16 h-16 rounded-full)
// Quote text (italic)

import { TestimonialCards } from "./TestimonialCards"

// User name + role
export const Testimonials = () => {
    return (
        <div className="bg-gray-50 p-5 mt-10">
            <h1 className="main-heading">what our users say</h1>
            <div>
                <TestimonialCards />
            </div>
        </div>
    )
}