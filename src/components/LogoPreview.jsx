import React, { useState, useEffect, useContext } from 'react';
import * as icons from 'lucide-react'; // Import all icons from lucide-react
import { UpdateStorageContext } from '../context/UpdateStorageContext';
import html2canvas from 'html2canvas';

const LogoPreview = ({ downloadIcon }) => {
    const [storageValue, setStorageValue] = useState({});
    const { updateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value')) || {};
        console.log(storageData);
        setStorageValue(storageData);
    }, [updateStorage]);

    useEffect(() => {
        if (downloadIcon) {
            downloadPngLogo();
        }
    }, [downloadIcon]);

    const downloadPngLogo = () => {
        const downloadLogoDiv = document.getElementById('downloadLogoDiv');
        html2canvas(downloadLogoDiv, {
            backgroundColor: null
        }).then(canvas => {
            const pngImage = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngImage;
            downloadLink.download = 'Logo_X.png';
            downloadLink.click();
        }).catch(err => {
            console.error('Error generating the image', err);
        });
    };

    const Icon = ({ name, color, size, rotate }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return null;
        }
        return (
            <LucidIcon
                color={color}
                size={size}
                style={{
                    transform: `rotate(${rotate}deg)`
                }}
            />
        );
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div
                className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
                style={{
                    padding: storageValue?.bgPadding || 0
                }}
            >
                <div id='downloadLogoDiv'
                    className="h-full w-full flex items-center justify-center"
                    style={{
                        borderRadius: storageValue?.bgRounded || 0,
                        background: storageValue?.bgColor || '#ffffff',
                    }}
                >
                    <Icon
                        name={storageValue?.icon || 'Smile'}
                        color={storageValue?.iconColor || '#000000'}
                        size={storageValue?.iconSize || 24}
                        rotate={storageValue?.iconRotate || 0}
                    />
                </div>
            </div>
        </div>
    );
};

export default LogoPreview;
