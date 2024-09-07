import React, { useState } from 'react'
import { WrapperElement, WrapperNumber, WrapperName, WrapperSymbol, WrapperAtomic } from './Style'

const Element = ({ row, column, name, number, symbol, atomic }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [zIndex, setZIndex] = useState(false)

    let top = 'auto';
    let left = 'auto';


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
        transform: isChecked ? 'scale(3)' : 'scale(1)',
        zIndex: zIndex ? 2 : 1,
    };

    const handleOnClickE = () => {
        setIsChecked(prev => !prev)
        setZIndex(prev => !prev)
    }

    return (
        <WrapperElement style={styles} onClick={handleOnClickE}>
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
