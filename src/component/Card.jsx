import React from "react";


const Card = (props) => {
  return (
   <div className="w-64 bg-white border rounded-xl shadow-sm p-4">
      <img
        src={props.objdata.img}
        alt=""
        className="w-full h-44 object-cover rounded-lg mb-3"
      />

      <p className="text-xs text-gray-400">Sponsored</p>
      <h2 className="text-lg font-semibold text-gray-800">{props.objdata.brand}</h2>
      <p className="text-sm text-gray-600">
        {props.objdata.name}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">{props.objdata. price}</span>
        <span className="text-sm line-through text-gray-400">{props.objdata.oldPrice}</span>
        <span className="text-sm text-green-600 font-semibold">{props.objdata. discount}</span>
      </div>

      <p className="mt-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-md inline-block">
      {props.objdata. tag}
      </p>
    </div>
  );
};

export default Card;
