/** @packages */
import {Grid, Modal, useModal, Row } from "@nextui-org/react";
import React, { useState } from 'react';

/** @application */
import { ItemCard } from "@components/molecules";
import {
  OrderSummary,
  OrderForms,
} from "@components/organisms";

/** @module */
import { ConcertType, concerts} from "./helpers";

export const HomeTable = (): JSX.Element => {
  const { setVisible, bindings } = useModal();

  const [selectedConcert, setSelectedConcert] = useState<ConcertType>({id:0, image:''});

  const handleOpenPaymentModal = (concert: ConcertType) => {
    setSelectedConcert(concert);
    setVisible(true);
  };

  const handlePlaceOrder = () => {
    setVisible(false);
  };

  return (
    <>
    <Grid.Container gap={2} justify="center">
    { 
      concerts.map( (concert) => {
        return (
          <Grid key={`${concert.id}`}  xs={12} sm={3}>
            <ItemCard key={`concert-${concert.id}`} concertData={concert} onPay={handleOpenPaymentModal} />
          </Grid>
        );
      }) 
    }
    </Grid.Container>

    <Modal
      blur
      scroll
      width="90%"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      css={{ maxWidth: '1080px', margin: '0 auto' }}
      {...bindings}
    >
      
      <Modal.Body>        
        <Grid.Container>
          <Grid xs={12}>
            <Row justify="space-between">              
              <OrderForms/>
              <OrderSummary concert={selectedConcert} onPlaceOrder={handlePlaceOrder} />
            </Row>
          </Grid>
        </Grid.Container>
      </Modal.Body>
    </Modal>
      
    </>
  );
}
