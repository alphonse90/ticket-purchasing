/** @packages */
import {
  Card,
  Col,
  Grid,
  Row,
  Spacer,
  Text,
  Button,
} from "@nextui-org/react";

/** @application */
import { ConcertType } from "@components/organisms";

export const OrderSummary = ({
  concert,
  onPlaceOrder,
}: {
  concert: ConcertType;
  onPlaceOrder: () => void;
}): JSX.Element => {
  const price = concert?.price ?? 0;
  const processingFee = 2.95;
  const serviceFee = price * 0.15;
  const total = price + processingFee + serviceFee;
  return (
    <Card
      css={{
        p: "$6",
        mw: "400px",
        my: "1rem",
        backgroundColor: "#000",
        borderRadius: "5px",
      }}
    >
      
      <Card.Body css={{ py: "$2" }}>        
        <Grid.Container css={{ my: "$4", width: "100%" }}>
          <Row align="center" justify="space-between">
            <Text h4>Ticket: </Text>
          </Row>
          <Grid xs={12}>
            <Col>
            <Row justify="space-between" align="center">
                <Text css={{ color: "grey" }}>
                  {concert?.title}
                </Text>
                <Text span>${price?.toFixed(2)} USD</Text>
              </Row>
            </Col>
          </Grid>
          <Spacer y={1} />
          <Row align="center" justify="space-between">
            <Text h4>Fees: </Text>
          </Row>
          <Grid xs={12}>
            <Col>
              <Row justify="space-between" align="center">
                <Text span css={{ color: "grey" }}>Service Fee:</Text>
                <Text span>${serviceFee?.toFixed(2)} USD</Text>
              </Row>
              <Row justify="space-between" align="center">
                <Text span css={{ color: "grey" }}>Order Processing Fee:</Text>
                <Text span>${processingFee?.toFixed(2)} USD</Text>
              </Row>
            </Col>
          </Grid>
          <Spacer y={1} />
          <Row align="center" justify="space-between">
            <Text h4>Delivery: </Text>
          </Row>
          <Row justify="space-between" align="center">
                <Text span css={{ color: "grey" }}>Mobile Entry:</Text>
                <Text span>Free</Text>
              </Row>
        </Grid.Container>
        <Spacer y={1} />
        <Row align="center" justify="space-between">
          <Text h3>Total: </Text>
          <Text h3>${total?.toFixed(2)} USD</Text>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row align="center" justify="space-between">
          <Button
            flat
            auto
            rounded
            color="secondary"
            css={{ width: "100%" }}
            onClick={onPlaceOrder}
          >
            <Text
              css={{ color: "inherit" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Place Order
            </Text>
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};
