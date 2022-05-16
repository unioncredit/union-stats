import { Box, Text } from "@unioncredit/ui";

const FOOTER_LINKS = [
  {
    href: "https://unionfinance.gitbook.io/docs/",
    label: "Docs",
  },
  {
    href: "https://medium.com/union-finance",
    label: "Blog",
  },
  {
    href: "#",
    label: "Twitter",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <Box justify="center" my="48px">
        {FOOTER_LINKS.map(({ href, label }, i) => (
          <Text mx="5px" key={i}>
            <a
              className="block hover:underline"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
            </a>
          </Text>
        ))}
      </Box>
    </footer>
  );
};
