"use client";

import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType';
import AdditionalReq from './_components/AdditionalReq';
import { Button } from '@/components/ui/button';

function CreateNew() {
  const [formData,setFormData] = useState([]);
  const onHandleInputChange=(value,fieldName)=>{
      setFormData(prev=>({
        ...prev,
        [fieldName] : value
      }))
      console.log(formData);
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">
        Experience the Magic of AI Remodelling
      </h2>
      <p className="text-center pt-3 text-gray-500">
        Transform any room with a click. Select a space, choose a style and
        watch as AI instantly imagines your environment
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />

        {/* Form Input Selection */}
        <div>
          {/* Room Type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          {/* Design Type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />

          {/* Optional Aditinal Requirements */}
          <AdditionalReq
            additionalRequirementInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />

          {/* Button to generate Image  */}
          <Button className="w-full mt-5">Generate</Button>

          <p className="text-sm text-gray-400 mb-40">
            NOTE:1 credit will be used to redesign your room
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew
