import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 64px 24px;
  
  background-color: var(--white);
  border-radius: 4px;

  @media (max-width: 1024px) {
    max-width: 95%
  }

  footer {
    width: 100%;
    margin-top: 24px;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--title);
    align-items: center;

    a  {
      text-decoration: none;
    }

    button {
      width: 174px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background: var(--blue);
      color:  var(--white);
      border: 0;
      border-radius: 4px;
      font-weight: 700;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: var(--blue);
      }
    }
  }`

export const Content = styled.div`
width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

a {
  width: 173px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--blue);
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
}
`


export const Title = styled.h2`
  color: var(--bg-navy);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`


export const Image = styled.img`
  max-width: 295px;
  margin-bottom: 24px;
`