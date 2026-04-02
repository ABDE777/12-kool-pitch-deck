interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="mb-12 md:mb-16">
    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
    )}
    <div className="w-16 h-1 bg-primary rounded-full mt-6" />
  </div>
);

export default SectionTitle;
