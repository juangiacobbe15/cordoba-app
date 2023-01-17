import { ExploreSection, Footer, Home, Navbar, NewsGrid } from "../components";

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <NewsGrid />
            <ExploreSection />
            <Footer />
        </>
    );
}
