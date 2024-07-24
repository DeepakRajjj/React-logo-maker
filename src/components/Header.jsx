import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Header = ({ setDownloadIcon }) => {
  return (
    <>
      <div className="p-4 shadow-sm border flex justify-between items-center">
        <img src="/vite.svg" alt="" />
        <Button className='flex gap-2 items-center'
          onClick={() => setDownloadIcon(Date.now())}
        >
          <Download className='h-4 w-4' />Download
        </Button>
      </div>
    </>
  );
};

export default Header;
