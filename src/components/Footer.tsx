
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} K Ganesh Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
