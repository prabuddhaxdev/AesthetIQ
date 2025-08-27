import React from 'react'
import ImageSelection from './_components/ImageSelection'

function CreateNew() {
  const onHandleInputChange=(value,fieldName)=>{

  }
  return (
    <div>
      <h2 className='font-bold text-3xl text-center'>Experience the Magic of AI Remodelling</h2>
      <p className='text-center pt-3 text-gray-500'>Transform any room with a click. Select a space, choose a style and watch as AI instantly imagines your environment</p>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10'>
        <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>

        {/* Form Input Selection */}
        <div>
          Room Type

          {/* Design Type */}

          {/* Optional Aditinal Reequirements */}

          {/* Button to generate Image  */}
        </div>
      </div>
    </div>
  )
}

export default CreateNew
