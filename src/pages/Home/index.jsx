import { Seo } from '../../components/ui/Seo'
import { Hero } from '../../components/sections/Hero'
import { Intro } from '../../components/sections/Intro'
import { Collection } from '../../components/sections/Collection'
import { WhySanro } from '../../components/sections/WhySanro'
import { Rooms } from '../../components/sections/Rooms'
import { Customisation } from '../../components/sections/Customisation'
import { Manufacturing } from '../../components/sections/Manufacturing'
import { HomeGallery } from '../../components/sections/HomeGallery'
import { WaterproofingTeaser } from '../../components/sections/WaterproofingTeaser'
import { Testimonials } from '../../components/sections/Testimonials'
import { CtaBand } from '../../components/sections/CtaBand'

export default function HomePage() {
  return (
    <>
      <Seo
        title="SANRO Fibre Glass Industries | Premium Interior Fibre Doors"
        description="SANRO manufactures premium fibre interior doors, custom fibre solutions and professional waterproofing from Idukki, Kerala."
      />
      <Hero />
      <Intro />
      <Collection />
      <WhySanro />
      <Rooms />
      <Customisation />
      <Manufacturing />
      <HomeGallery />
      <WaterproofingTeaser />
      <Testimonials />
      <CtaBand />
    </>
  )
}
