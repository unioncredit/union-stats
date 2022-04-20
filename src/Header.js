import { Text, LogoMobile as Logo, Box } from "@unioncredit/ui";

export default function Header() {
  return (
    <Box as="header" justify="space-between" fluid>
      <Logo width="90px" />
      <div className="home-nav">
        <a href="/">
          <Text as="span" my={0} mr="24px" className="hide-lt-600">
            Blog
          </Text>
        </a>
        <a href="/">
          <Text as="span" my={0} mr="24px" className="hide-lt-600">
            Docs
          </Text>
        </a>
        <a href="/">
          <Text as="span" color="blue600" m={0} className="open-app-text">
            Open App
          </Text>
        </a>
      </div>
    </Box>
  );
}
