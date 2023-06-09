import styled from 'styled-components/native';

export const Task = styled.View`
    margin: 24px 20px 0;
    padding: 24px;
    border-width: 1px;
    border-color: #EEEEEE;
    border-radius: 12px;
    gap: 24px;
`;

export const TaskHeader = styled.View`

`;

export const TaskDescripition = styled.View`

`;

export const TaskFooter = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const TaskAction = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const TaskStatus = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const TaskIcon = styled.Image`
    width: 16px;
    height: 16px;
`;