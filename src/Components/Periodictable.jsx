import React from 'react'
import { WrapperScreen, WrapperContainer } from './Style.js'
import Element from './ElementsComponent/Element.jsx'
import data from '../Components/data/data.js'

const Periodictable = () => {
    return (
        <WrapperScreen>
            <WrapperContainer>
                {/* <Element row="1" column="1" name='Hidro' symbol="H" atomic="1.008" number="1" /> */}
                {data.map((item) => (
                    <Element
                        row={item.row}
                        column={item.column}
                        name={item.name}
                        symbol={item.symbol}
                        atomic={item.atomic}
                        number={item.number}
                    />
                ))}
            </WrapperContainer>
        </WrapperScreen>
    )
}

export default Periodictable
