import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";
import type { getDictionary } from "@/lib/dictionaries";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function CvExperience({ dict, lang }: { dict: Dictionary["experience"]; lang: Dictionary["lang"] }) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-4 md:mb-8">{lang.experience}</h2>
      <div className="relative before:absolute before:left-0.5 before:top-2 before:h-full before:w-0.5 before:bg-border before:-translate-x-1/2">
        {dict.map((job, index) => (
          <div key={index} className="relative pl-3 mb-4 md:mb-8">
            <div className="absolute -left-px top-2 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/3" />
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-2 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                   <div className="order-2 sm:order-1 w-full">
                    <CardTitle className="text-xl text-primary">{job.position}</CardTitle>
                    <CardDescription className="flex items-center gap-2 pt-1">
                      <Building className="h-4 w-4" /> {job.company}
                    </CardDescription>
                  </div>
                   <div className="order-1 sm:order-2 flex justify-end w-full sm:w-auto">
                    <Badge variant="secondary" className="whitespace-nowrap">{job.period.replace("Presente", lang.present)}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4 pt-0">
                <p className="text-muted-foreground mb-4 whitespace-pre-line">{job.description}</p>
                {job.achievements.length > 0 && (
                   <div className="mb-4">
                    <h4 className="font-semibold mb-2">{lang.achievements}:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
