import React, { useState } from 'react';
import { Icon } from './Icon';

interface ButtonProps {
  bgColor?: string,
  hover?: string,
  active: string,
  size?: 'sm' | 'md' | 'lg',
  isIcon?: boolean,
  isOutline?: boolean,
}

export const Button = ({ bgColor, size = 'sm', isIcon = false, isOutline = false, hover, active }: ButtonProps) => {
  // To change icon color for outline button
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <button className={`${(size === 'sm' ? 'px-3 py-1' : size === 'md' ? 'px-5 py-2' : 'px-7 py-3')} rounded-md ${isOutline ? `text-red-500 border border-solid border-red-500 ${hover} ${active} hover:text-white-default active:bg-red-600 font-medium px-8 py-2 rounded-lg focus:outline-none ease-linear` : `${bgColor} ${hover} ${active}`} ml-2 mt-2 inline-flex justify-center text-sm font-medium focus:outline-none`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {isIcon ? <Icon color={isHover ? 'white' : bgColor} /> : null}
        Button
      </button>
    </>
  );
};
