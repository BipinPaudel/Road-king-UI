import React from 'react'
import styled from 'styled-components'
import {VehicleList} from '../components'
import VehiclesContainer from "../components/Vehicles";

const VehiclesPage = () => {
  return <main>
    <Wrapper className="page">
      <div className="section-center products">
        <div>
          {/*<Sort/>*/}
          <VehiclesContainer/>
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .vehicles {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .vehicles {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default VehiclesPage;