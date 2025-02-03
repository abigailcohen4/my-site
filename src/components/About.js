import styled from 'styled-components';

const Name = styled.h1` 
    color: #0083BA; 
    padding-top: 15%;  
    font-size: calc(10px + 8vmin);
    font-family: "dico-code-one", mono;
    font-weight: 700;
    font-style: normal;   
`;

const Summary = styled.p`
    color: #0083BA; 
    padding-top: 2vh;
    padding-left: 25%;
    padding-right: 25%; 

`

export default function About() {
  return (
    <div>
    <Name>Abigail Cohen</Name>
    <Summary>Dynamic Computer Science and Environmental Studies double major, combining strong communication 
        skills and computer proficiency. Seeking to leverage technical skills and a passion for sustainable tech 
        to create impactful software solutions that benefit communities and enhance data-driven decision-making.</Summary>
    </div>
  );
}