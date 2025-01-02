import Sidebar from "@/components/Sidebar";
import React from "react";

function page() {
  return (
    <>
      <Sidebar active={1} subactive={3} />
      <div className="w-full h-full bg-white m-3 rounded-md p-2 pt-4 border">
        <div className="flex flex-col justify-between">
          <h1 className="font-semibold text-xl mb-10">View Product</h1>
          <section className="border p-4 rounded-md">
            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  1. General Information
                </h3>
                <h1 className="text-2xl font-bold mb-2">Samosa</h1>
                <div className="font-semibold mb-4 flex items-center">
                  Product Code - <span className="font-medium">FB008501</span>
                  <div className="h-3 border-l border-gray-300 mx-4 w-[1px]" />
                  Bar Code - <span className="font-medium">FB008501</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs font-semibold">
                <div className="bg-gray-200 p-4 rounded-md">
                  Brand Name - Haldiram
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                  Category - CAT21
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                  Group Name - Swalpahara
                </div>
              </div>
            </div>
            {/* Sales Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">2. Sales</h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div className="bg-gray-200 p-4 rounded-md">
                  Standard Price - ₹2300
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                  Purchase Price - ₹1300
                </div>
              </div>
            </div>

            {/* Menu Management Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">
                3. Menu Management (Available for)
              </h3>
              <div className="flex flex-wrap gap-4 text-xs font-semibold">
                <div className="bg-gray-200 p-4 rounded-md min-w-36 text-center">Breakfast</div>
                <div className="bg-gray-200 p-4 rounded-md min-w-36 text-center">Lunch</div>
                <div className="bg-gray-200 p-4 rounded-md min-w-36 text-center">Snacks</div>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-2">
              <button className="bg-red-100 w-[15%] font-semibold text-xs text-red-600 px-6 py-3 rounded-md hover:bg-red-200">
                Back
              </button>
              <button className="bg-purple-100 w-[15%] font-semibold text-xs text-purple-600 px-6 py-3 rounded-md hover:bg-purple-200">
                Edit
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default page;
