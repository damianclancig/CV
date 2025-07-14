import { Card, CardContent } from "@/components/ui/card";
import type { getDictionary } from "@/lib/dictionaries";
import { LanguagesIcon } from "lucide-react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function CvLanguages({ dict, lang }: { dict: Dictionary["languages"]; lang: Dictionary["lang"] }) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-8">{lang.languages}</h2>
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start space-x-3">
              <LanguagesIcon className="h-5 w-5 mt-1 text-accent shrink-0" />
              <div>
                <p className="font-semibold text-primary">{lang.english}</p>
                <p className="text-muted-foreground">{dict.english}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <LanguagesIcon className="h-5 w-5 mt-1 text-accent shrink-0" />
              <div>
                <p className="font-semibold text-primary">{lang.portuguese}</p>
                <p className="text-muted-foreground">{dict.portuguese}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
