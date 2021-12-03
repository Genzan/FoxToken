// Import external libraries
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  LoginOutlined,
} from '@ant-design/icons';

// Import Internal Components
import Login from './Login';
import isAuth from '../hooks/useAuth';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Navbar = ({ component }) => {

    // State Variables
    const history = useHistory();

    const [isHidden, setIsHidden] = useState(false);

    const isAuthenticated = isAuth();

    // Functions
    const handleModalLoginVisible = () => {
        setIsHidden(!isHidden);
    }
    
    const handleLogout = () => {
        sessionStorage.removeItem("idToken");
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
        window.location.href = '/';
    }

    return (
        <Layout>
            <Sider
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                }}
            >
                <Menu theme="dark" mode="inline" >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Welcome</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{
                marginLeft: 200,
                background: '#fff',
            }}>
                <Content style={{ padding: '0', overflow: 'initial' }}>
                    <Header style={{ padding: '0', background: '#fff', textAlign: 'right', 'borderBottom': '1px solid' }} >
                    {!isAuthenticated &&
                        <Button type="text" onClick={handleModalLoginVisible} icon={<LoginOutlined />}>Login</Button>
                    }
                    </Header>
                    <div className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
                    <Login
                        visible={isHidden}
                        setModalLoginVisible={handleModalLoginVisible}
                    />
                    { component }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    PinkBunnyStudios ©2021
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Navbar;