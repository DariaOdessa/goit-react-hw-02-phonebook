import styled from "styled-components";

export const Feedback = styled.div`
width: 600px;
padding: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.backgroundGray};
text-align: center;
margin-top: ${p => p.theme.space[6]}px;
margin-left: auto;
margin-right: auto;
border-radius: ${p => p.theme.radii.lg};
box-shadow: ${p => p.theme.shadows.dark};
`