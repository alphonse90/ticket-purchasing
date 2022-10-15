/** @packages */
import { Grid, Input, Col, Row } from "@nextui-org/react";

export const BillingForm = (): JSX.Element => {
  return (
    <Grid.Container css={{mb: "40px"}} >
      <Grid xs={12}>        
        <Col>
          <Row>
            <Input clearable label="Name" placeholder="John Doe" />
            <Input
              clearable
              type="email"
              label="Email"
              placeholder="john@email.com"
            />
          </Row>
          <Row>
            <Input
              clearable
              type="text"
              label="Address"
              placeholder="1450 Ala Moana Blvd"
            />
          </Row>
          <Row>
            <Input clearable label="State" placeholder="Hawaii" />
            <Input clearable label="City" placeholder="Honolulu" />
            <Input clearable label="Zip code" placeholder="96814" />
          </Row>
         </Col>
      </Grid>

      
      
    </Grid.Container>
  );
};
