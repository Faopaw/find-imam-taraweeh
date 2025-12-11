export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div>{children}</div>
    </div>
  );
}
