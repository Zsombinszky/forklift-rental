import React from "react";

const ForkliftCard = ({ forklift }) => {
  return (
    <div className="border rounded-lg w-72 shadow-md overflow-hidden">
      <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
        {forklift.image ? (
          <img
            className="w-full h-full object-contain p-2"
            src={forklift.image}
            alt={forklift.name}
          />
        ) : (
          <span className="text-5xl">🚜</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{forklift.name}</h3>

        <div className="space-y-1 text-sm">
          <p className="flex justify-between">
            <span className="text-gray-500">Serial number :</span>
            <span className="font-medium">{forklift.serial}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Power :</span>
            <span className="font-medium">{forklift.power}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Weight :</span>
            <span className="font-medium">{forklift.weight}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Height :</span>
            <span className="font-medium">{forklift.height}</span>
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              forklift.status === "available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {forklift.status === "available" ? "Free" : "Taken"}
          </span>

          {forklift.status === "available" && (
            <button
              className="bg-[#1d411d] hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
              onClick={() => {}}
            >
              Rent
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForkliftCard;
