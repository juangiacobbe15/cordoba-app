import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <section className="sticky bg-background flex justify-between text-lg p-3 items-center flex-row">
            <p className="cursor-pointer font-semibold">Cordoba App</p>

            <ul className="flex flex-row">
                <Link to='' className="cursor-pointer mr-2">Home</Link>
                <Link to='' className="cursor-pointer mr-2">Link</Link>
            </ul>
        </section>
    );
}
