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

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ProSidebar
      collapsed={collapsed}
    >
      <SidebarHeader style={{ border: 0 }}>
        <Menu>
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
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem hidden={collapsed}>Day Events</MenuItem>
          <MenuItem hidden={collapsed}>Night Events</MenuItem>
          <MenuItem hidden={collapsed}>About</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ border: 0 }}>
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
