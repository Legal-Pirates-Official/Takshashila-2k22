import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ProSidebar collapsed={collapsed}>
      <SidebarHeader className="customSidebar" style={{ border: 0 }}>
        <Menu className="customSidebar">
          <MenuItem
            icon={
              collapsed ? (
                <MdSort
                  style={{ transform: "scaleY(-1) rotate(180deg)" }}
                  size={30}
                />
              ) : (
                <AiOutlineClose size={20} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
          ></MenuItem>
        </Menu>
      </SidebarHeader>
      <SidebarContent className="customSidebar">
        <Menu iconShape="circle" >
          <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/dayEvents">Day Events</Link>
          </MenuItem>
          <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/nightEvents">Night Events</Link>
          </MenuItem>
          <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ border: 0 }} className="customSidebar">
        <Menu iconShape="none">
          <MenuItem icon={<FaFacebook size={20} />}>Facebook</MenuItem>
          <MenuItem icon={<FaInstagram size={20} />}>Instagram</MenuItem>
          <MenuItem icon={<FaWhatsapp size={20} />}>WhatsApp</MenuItem>
          <MenuItem icon={<FaYoutube size={20} />}>YouTube</MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}
