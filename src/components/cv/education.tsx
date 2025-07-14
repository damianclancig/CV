import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, CheckCircle, Clock } from "lucide-react";
import type { getDictionary } from "@/lib/dictionaries";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function CvEducation({ dict, lang }: { dict: Dictionary["education"]; lang: Dictionary["lang"] }) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-8">{lang.education}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {dict.courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg text-primary">{course.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <Book className="h-4 w-4" /> {course.platform}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between p-4 sm:p-6 pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {course.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline">{tech}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                <span>{course.year.replace("En curso", lang.in_progress)}</span>
                <div className="flex items-center gap-2">
                  {course.status === 'completed' ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{lang.completed}</span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>{lang.in_progress}</span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
