import React from 'react';
import Link from 'next/link';
import IconLogIn from './IconLogIn';
import IconBasket from './IconBasket';

interface ActivIconProps {
  isBlackLog: boolean;
  isBlackBask: boolean;
}

const ActivIcon: React.FC<ActivIconProps> = ({ isBlackLog, isBlackBask }) => { 
  return (
    <ul className="flex space-x-8 w-[100px]">
      <li className="flex justify-center">
        <Link href="/">
          <IconLogIn isBlack={isBlackLog} />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <IconBasket isBlack={isBlackBask} />
        </Link>
      </li>
    </ul>
  );
};

export default ActivIcon;
