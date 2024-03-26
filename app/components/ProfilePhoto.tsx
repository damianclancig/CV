import Image from 'next/image'

export function ProfilePhoto() {
  return (
    <div className="w-1/3 ">
      <Image
        src="/images/perfil.webp"
        className="rounded-full border-orange-500 border-4 w-full"
        alt="ProfilePhoto"
        width={300}
        height={300}
      />
    </div>
  )
}
