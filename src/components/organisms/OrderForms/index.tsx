/** @packages */
import { Grid, Text, Spacer } from "@nextui-org/react";

/** @application */
import {
  BillingForm,
  PaymentForm
} from "@components/molecules";

export const OrderForms = (): JSX.Element => {
  
  return (
    <Grid.Container gap={2}>      
      <Grid>
        <BillingForm />
        <PaymentForm />
      </Grid>
    </Grid.Container>    
  );
};
