import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

import { Link } from 'react-router-dom';
import './styles.css';

const DropdownMenuDemo = () => {
  

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>

          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab
          </DropdownMenu.Item>
           
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;