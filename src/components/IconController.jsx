import React, { useContext, useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider";
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorageContext';
import IconList from './IconList';

const IconController = () => {
    const storageValue = JSON.parse(localStorage.getItem('value')) || {};
    const [size, setSize] = useState(storageValue?.iconSize || 280);
    const [rotate, setRotate] = useState(storageValue?.iconRotate || 0);
    const [color, setColor] = useState(storageValue?.iconColor || '#fff');
    const [icon, setIcon] = useState(storageValue?.icon || 'Smile');
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: icon,
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotate, color, icon, setUpdateStorage]);

    return (
        <div className="">
            <IconList onSelectIcon={setIcon} currentColor={color} currentIcon={icon} />
            <div className="py-2">
                <label className='p-2 flex justify-between items-center' htmlFor="">
                    Size <span>{size}px</span>
                </label>
                <Slider
                    value={[size]}
                    max={512}
                    step={1}
                    onValueChange={(value) => setSize(value[0])}
                />
            </div>

            <div className="py-2">
                <label className='p-2 flex justify-between items-center' htmlFor="">
                    Rotate <span>{rotate}°</span>
                </label>
                <Slider
                    value={[rotate]}
                    max={360}
                    step={1}
                    onValueChange={(value) => setRotate(value[0])}
                />
            </div>

            <div className="py-2">
                <label className='p-2 flex justify-between items-center' htmlFor="">
                    Icon Color
                </label>
                <ColorPickerController
                    hideController={true}
                    selectedColor={(selectedColor) => setColor(selectedColor)}
                />
            </div>
        </div>
    );
}

export default IconController;
