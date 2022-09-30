import React from 'react';
import { ReactNode } from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SuporteIcon,
  ClockIcon,
  More
 } from './styles';

function SellerInfo() {
  return (
    <Container>
      <Title> Informações Sobre o Vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li  className="active"/>
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Venda nos últimos 4 meses</span>
          </div>

          <div>
            <strong><SuporteIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Venda nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do Vendedor</More>
    </Container>
  );
}

export default SellerInfo
