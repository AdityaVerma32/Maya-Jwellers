export default function CuratedJewelry() {
    return (
      <section className="bg-white">
        {/* New Arrivals Section with Background */}
        <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/Images/bg_banner_image.jpg')" }}>
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <h2 className="text-xl font-semibold font-playfair-display">New Arrivals</h2>
            <p className="text-sm text-gray-200 text-center font-playfair-display">
              New Arrivals Dropping Daily, Monday through Friday.<br />
              Explore the Latest Launches Now!
            </p>
          </div>
        </div>
  
        {/* Overlapping Sections (Kids & Nosepins) */}
        <div className="relative flex justify-center gap-4 px-6 -mt-16 ">
          <div className="border-8 border-white relative w-1/3 bg-white rounded-lg overflow-hidden">
            <img src="/Images/nosepin.jpg" alt="Nosepins" className="w-full h-40 object-cover" />
            <p className="absolute bottom-2 left-4 text-white font-semibold font-inter px-2 py-1 rounded-md">Nosepins</p>
          </div>
          <div className="border-8 border-white relative w-1/3 bg-white rounded-lg overflow-hidden">
            <img src="/Images/Kids_icon.jpg" alt="Kids Jewellery" className="w-full h-40 object-cover" />
            <p className="absolute bottom-2 left-4 text-white font-semibold font-inter px-2 py-1 rounded-md">Kids Jewellery</p>
          </div>
        </div>
  
        {/* Curated Section */}
        <div className="text-center my-10">
          <h3 className="text-lg font-semibold text-gray-800 font-playfair-display">Curated For You</h3>
          <p className="text-gray-600 text-sm">Shop By Gender</p>
        </div>
  
        {/* Categories */}
        <div className="flex justify-center gap-4 md:px-6 mb-5">
          <div className="text-center w-1/4">
            <img src="/Images/sbg-women.jpg" alt="Women Jewellery" className="rounded-lg" />
            <p className="text-gray-700 font-medium font-playfair-display">Women Jewellery</p>
          </div>
          <div className="text-center w-1/4">
            <img src="/Images/sbg-men.jpg" alt="Men Jewellery" className="rounded-lg" />
            <p className="text-gray-700 font-medium font-playfair-display">Men Jewellery</p>
          </div>
          <div className="text-center w-1/4">
            <img src="/Images/sbg-kids.jpg" alt="Kids Jewellery" className="rounded-lg" />
            <p className="text-gray-700 font-medium font-playfair-display">Kids Jewellery</p>
          </div>
        </div>
      </section>
    );
  }
  