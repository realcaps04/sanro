import { rooms } from '../../data/rooms'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function Rooms() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Applications</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">Designed for every room</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rooms.map((room, index) => (
            <Reveal key={room.title} delay={index * 50} className={index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <article className="group relative overflow-hidden">
                <div className={index === 0 ? 'aspect-[16/11] lg:aspect-[4/5]' : 'aspect-[4/5]'}>
                  <img
                    src={room.image}
                    alt={`${room.title} interior with SANRO fibre doors`}
                    className="img-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-medium">{room.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{room.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
