import React from 'react'
import { WrapperScreen, WrapperContainer } from './Style.js'
import Element from './ElementsComponent/Element.jsx'
import data from '../Components/data/data.js'
import CategoryComponent from './CategoryComponent/CategoryComponent.jsx'

const Periodictable = () => {
    return (
        <WrapperScreen>
            <WrapperContainer>
                <CategoryComponent />
                {data.map((item) => (
                    <Element
                        row={item.row}
                        column={item.column}
                        name={item.name}
                        symbol={item.symbol}
                        atomic={item.atomic}
                        number={item.number}
                        category={item.category}
                    />
                ))}
            </WrapperContainer>
        </WrapperScreen>
    )
}

export default Periodictable
