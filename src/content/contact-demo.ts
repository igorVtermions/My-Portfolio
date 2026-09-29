export const demoTiming = { typing: 3600, run: 4500, complete: 6900 };

export const demoCode = [
  { text: "export function SeuProximoSite() {\n", tone: "keyword" },
  { text: "  return (\n", tone: "keyword" },
  { text: '    <Site theme="violet">\n', tone: "tag" },
  { text: '      <Marca nome="igor franco /" />\n', tone: "tag" },
  { text: '      <Hero titulo="Ideias ganham forma." />\n', tone: "tag" },
  { text: "      <Interface />\n", tone: "tag" },
  { text: "      <Contato />\n", tone: "tag" },
  { text: "    </Site>\n", tone: "tag" },
  { text: "  );\n}", tone: "keyword" },
];

export const demoCodeLength = demoCode.reduce(
  (length, line) => length + line.text.length,
  0,
);
