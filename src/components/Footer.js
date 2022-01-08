import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8793;
`

const FooterItem = styled.div `
    text-decoration: none;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    bottom: 0;
`
function footer() {
  return (
      <React.Fragment>
        <Footer>
            <FooterItem>Home Page Simples usando Styled</FooterItem>
        </Footer>
      </React.Fragment>
  );
}

export default footer;