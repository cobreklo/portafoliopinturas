export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground font-body">
          © {currentYear} María José Parot. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60 font-body mt-2">
          Artista Visual · Isla Negra, Chile
        </p>
      </div>
    </footer>
  );
};
