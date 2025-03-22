import React from "react";

const trustItems = [
    {
        icon: "/Images/Icons/exchange_icon2.png",
        title: "Exchange",
    },
    {
        icon: "/Images/Icons/purity_icon.png",
        title: "Purity Guarantee",
    },
    {
        icon: "/Images/Icons/trust_icon.png",
        title: "Trust",
    },
    {
        icon: "/Images/Icons/maintenance2.png",
        title: "Maintenance",
    },
];

function CustomerTrust() {
    return (
        <div className="text-center py-10 bg-white">
            <p className="text-gray-600 italic text-lg font-inter">
                ❂ Trust us to be part of your precious moments and to deliver jewellery that you'll cherish forever. ❂
            </p>
            <div className="flex justify-center gap-10 mt-6 flex-wrap">
                {trustItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                        <p className="mt-2 text-sm text-gray-700">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerTrust;
