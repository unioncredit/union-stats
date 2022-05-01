import {
  Layout,
  Box,
  Grid,
  Row,
  Col,
} from "@unioncredit/ui";
import { Navigation } from "components-ui";

export function Wrapper({ children }) {
  return (
    <>
      <Layout>
        <Layout.Main>
          <Grid style={{ display: "flex", flexGrow: 1 }}>
            <Row style={{ width: "100%", margin: 0 }}>
              <Col>
                <Layout.Header>
                  <Navigation />
                </Layout.Header>
                <Box
                  fluid
                  align="center"
                  direction="vertical"
                  className="inner-wrapper"
                >
                  {children}
                </Box>
              </Col>
            </Row>
          </Grid>
        </Layout.Main>
      </Layout>
    </>
  );
}
