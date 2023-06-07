import styled from 'styled-components';

export const Container = styled.div`
    margin-top:70px;
    padding-right: 50px;
`;

export const Title = styled.div`
    margin-top: 20px;
`;

export const Styletext = styled.div`
  display: flex;
`;

export const Line = styled.div`
  display:flex;
  border: 1px solid ${({theme}) => theme.Colors.vinho};
  width: 100%;
`;

export const SectionValue = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    margin: 40px 0px;
`;

export const SectionValuePlan = styled.div`
    display: flex;
    padding: 20px 0px;
    justify-content: space-between;
`;
