/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <DialogOverlay
        style={{ 
          position: "fixed",
          top: "0",
          left: "0",
          background: "rgba(96, 100, 108, 0.8)",
          height: "100vh",
          width: "100vw"
        }}
      >
        <DialogContent
          style={{
            background: "white",
            position: "absolute",
            top: "0",
            right: "0",
            left: "75px",
            bottom: "0"
          }}
        >
          <Wrapper>
            <CloseButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close"></Icon>
            </CloseButton>
            <Nav>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </Nav>
            <Footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </Footer>
          </Wrapper>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 32px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: ${14/16}rem;
  font-weight: 500;

  a {
    color: var(--color-gray-700);
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: flex;
  font-size: ${18/16}rem;
  font-weight: 600;
  flex-direction: column;
  gap: 16px;

  a {
    color: var(--color-gray-900);
    text-decoration: none;
  }

  a :first-child {
    color: var(--color-secondary);
  }
`

export default MobileMenu;
