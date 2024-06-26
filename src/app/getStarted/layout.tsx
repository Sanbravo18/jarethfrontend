import Navbarshadcn from "@/components/navbar/navbar";

export default function GetStartedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Navbarshadcn />
      {children}
    </section>
  );
}
