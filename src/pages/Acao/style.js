import styled from 'styled-components'



export const Movies = styled.ul`

    list-style:none;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr)) ;
    column-gap:3rem;
    row-gap:4rem;
    

`;
export const ListaFims = styled.li`

display:flex ;
flex-direction:column;
align-items:center;
img{
    width:200px;
}

span{
font-weight:bold;
font-size:120%;
}

`;