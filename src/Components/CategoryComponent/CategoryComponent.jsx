import React from 'react'
import { WrapperCategoryName, WrapperCategoryDiv } from '../CategoryComponent/Style.js'
import Category from '../data/Category.js'

const CategoryComponent = () => {


    const getColorById = (id) => {
        switch (id) {
            case 1:
                return { textColor: '#75B25F', shadowColor: '#75B25F' };
            case 2:
                return { textColor: '#A0D63D', shadowColor: '#A0D63D' };
            case 3:
                return { textColor: '#6A4471', shadowColor: '#6A4471' };
            case 4:
                return { textColor: '#833FAB', shadowColor: '#833FAB' };
            case 5:
                return { textColor: '#DB6060', shadowColor: '#DB6060' };
            case 6:
                return { textColor: '#5C5A8C', shadowColor: '#5C5A8C' };
            case 7:
                return { textColor: '#85928C', shadowColor: '#85928C' };
            case 8:
                return { textColor: '#21F596', shadowColor: '#21F596' };
            case 9:
                return { textColor: '#6E48E1', shadowColor: '#6E48E1' };
            default:
                return { textColor: 'white', shadowColor: 'white' };
        }
    }

    return (
        <WrapperCategoryDiv>
            {Category.map((item) => {
                const { textColor, shadowColor } = getColorById(item.id);
                return (
                    <WrapperCategoryName
                        style={{
                            color: textColor,
                            textShadow: `0 0 1px ${shadowColor}, 0 0 2px ${shadowColor}, 0 0 3px ${shadowColor}, 0 0 4px ${shadowColor}`
                        }}
                        key={item.id}
                    >
                        {item.name}
                    </WrapperCategoryName>
                )
            })}
        </WrapperCategoryDiv>
    )
}

export default CategoryComponent
