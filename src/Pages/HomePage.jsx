import React from "react";
import Header from "../Components/Header";
import Home_Banner from "../Components/Home_Banner";
import CategorySectionV1 from "../Components/CategorySectionV1";
import CustomerTrust from "../Components/CustomerTrust";
import SeperationLine from "../Components/SeperationLine";
import CuratedJewelry from "../Components/CuratedJewelry";
import Footer from "../Components/Footer";
import MobileFilterSortUI from "../Components/MobileFilterSortUI";


const HomePage = () => {
    return (
        <>
            <Header />
            <div className="pt-[101px] w-full">
                <Home_Banner />
                <CategorySectionV1 />
                <SeperationLine />
                <CustomerTrust />
                <CuratedJewelry />
                <Footer />
                <MobileFilterSortUI />
            </div>
        </>
    );
};

export default HomePage;
