import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColorPickerController = ({ hideController = false, selectedColor }) => {
    const [color, setColor] = useState('rgba(255,255,255,1)');

    const handleChange = (e) => {
        setColor(e);
        selectedColor(e);
    };

    return (
        <ColorPicker 
            value={color} 
            onChange={handleChange} 
            hideControls={hideController}
            hideEyeDrop 
            hideAdvancedSliders 
            hideColorGuide 
            hideInputType 
        />
    )
}

export default ColorPickerController
