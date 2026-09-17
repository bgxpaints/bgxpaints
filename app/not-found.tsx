import { ButtonLink, Container } from "@/components/ui";
import { routes } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="py-[var(--ds-space-64)]">
      <h1 className="text-4xl font-semibold">Pagina niet gevonden</h1>
      <p className="mt-[var(--ds-space-16)] max-w-xl text-muted">
        Deze link bestaat niet meer. Ga naar de homepage of vraag meteen een offerte.
      </p>
      <div className="mt-[var(--ds-space-24)] flex flex-wrap gap-[var(--ds-space-12)]">
        <ButtonLink href={routes.home}>Home</ButtonLink>
        <ButtonLink href={routes.contact} variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </Container>
  );
}
