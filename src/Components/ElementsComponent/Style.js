import styled from "styled-components";

export const WrapperElement = styled.div`  
    width: 68px;
    height: 68px;
    background-color: #1B232A;
    display: flex;
    border: orange 3px solid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin: 2px;
    transform-origin: center;
    transition: transform 0.1s ease; /* Thêm hiệu ứng chuyển đổi */
    cursor: pointer;
    &:hover {
        transform: scale(1.2); /* Phóng to 20% khi hover */
    }
`

export const WrapperNumber = styled.span`
    color: white;
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1px;
`

export const WrapperSymbol = styled.span`
    color: white;
    font-size: 20px;
    padding: 8px 0 0 0;
`
export const WrapperName = styled.span`
    color: white;
    font-size: 10px;
`

export const WrapperAtomic = styled.span`
    color: white;
    font-size: 8px
`