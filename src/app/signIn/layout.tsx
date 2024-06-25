import Navbarshadcn from "@/components/navbar/navbar";

export default function SingInLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbarshadcn />
      {children}
    </section>
  );
}