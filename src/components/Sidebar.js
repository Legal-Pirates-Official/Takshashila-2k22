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
        <Menu iconShape="circle">
          {/* <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/dayEvents">Day Events</Link>
          </MenuItem>
          <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/nightEvents">Night Events</Link>
          </MenuItem> */}
          <MenuItem className="my-2" hidden={collapsed}>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ border: 0 }} className="customSidebar">
        <Menu hidden={!collapsed} iconShape="none">
          <MenuItem
            icon={
              <a href="https://instagram.com/cittakshashila?igshid=YmMyMTA2M2Y=">
                <FaInstagram size={20} />
              </a>
            }
          ></MenuItem>
          <MenuItem
            icon={
              <a href="https://wa.me/message/6HAFB72GRMU7N1">
                <FaWhatsapp size={20} />
              </a>
            }
          ></MenuItem>
          <MenuItem
            icon={
              <a href="https://youtube.com/c/CITTakshashila">
                <FaYoutube size={20} />
              </a>
            }
          ></MenuItem>
          <MenuItem
            icon={
              <a href="https://m.facebook.com/CIT-Takshashila-106831860821647">
                <FaFacebook size={20} />
              </a>
            }
          ></MenuItem>
        </Menu>
        {!collapsed && (
          <div className="container my-5 d-flex flex-row w-100 justify-content-evenly">
            <a href="https://instagram.com/cittakshashila?igshid=YmMyMTA2M2Y=">
              <FaInstagram size={25} />
            </a>
            <a href="https://wa.me/message/6HAFB72GRMU7N1">
              <FaWhatsapp size={25} />
            </a>
            <a href="https://youtube.com/c/CITTakshashila">
              <FaYoutube size={25} />
            </a>
            <a href="https://m.facebook.com/CIT-Takshashila-106831860821647">
              <FaFacebook size={25} />
            </a>
          </div>
        )}
      </SidebarFooter>
    </ProSidebar>
  );
}
