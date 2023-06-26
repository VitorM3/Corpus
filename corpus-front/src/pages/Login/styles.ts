import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    margin: 0 auto;
`;

export const Hero = styled.main`
    display: flex;
    justify-content: center;
    gap: 8rem;
    width: 1600px;

    height: 70%;
`

export const Text = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    width: 40%;

    h1 {
        font-size: 4rem;
    }

    .main-text {
        color: ${props => props.theme.colors.gray[10]};

        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3.25rem;
    }

    .sub-text {
        font-size: 1.15rem;
        line-height: 1.5rem;
        width: 85%;
        color: ${props => props.theme.colors.gray[50]};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 800px;
    padding: 3.5rem 3rem 3rem;

    height: 70%;
    width: 430px;

    background: ${props => props.theme.colors.gray[90]};
    border-radius: 0.5rem;

    h2 {
        color: ${props => props.theme.colors.white};
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            label {
                font-size: 1rem;
                color: ${props => props.theme.colors.gray[10]};
            }

            input {
                width: 100%;
                height: 3rem;
                padding: 0 1rem;

                border-radius: 0.5rem;
                border: none;
                background: ${props => props.theme.colors.gray[80]};
                color: ${props => props.theme.colors.white};

                font-size: 1rem;
                font-weight: 500;
                line-height: 1.25rem;
                transition: border-color 0.2s;

            }
        }
    }

    button {
        width: 100%;
        height: 3rem;
        border-radius: 0.5rem;
        border: none;
        background: ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.white};
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.2);
        }
    }
`;