import * as React from "react";
import { Menu } from "react-admin";

import BookIcon from "@mui/icons-material/Book";
import CastleIcon from "@mui/icons-material/Castle";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import SubMenu from "./SubMenu";

export const MainMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <SubMenu primaryText="Heroes III HOTA" leftIcon={<BookIcon />}>
      <Menu.Item
        to="/castle"
        primaryText="Castle"
        leftIcon={<CastleIcon />}
      />
      <Menu.Item
        to="/rampart"
        primaryText="Rampart"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/tower"
        primaryText="Tower"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/inferno"
        primaryText="Inferno"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/necropolis"
        primaryText="Necropolis"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/dungeon"
        primaryText="Dungeon"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/stronghold"
        primaryText="Stronghold"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/fortress"
        primaryText="Fortress"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/conflux"
        primaryText="Conflux"
        leftIcon={<PeopleIcon />}
      />
      <Menu.Item
        to="/cove"
        primaryText="Cove"
        leftIcon={<PeopleIcon />}
      />
    </SubMenu>
    {/* <Menu.Item
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    /> */}
  </Menu>
);
