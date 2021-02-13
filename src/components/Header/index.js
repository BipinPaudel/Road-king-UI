import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Image, Button, Icon } from "semantic-ui-react";
import {LOGO} from '../../constants';

const Header = () => {
  return <Menu secondary pointing>
    <Image src={LOGO} width={90}/>
    <Menu.Item as={Link} to='/vehicles' style={{fontSize:24}}>Vehicle Tracker</Menu.Item>
  </Menu>
}

export default Header;