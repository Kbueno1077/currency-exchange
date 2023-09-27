'use client'

import styled from "styled-components";

const inputPadding = '20px'

/**
 *
 * Wrappers
 *
 */

export const ModuleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ExchangeWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  height: max-content;
  padding: 30px;
  margin: 50px 20px 50px;
  background: lightblue;
  border-radius: 10px;
`

export const ImageContainer = styled.div`
  margin: 5px 0 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  max-width: 400px;
  
  @media (max-width: 600px) {
    max-width: 280px;
  }
`

export const InputWrapper = styled.div`

`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 15px;


  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const ResultWrapper = styled.div`
  margin-top: 15px;
  border-radius: 10px;
  background-color: #7AA9BB;
  padding: 20px; 
`

export const MessageWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
`


/**
 *
 * Inputs
 *
 */


export const StyledInput = styled.input`
  color: gray;
  padding: ${inputPadding};
  border-radius: 10px;
  width: 100%;
`

export const StyledSelect = styled.select`
  color: gray;
  padding: ${inputPadding};
  border-radius: 10px;
  width: 50%;


  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledOption = styled.option`
`


/**
 *
 * Actions
 *
 */


export const StyledButton = styled.button`
  color: azure;
  padding: ${inputPadding};
  width: 100%;
  margin-top: 15px;
  border: 2px solid azure;
  border-radius: 10px;
  transition: 0.3s linear;

  &:hover {
    background: skyblue;
  }
`

export const CloseButton = styled.button`
  color: azure;
  padding: 5px 10px 5px;
  height: max-content;
  border: 2px solid azure;
  border-radius: 10px;
  transition: 0.3s linear;

  &:hover {
    background: skyblue;
  }
`

export const DisclaimerText = styled.h3`
 text-align: center;
  font-size: 12px;
`

