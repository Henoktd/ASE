export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="ase-page-enter">{children}</div>;
}
