import React from 'react'
import styled from 'styled-components'
import Vehicle from "./Vehicle";

const VehicleGridView = ({vehicles}) =>{
  return <Wrapper>
    <div className="vehicles-container">
      {vehicles.map((vehicle)=>{
        return <Vehicle key={vehicle.id} {...vehicle}/>
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .vehicles-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .vehicles-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .vehicles-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default VehicleGridView