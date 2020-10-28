import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from "react-router";
import Logo from '../images/logomedia.png';

const Styles = styled.div`
    .sidebar {
        background-color: #ff0000;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        padding: 8px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    .navbar {
        background-color: #222;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover {
          color: white;
        }
    }
    
    .logo {
        height: 55px;
    }

`;

export const Side = props => {
    return (
        <Styles>
            <Nav className="col-md-2 d-none d-md-block bg-dark sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Navbar.Brand href="/"><img class="logo" src={Logo}></img></Navbar.Brand>
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/">Acerca de</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/mapas">Mapas</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/descarga">Descarga</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/analisis">Analisis </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/explicacion">Explicacion</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Styles>
        );
  };