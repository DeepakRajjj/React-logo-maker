import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import * as icons from 'lucide-react'; // Import all icons from lucide-react
import { iconList } from "@/constants/icons";

const IconList = ({ onSelectIcon, currentColor, currentIcon }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return null;
        }
        return <LucidIcon color={color} size={size} />;
    };

    return (
        <>
            <div onClick={() => setOpenDialog(true)} className="">
                <label htmlFor="">Icon</label>
                <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
                    <Icon name={currentIcon} color={currentColor} size={50} />
                </div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                    <button className="hidden">Open</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Select an Icon</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                                {iconList.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                                        onClick={() => {
                                            onSelectIcon(icon);
                                            setOpenDialog(false);
                                        }}
                                    >
                                        <Icon name={icon} color={'#000'} size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                        <DialogClose asChild>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                        </DialogClose>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default IconList;
