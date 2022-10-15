import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import { ConcertType } from "./../../organisms/HomeTable/helpers";

export const ItemCard = ({
  concertData,
  onPay,
}: {
  concertData: ConcertType;
  onPay: (concert: ConcertType) => void;
}): JSX.Element => {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            ${concertData.price?.toFixed(2)} USD
          </Text>
          <Text h3 color="#ffffffAA">
            {concertData.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={concertData.image}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Concert Cover"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12} css={{ fontWeight: "bold" }}>
              {concertData.title}
            </Text>
            <Text color="#000" size={12}>
            {concertData.date} - {concertData.hour}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary" onClick={() => { 
                  onPay(concertData);
               }}>
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Buy for ${concertData.price?.toFixed(2)}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};