import styled from "styled-components";

export const CheckoutContainer = styled.table`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  td,
  th{
    width: 20%;
    padding: 3px;
    text-align:center;
  }
`

export const CheckoutHeader = styled.thead`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.tr`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`

export const CheckoutBlock = styled.tbody`
  width: 100%;
`

export const CheckoutFoot = styled.tfoot`
  width: 100%;
  margin-top: 30px;
`

export const CheckoutTotal = styled.tr`
  .value {
    display: inline-block;
    width: 100%;
    margin-left: auto;
    font-size: 36px;
    text-align: end;
  }
`
export const CheckoutPayment = styled.tr`
  
`