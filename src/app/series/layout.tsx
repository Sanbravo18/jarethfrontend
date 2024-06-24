import Navbarshadcn from "@/components/navbar/navbar";

export default function SeriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <Navbarshadcn />
      {children}
    </section>
  );
}
