import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import Logo from '../image/finteam-one-logo.png'
import './Navbar.css'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;


const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='main-nav'>
    
      <div className="nav"  >
         <div className='logo_img' onClick={()=>navigate('/')}>
          <img src={Logo} alt="FinTeam One" style={{ height: '3rem', width: 'auto' }} />
        </div>
        <div className='nav_items' style={{overflow:'hidden'}}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end',width:'100%',overflow:'hidden' }}>
          <Menu.Item key="home"  onClick={()=>navigate('/')}>
            HOME
          </Menu.Item>
          <Menu.Item key="aboutus" onClick={()=>navigate('/about-us')}  >
            ABOUT US
          </Menu.Item>
          <Menu.Item key="services"  onClick={()=>navigate('/services')}>
        SERVICES
          </Menu.Item>
          <Menu.Item key="resources"  onClick={()=>navigate('/resources')}>
            RESOURCES
          </Menu.Item>
          <Menu.Item key="careers"  onClick={()=>navigate('/careers')}>
            CAREERS
          </Menu.Item>
          <Menu.Item key="contactus"  onClick={()=>navigate('/contact-us')} >
            CONTACT US
          </Menu.Item>
        </Menu>
        </div>
        <button className='mob_view' onClick={showDrawer}>
          <MenuOutlined />
        </button>
      </div>
      <Drawer
        title=""
        placement='right'
        width={200}
        onClose={onClose}
        open={open}
      >
        <Menu onClick={handleClick} selectedKeys={[current]} mode="vertical"    >
        <Menu.Item key="home" onClick={()=>navigate('/')}>
            HOME
          </Menu.Item>
          <Menu.Item key="aboutus" onClick={()=>navigate('/about-us')}  >
            ABOUT US
          </Menu.Item>
          <Menu.Item key="services"  onClick={()=>navigate('/services')}>
            SERVICES
          </Menu.Item>
          <Menu.Item key="resources"  onClick={()=>navigate('/resources')}>
            RESOURCES
          </Menu.Item>
          <Menu.Item key="careers"  onClick={()=>navigate('/careers')}>
            CAREERS
          </Menu.Item>
          <Menu.Item key="contactus" onClick={()=>navigate('/contact-us')} >
            CONTACT US
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
