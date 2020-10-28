import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from "react-router";
import Logo from '../images/logomedia.png';

const Styles = styled.div`
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100vh !important;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
`;

export const Side = props => {
    return (
        <styled>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
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
        </styled>
        );
  };