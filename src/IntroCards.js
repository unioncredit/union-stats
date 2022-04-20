import { Grid, Row, Col, Text, Heading, Card, Box } from "@unioncredit/ui";

export default function IntroCards() {
  return (
    <Box mt="148px">
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <Card mb="16px">
              <Card.Body>
                <Box maxw="64px" mx="auto">

                </Box>
                <Heading mb="20px" weight="medium" className="bullet-header">
                  Open
                </Heading>
                <Text>
                  Union is open by default. This enables you to build on Union
                  as you see fit with no gatekeeping
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card mb="16px">
              <Card.Body>
                <Box maxw="64px" mx="auto">
                </Box>
                <Heading mb="20px" weight="medium" className="bullet-header">
                  Efficient
                </Heading>
                <Text>
                  Middlemen are removed from the equation. Borrowing and lending
                  has never been more efficient
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card mb="16px">
              <Card.Body>
                <Box maxw="64px" mx="auto">

                </Box>
                <Heading mb="20px" weight="medium" className="bullet-header">
                  Yours
                </Heading>
                <Text>
                  Built and operated by the community. The future of Union is
                  defined by you
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Box>
  );
}
