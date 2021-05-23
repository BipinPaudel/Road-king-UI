import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Menu, Image, Button, Icon } from "semantic-ui-react";
import {LOGO} from '../../constants';
import {GlobalContext} from "../../context/Provider";
import './index.css'
import {LOGOUT} from "../../constants/actions";

const Header = () => {

  const {authDispatch, authState: {auth: {errors,loginInfo}}} = useContext(GlobalContext);
  const history = useHistory();

  const onLogout = () => {
    authDispatch({type: LOGOUT})
    history.push('/auth/login')
  }

  return <Menu secondary pointing className={'vehicle__header'}>
    <Image src={LOGO} width={90}/>
    <Menu.Item as={Link} to='/vehicles' style={{fontSize:24}}>Vehicle Tracker</Menu.Item>
    {localStorage.token !== undefined && (
        <Link to={`#`} className="link vehicle__logout__button">
          <Button basic color='red' onClick={() => onLogout()}>
            Logout
          </Button>
        </Link>
    )}


  </Menu>
}

export default Header;