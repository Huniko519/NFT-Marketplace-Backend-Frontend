// Burger.styled.js
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import FocusLock from 'react-focus-lock';
import searchImg from '../../assets/img/search.svg';

export const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 26px;
    background: transparent;
    border: none;
    border-right: 2px solid rgba(112, 47, 221, 0.52);
    cursor: pointer;
    padding: 0;
    z-index: 10;
    padding-right: 50px;

    &:focus {
        outline: none;
    }

    div {
        width: 26px;
        height: 2px;
        background: #fff;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const StyledMenu = styled.nav`
    flex-direction: column;
    justify-content: flex-start;
    background: #0d0f22;
    height: fit-content;
    width: 300px;
    text-align: center;
    padding: 1.2rem;
    position: absolute;
    top: 46px;
    left: -140px;
    max-height: ${({ open }) => open ? '500px' : '0'};
    transition: ${({ open }) => open ? 'all 0.25s ease-in' : 'all 0.15s ease-out'};
    opacity: ${({ open }) => open ? '1' : '0'};
    display: ${({ open }) => open ? 'flex' : 'none'};
    overflow: visible;
    border: 2px solid #2d195d;
    border-top: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    a {
        display: ${({ open }) => open ? 'flex' : 'none'};
        justify-content: center;
        font-size: 16px;
        text-transform: uppercase;
        padding: 10px 0;
        color: white;
        text-decoration: none;
        transition: color 0.3s linear;
        @media (max-width: 400px) {
            text-align: center;
        }
        &:hover {
            color: #9441fb;
        }
    }
`;


const Nav = ({search, onChangeSearch}) => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>  
            <FocusLock disabled={!open}>
                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyledBurger>
                <StyledMenu open={open}>
                    <a href="/"> HOME </a>
                    <a href="/marketplace"> EXPLORE </a>
                    <a href="/create"> GET STARTED </a>
                    <a href="/profile"> MY ACCOUNT </a>
                    <a href="/create" className="d-md-none">CREATE</a>
                    <form
                        action="/marketplace"
                        method="GET"
                        className="form-search my-3 d-block d-lg-none"
                    >
                        <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => onChangeSearch(e)}
                        className="searchFrm"
                        placeholder="I am looking for..."
                        />
                        <button className="btn btn-primary">
                        {' '}
                        <img src={searchImg} className="searchImg" alt="Search" />{' '}
                        </button>
                    </form>
                </StyledMenu>
            </FocusLock>
        </div>
    )
  }
  
  export default Nav;