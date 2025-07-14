import { getDictionary } from '@/lib/dictionaries'
import type { Locale } from '@/i18n-config'
import { CvHeader } from '@/components/cv/header'
import { CvPersonalData } from '@/components/cv/personal-data'
import { CvExperience } from '@/components/cv/experience'
import { CvEducation } from '@/components/cv/education'
import { CvSkills } from '@/components/cv/skills'
import { CvLanguages } from '@/components/cv/languages'
import { CvFooter } from '@/components/cv/footer'

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:p-6 lg:p-8 space-y-4 md:space-y-12 my-8">
      <CvHeader dict={dict.personal} />
      <main className="space-y-8 md:space-y-16 mt-8">
        <CvPersonalData dict={dict.personal_data} lang={dict.lang} personalDict={dict.personal} />
        <CvExperience dict={dict.experience} lang={dict.lang} />
        <CvEducation dict={dict.education} lang={dict.lang} />
        <CvSkills dict={dict.skills} lang={dict.lang} />
        <CvLanguages dict={dict.languages} lang={dict.lang} />
      </main>
      <CvFooter name={dict.personal.name} dict={dict} />
    </div>
  )
}

    