import styled from "styled-components";


const Select = styled.select`
padding: 10px;
margin: 100px 0;
border-radius: 3px;
height: auto;
font-size: 1rem;
border: 1px solid black;
background-color:  #AFEEEE;
`;

function TooltipSelector ({onChange}) {

   const handleChange = (e)=> {
    onChange(e.target.value);
   }

    return(
        <Select name="tooltipselctor" onChange={handleChange}  >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        </Select>
    )
}

export default TooltipSelector;