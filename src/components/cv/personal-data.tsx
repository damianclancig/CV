import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Calendar, CreditCard, Heart, Flag, Home, MapPin, Building, Mail, Phone, Globe } from "lucide-react";
import type { getDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const personalDataItems = (dict: Dictionary["personal_data"], personalDict: Dictionary["personal"], lang: Dictionary["lang"]) => {
  const fullAddress = `Viejo Bueno 402, B1876 Bernal Oeste, Provincia de Buenos Aires`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return [
    { icon: User, label: lang.full_name, value: dict.full_name },
    { icon: Calendar, label: lang.dob, value: dict.dob },
    { icon: CreditCard, label: "DNI", value: dict.dni },
    { icon: CreditCard, label: "CUIL", value: dict.cuil },
    { icon: Heart, label: lang.marital_status, value: lang.married },
    { icon: Flag, label: lang.nationality, value: lang.argentina },
    { icon: Home, label: lang.address, value: <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{dict.address}</a> },
    { icon: MapPin, label: lang.city, value: dict.city },
    { icon: Building, label: lang.province, value: lang.buenos_aires },
    { icon: Mail, label: "E-mail", value: <a href={`mailto:${personalDict.contact.email}`} className="text-accent hover:underline">{dict.email}</a> },
    { icon: Phone, label: lang.phone, value: <a href={`https://wa.me/${personalDict.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{dict.phone}</a> },
    { icon: Globe, label: "Web", value: <a href={`https://${dict.website}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{dict.website}</a> },
  ];
}


export function CvPersonalData({ dict, lang, personalDict }: { dict: Dictionary["personal_data"]; lang: Dictionary["lang"], personalDict: Dictionary["personal"] }) {
  const items = personalDataItems(dict, personalDict, lang);

  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-4 md:mb-8">{lang.personal_data}</h2>
      <Card>
        <CardContent className="p-2 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <item.icon className="h-5 w-5 mt-1 text-accent shrink-0" />
                <div>
                  <p className="font-semibold text-primary">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
