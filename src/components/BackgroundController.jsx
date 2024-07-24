import React, { useState, useEffect, useContext } from 'react';
import { Slider } from "@/components/ui/slider"; // Ensure this is the correct import path
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorageContext'; // Correct import path

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem('value')) || {};
  const [Rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0);
  const [Padding, setPadding] = useState(storageValue?storageValue?.bgPadding:0);
  const [color, setColor] = useState(storageValue?storageValue?.bgColor:'#fff');
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: Rounded,
      bgPadding: Padding,
      bgColor: color
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [Rounded, Padding, color]);

  return (
    <div className="w-full px-4 py-2">
      <div className="py-2">
        <label className="p-2 flex justify-between items-center" htmlFor="">
          Rounded <span>{Rounded}px</span>
        </label>
        <Slider
          value={[Rounded]}  
          max={512}
          step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center" htmlFor="">
          Padding <span>{Padding}px</span>
        </label>
        <Slider
          value={[Padding]}
          max={100}
          step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>

      <div className="py-2">
        <label className='p-2 flex justify-between items-center' htmlFor="">
          Background Color
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
