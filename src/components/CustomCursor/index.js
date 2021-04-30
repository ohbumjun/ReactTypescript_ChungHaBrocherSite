import {useRef , useEffect } from 'react';
import styled from 'styled-components/macro';

const CursorComp = styled.div`
    z-index : 1000;
    border-radius: 50%;
    width : 30px ;
    height : 30px;
    border : 2px solid grey;
    pointer-events : none;
    overflow : hidden;
    transform : translateY(0,0,0);
    transition: 0.1s;
    position : fixed;
`
const CursorCompFollow = styled.div`
    z-index : 1000;
    border-radius: 50%;
    width : 50px ;
    height : 50px;
    border : 2px solid darkgray;
    pointer-events : none;
    overflow : hidden;
    transform : translateY(0,0,0);
    transition: 0.2s;
    position : fixed;
`

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorRefFollow = useRef(null);
    useEffect(() => {
        document.addEventListener('mousemove', event => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorRefFollow.current.style.transform = `translate3d(${mouseX}px + 50%, ${mouseY}px - 50%, 0)`;
        })
    },[])

    return(
        <>
            <CursorComp ref = {cursorRef}/>
            <CursorCompFollow ref = {cursorRefFollow}/>
        </>
    ) 
}

export default CustomCursor