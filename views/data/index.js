import { Heading, Box, Grid, Text } from "@unioncredit/ui";
import useIsMobile from "hooks/useIsMobile";
import { Footer } from "components-ui";

export default function StatsView() {
  const isMobile = useIsMobile();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <Box
            mb="56px"
            fluid
            align="center"
            justify="center"
            direction="vertical"
          >
            <Heading
              size={isMobile ? "large" : "xxlarge"}
              align="center"
              mt={"60px"}
              className={"text--grey700"}
            >
              Union Network Statistics
            </Heading>

            <Text align="center" mb="24px" className={"text--grey400"}>
              Multi-chain statistics and analysis related to Union Protocol
            </Text>
          </Box>
        </Grid.Col>
      </Grid.Row>

      <Footer></Footer>
    </Grid>
  );
}
