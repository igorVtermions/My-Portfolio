const shapes = {
  "arrow-down": (
    <>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </>
  ),
  "arrow-left": (
    <>
      <path d="M20 12H4m6-6-6 6 6 6" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  check: (
    <>
      <path d="m4 12 5 5L20 6" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="1" />
      <path d="M15 4H4v11" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  "external-link": (
    <>
      <path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  menu: (
    <>
      <path d="M4 8h16M4 16h16" />
    </>
  ),
  plus: (
    <>
      <path d="M12 4v16M4 12h16" />
    </>
  ),
};
export type IconName = keyof typeof shapes;
export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
