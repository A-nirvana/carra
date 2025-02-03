import React from "react";

const CardContent = ({ imageSrc, heading, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt="Offer" className="w-full h-auto rounded-md" />
      <h4 className="text-lg mt-1 mb-1">{heading}</h4>
      <p className="text-xs text-gray-700">{description}</p>
    </div>
  );
};

const BycBestinOffers = () => {
  return (
    <div className="flex flex-col h-screen items-center py-8 bg-[#DFDFD9]">
      <h1 className="text-lg font-semibold mb-4">BYC Offers Best in Class</h1>

      <div className="flex w-full  mt-4 justify-between px-20 space-x-6">
        {/* Card 1 */}
        <div className="w-[23%] h-[34rem] bg-[#E5E7EB] border border-gray-300 rounded-2xl p-4 text-center shadow-md">
          <CardContent
            imageSrc="/assets/Rectangle 3388.png"
            heading="Professional Drivers"
            description={`Our drivers are police verified and follow SOPs.Safe and professional driving experiences.`}
          />
        </div>

        {/* Card 2 */}
        <div className="w-[23%] h-35 bg-[#E5E7EB] border border-gray-300 rounded-2xl p-4 text-center shadow-md">
          <CardContent
            imageSrc="/assets/Rectangle 3388.png"
            heading="Comfort & Hygiene"
            description="Large beds, hygienic bathrooms, and kitchens."
          />
        </div>

        {/* Card 3 */}
        <div className="w-[23%] h-35 bg-[#E5E7EB] border border-gray-300 rounded-2xl p-4 text-center shadow-md">
          <CardContent
            imageSrc="/assets/Rectangle 3388.png"
            heading="Safety Assurance"
            description="Regular maintenance for peace of mind."
          />
        </div>

        {/* Card 4 */}
        <div className="w-[23%] h-35 bg-[#E5E7EB] border border-gray-300 rounded-2xl p-4 text-center shadow-md">
          <CardContent
            imageSrc="/assets/Rectangle 3388.png"
            heading="24/7 Support"
            description="Round-the-clock assistance."
          />
        </div>
      </div>
    </div>
  );
};

export default BycBestinOffers;
