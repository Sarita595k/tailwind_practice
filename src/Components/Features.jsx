// 3. Features Section
// Title: “Why Choose Us?” (centered)
// Grid layout (3 or 4 columns on desktop, 1 column on mobile).
// Each card:
// Icon (emoji or SVG, inside a circle bg-fuchsia-100 text-fuchsia-600)
// Title (text-lg font-semibold)
// Description (2–3 lines, text-gray-600)

import { Card } from "./Card"

// Add hover animation (hover:shadow-xl hover:-translate-y-1 transition).
export const Features = () => {
    return (
        <div className="my-9">
            <h1 className="main-heading">why choose us?</h1>
            <div className="flex flex-col md:flex-row m-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}