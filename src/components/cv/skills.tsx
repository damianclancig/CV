import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { getDictionary } from "@/lib/dictionaries";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function CvSkills({ dict, lang }: { dict: Dictionary["skills"]; lang: Dictionary["lang"] }) {
  const skillCategoryTitles: { [key: string]: string } = {
    programming_languages: lang.programming_languages,
    frameworks: lang.frameworks,
    databases: lang.databases,
    repositories: lang.repositories,
    servers: lang.servers,
    applications: lang.applications,
    methodologies: lang.methodologies,
  };

  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-8">{lang.skills}</h2>
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(dict).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg text-primary mb-3">{skillCategoryTitles[category] || category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(skillList as string[]).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
