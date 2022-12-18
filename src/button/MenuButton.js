import React from "react";
import {
  Popover,
  Menu,
  Position,
  PeopleIcon,
  GeosearchIcon,
  LogOutIcon,
  Button,
} from "evergreen-ui";
import { Link } from "react-router-dom";
import './style/MenuButton.css'

const MenuButton = () => {
  return (
    <>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item icon={PeopleIcon}><Link to="/profile" className="profile">Profile</Link></Menu.Item>
              <Menu.Item icon={GeosearchIcon}><Link to="/explore" className="explore">Explore</Link></Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={LogOutIcon} intent="danger">
                <Link className="logout" to="/">Logout...</Link>
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginRight={16}>Menu</Button>
      </Popover>
    </>
  );
};

export default MenuButton;
