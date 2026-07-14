type PageHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
};

export default function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <section className="ase-page-header">
      <div className="ase-container py-16 lg:py-20">
        <div className="max-w-4xl">
          <span className="ase-kicker text-ase-blue">{kicker}</span>
          <h1 className="ase-page-title mt-5 text-ase-black">{title}</h1>
          {lede ? (
            <p className="ase-body-lg mt-6 max-w-3xl text-ase-muted">{lede}</p>
          ) : null}
          <span className="ase-page-header-accent mt-8" />
        </div>
      </div>
    </section>
  );
}
