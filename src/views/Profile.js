import React from "react";
import "./style/Menu.css";
import "../App.css";
import {
  Popover,
  Menu,
  Position,
  PeopleIcon,
  CircleArrowRightIcon,
  EditIcon,
  TrashIcon,
  Button,
} from "evergreen-ui";

const Profile = () => {
  return (
    <>
      <div className="menu">
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item icon={PeopleIcon}>Profile</Menu.Item>
                <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
                <Menu.Item icon={EditIcon} secondaryText="⌘R">
                  Rename...
                </Menu.Item>
              </Menu.Group>
              <Menu.Divider />
              <Menu.Group>
                <Menu.Item icon={TrashIcon} intent="danger">
                  LogOut...
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <Button marginRight={16}>Menu</Button>
        </Popover>
      </div>
      <div className="App">
        <header className="App-profile">
          <h3>Profile</h3>
        </header>
      </div>
    </>
  );
};

export default Profile;
