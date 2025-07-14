import type { getDictionary } from "@/lib/dictionaries";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function CvFooter({ name, dict }: { name: string; dict: Dictionary }) {
  return (
    <footer className="text-center text-muted-foreground py-8">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p>
        Diseño y desarrollo web por <a href={dict.personal.contact.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">clancig.com.ar</a>
      </p>
    </footer>
  );
}
