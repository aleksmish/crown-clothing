import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer
  }

  @media screen and (max-width: 800px) {
    align-items: center;

  }
`  

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
