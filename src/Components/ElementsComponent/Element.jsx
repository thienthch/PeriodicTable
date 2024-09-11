import React, { useState } from 'react'
import { WrapperElement, WrapperNumber, WrapperName, WrapperSymbol, WrapperAtomic } from './Style'

const Element = ({ row, column, name, number, symbol, atomic, category }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [isMouse, setIsMouse] = useState(false)

    let top = 'auto';
    let left = 'auto';
    let color = 'orange';

    switch (category) {
        case 1:
            color = '#75B25F';
            break;
        case 2:
            color = '#A0D63D';
            break;
        case 3:
            color = '#6A4471';
            break;
        case 4:
            color = '#833FAB';
            break;
        case 5:
            color = '#DB6060';
            break;
        case 6:
            color = '#5C5A8C';
            break;
        case 7:
            color = '#85928C';
            break;
        case 8:
            color = '#21F596';
            break;
        case 9:
            color = '#6E48E1';
            break;
        default:
            color = 'white';
            break;
    }

    const border = `${color} 3px solid`;


    switch (column) {
        case '1':
            top = '0px';
            break;
        case '2':
            top = '76px';
            break;
        case '3':
            top = '152px';
            break;
        case '4':
            top = '228px';
            break;
        case '5':
            top = '304px';
            break;
        case '6':
            top = '380px';
            break;
        case '7':
            top = '456px';
            break;
        case '8':
            top = '532px';
            break;
        case '9':
            top = '608px';
            break;
        case '10':
            top = '684px';
            break;
        default:
            top = 'auto';
            break;
    }

    switch (row) {
        case '1':
            left = '0'
            break;
        case '2':
            left = '76px'
            break;
        case '3':
            left = '152px'
            break;
        case '4':
            left = '228px'
            break;
        case '5':
            left = '304px'
            break;
        case '6':
            left = '380px'
            break;
        case '7':
            left = '456px'
            break;
        case '8':
            left = '532px'
            break;
        case '9':
            left = '608px'
            break;
        case '10':
            left = '684px'
            break;
        case '11':
            left = '760px'
            break;
        case '12':
            left = '836px'
            break;
        case '13':
            left = '912px'
            break;
        case '14':
            left = '988px'
            break;
        case '15':
            left = '1064px'
            break;
        case '16':
            left = '1140px'
            break;
        case '17':
            left = '1216px'
            break;
        case '18':
            left = '1292px'
            break;
        default:
            left = '0px'
            break;
    }

    const styles = {
        top,
        left,
        border,
        color,
        textShadow: `0 0 1px ${color}, 0 0 2px ${color}, 0 0 3px ${color}`,
        transform: isChecked
            ? 'scale(3)' // Khi click
            : isMouse
                ? 'scale(1.3)' // Khi hover
                : 'scale(1)', // Bình thường
        zIndex: isChecked || isMouse ? 2 : 1,
    };

    const handleOnClickE = () => {
        setIsChecked(prev => !prev)
    }

    const handleOnMouse = () => {
        setIsMouse(true)
    }

    const handleOnMouseD = () => {
        setIsMouse(false)
    }

    const handleBlockCopy = (e) => {
        e.preventDefault();
    }

    return (
        <WrapperElement style={styles} onCopy={handleBlockCopy} onMouseLeave={handleOnMouseD} onMouseEnter={handleOnMouse} onClick={handleOnClickE}>
            <WrapperNumber>
                {number}
            </WrapperNumber>
            <WrapperSymbol>
                {symbol}
            </WrapperSymbol>
            <WrapperName>
                {name}
            </WrapperName>
            <WrapperAtomic>
                {atomic}
            </WrapperAtomic>
        </WrapperElement>
    )
}

export default Element
