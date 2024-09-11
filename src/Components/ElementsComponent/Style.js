import styled from "styled-components";

export const WrapperElement = styled.div`  
    width: 68px;
    height: 68px;
    background-color: #1A191D;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin: 2px;
    transform-origin: center;
    transition: transform 0.1s ease; /* Thêm hiệu ứng chuyển đổi */
    cursor: pointer;
    user-select: none;
`

export const WrapperNumber = styled.span`
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1px;
`

export const WrapperSymbol = styled.span`
    font-size: 20px;
    padding: 8px 0 0 0;
`
export const WrapperName = styled.span`
    font-size: 10px;
`

export const WrapperAtomic = styled.span`
    font-size: 8px
`