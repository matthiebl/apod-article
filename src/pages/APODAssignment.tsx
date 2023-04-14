import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Reference, ReferenceItem, ReferenceItemProps } from '../components'

import image1URL from '../../images/m51-apod.jpg'
import image2URL from '../../images/galaxy-merger.jpg'
import image3URL from '../../images/blackhole.png'

interface APODAssignmentProps {
    href: string
    page: 'content' | 'references'
}

export const APODAssignment: React.FC<APODAssignmentProps> = ({ href, page }) => {
    const navigate = useNavigate()

    const navLinks = [
        { href: '/galaxy-collisions', text: 'Article' },
        { href: '/galaxy-collisions/references', text: 'References' },
    ]

    React.useEffect(() => {
        document.title = 'Galactic Collisions | APOD Articles'
    }, [])

    return (
        <main className='flex h-full w-screen justify-center'>
            <div className='w-full max-w-4xl'>
                <nav className='sticky top-0 flex h-16 items-center justify-between border-b border-slate-900/10 bg-white pl-8 pr-6 font-semibold opacity-95'>
                    <a
                        href='/galaxy-collisions'
                        onClick={ev => {
                            ev.preventDefault()
                            navigate('/galaxy-collisions')
                        }}
                        className='truncate text-xl'
                    >
                        APOD Assignment
                    </a>
                    <div>
                        {navLinks.map(link => (
                            <a
                                key={crypto.randomUUID()}
                                href={link.href}
                                onClick={ev => {
                                    ev.preventDefault()
                                    navigate(link.href)
                                }}
                                className='ml-3 p-2 md:ml-8'
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </nav>
                <div className='px-8 pb-16'>
                    {page === 'content' && <Article href={href + '/references'} />}
                    {page === 'references' && <References />}
                </div>
            </div>
        </main>
    )
}

interface ArticleProps {
    href: string
}

const Article: React.FC<ArticleProps> = ({ href }) => (
    <article>
        <h1 id='introduction' className='mt-8 text-4xl font-semibold'>
            Galaxies - Formation and Collisions
        </h1>
        <span className='text-sm text-gray-700'>by Matthew Hiebl (z5362740) | 14 April 2023</span>

        <img src={image1URL} alt='Messier 51 Galaxy' className='mt-2 w-full' />
        <span className='text-sm text-gray-700'>
            Messer 51: The Whirlpool Galaxy <Reference link={href + '#1'}>(NASA APOD, 2015)</Reference>
        </span>
        <div className='h-6' />

        <p className='mb-3 text-justify'>
            The Whirlpool Galaxy, also known as Messier 51 or M51, is a magnificent spiral galaxy located near the
            constellation Canes Venatici. The galaxy is about 31 million light-years away from Earth{' '}
            <Reference link={href + '#2'}>(Garner R, 2021)</Reference> and is known for its remarkable spiral appearance
            that gives it its iconic name. The Whirlpool Galaxy has a bright and well-defined nucleus, and its spiral
            arms are adorned with clusters of young and hot stars, as well as dust lanes that trace the galaxy's
            structure.
        </p>
        <p className='mb-3 text-justify'>
            The Whirlpool Galaxy has a mass of about 160 billion times that of the Sun - equivalent to roughly 10% of
            the Milky Way’s mass, and it spans over 75,000 light-years in diameter{' '}
            <Reference link={href + '#2'}>(Garner R, 2021)</Reference>. Its spiral arms contain large amounts of gas and
            dust, which provide the raw material for the formation of new stars. In addition, the Whirlpool Galaxy has a
            companion galaxy, NGC 5195, which is about one-tenth the size of the Whirlpool Galaxy. The two galaxies have
            strong connection, and the interaction between them has triggered a burst of star formation in the Whirlpool
            Galaxy's spiral arms.
        </p>
        <p className='mb-3 text-justify'>
            It is M51’s companion galaxy, NGC 5195 that makes this galaxy so interesting, and it begs the questions: how
            does such a galaxy form? and, what will happen in its future, as the galaxies merge? These questions form
            the basis of our search here, as we discover how galaxies form and what happens as galaxies collide.
        </p>

        <h2 className='mb-2 mt-8 text-2xl font-semibold'>Formation</h2>
        <p className='mb-3 text-justify'>
            Galaxies are thought to form from protogalactic clouds through a process of gradual growth, where smaller
            structures merge together to form larger ones. The precise details of this process are still the subject of
            ongoing research, but there are several key steps that are believed to be involved.
        </p>
        <p className='mb-3 text-justify'>
            First, the protogalactic clouds must collapse under the force of gravity, causing the gas and dust within
            them to become more densely packed. This can trigger the formation of stars, which produce energy and
            radiation that can ionise and heat the surrounding gas{' '}
            <Reference link={href + '#3'}>(PHYS1160 Lesson 4, 2022)</Reference>. As the protogalactic clouds continue to
            collapse and form stars, they begin to merge with other clouds and smaller structures in their vicinity (May
            A. 2022). This process can be slow and gradual, or it can be more rapid if the clouds are located in a
            particularly dense region of the universe.
        </p>
        <p className='mb-3 text-justify'>
            Over time, these mergers lead to the formation of larger and more massive structures{' '}
            <Reference link={href + '#4'}>(May A. 2022)</Reference>, eventually giving rise to the galaxies that we
            observe today. The exact way in which galaxies form from protogalactic clouds can vary depending on factors
            such as the mass and composition of the clouds, the environment in which they are located, and the interplay
            between gravity, gas dynamics, and other physical processes.
        </p>
        <p className='mb-3 text-justify'>
            These conditions are what likely give galaxies their unique aspects. Protogalactic clouds that have a high
            rotation around their centre of mass tend to give rise to spiral galaxies, and those that are more static
            likely form elliptical galaxies <Reference link={href + '#3'}>(PHYS1160 Lesson 4, 2022)</Reference>.
        </p>

        <h2 className='mb-2 mt-8 text-2xl font-semibold'>Interacting Galaxies</h2>
        <p className='mb-3 text-justify'>
            While the immense size of the universe may lead us to think that collisions and interactions between
            galaxies are rare, it is actually quite the opposite. Given their size, galaxies are actually rather close
            when we are talking about the scales of the universe. This leads to many interactions between galaxies and
            sometimes even collisions.
        </p>
        <p className='mb-3 text-justify'>
            Galaxies can interact in several ways, including tidal forces, gravitational interactions, and mergers.
            Tidal forces occur when two galaxies pass close to each other, causing a distortion in their shape due to
            the gravitational attraction between them. This can cause the formation of tidal tails, which are long
            streams of stars and gas that are pulled out of the galaxy and into space. Gravitational interactions occur
            when the gravity of one galaxy affects the motion of another, causing it to change direction or speed
            <Reference link={href + '#5'}>(Anderson J. et al, 2009)</Reference>. Mergers on the other hand happen when
            two or more galaxies become so close that the attraction of gravity between them causes them to combine and
            often forms larger galaxies.
        </p>
        <p className='mb-3 text-justify'>
            Galaxy interactions can have a significant impact on the evolution of galaxies. Tidal forces, for example,
            can trigger the formation of new stars by compressing gas and dust in the galaxy. This can lead to an
            increase in the rate of star formation{' '}
            <Reference link={href + '#6'}>(Ekta A. Shah, et. al. 2022)</Reference>, which can produce large numbers of
            young, hot stars that emit intense ultraviolet radiation. This radiation can ionise the surrounding gas and
            trigger further star formation, leading to a self-perpetuating cycle of star formation that can last for
            millions of years.
        </p>
        <p className='mb-3 text-justify'>
            Gravitational interactions can also affect the evolution of galaxies by altering their structure and
            composition. As two galaxies approach each other, their gravitational fields can distort each other's shape,
            causing them to become elongated or even spiral-shaped. This can change the distribution of stars and gas
            within the galaxy, altering the overall appearance of the galaxy and potentially leading to the formation of
            new structures such as bars or rings <Reference link={href + '#5'}>(Anderson J. et al, 2009)</Reference>.
        </p>
        <p className='mb-3 text-justify'>
            If we look back at the Messier 51 galaxy, we can see these effects occurring as a result of the interaction
            between the two galaxies. The gravitational interaction has caused the spiral arms of the larger galaxy to
            stretch and form longer and more pronounced arms. In addition, the long arm connecting the two galaxies has
            become the main nursery for new stars in the galaxy due to the tidal forces occurring between the galaxies.
        </p>

        <h2 className='mb-2 mt-8 text-2xl font-semibold'>Mergers and Collisions</h2>
        <img src={image2URL} alt='Merging Galaxies' className='mt-2 w-full' />
        <span className='text-sm text-gray-700'>
            Stephan's Quintet Collision - shows the breakdown and reformation of the colliding galaxies{' '}
            <Reference link={href + '#7'}>(Anderson J. et al, 2009)</Reference>
        </span>
        <div className='h-6' />
        <p className='mb-3 text-justify'>
            Mergers can have the most dramatic effect on the evolution of galaxies. When two galaxies merge, the gas and
            dust within them can become highly compressed, triggering a burst of star formation that can produce
            millions of new stars in a relatively short period of time{' '}
            <Reference link={href + '#6'}>(Ekta A. Shah, et. al. 2022)</Reference>. The merging process can also trigger
            the formation of a supermassive black hole at the centre of the newly formed galaxy, which can grow rapidly
            as it consumes surrounding gas and dust. The merger can also disrupt the orbits of stars within the
            galaxies, causing them to be scattered throughout the new galaxy.
        </p>
        <p className='mb-3 text-justify'>
            On the other hand, when these mergers happen faster and at a more direct angle, the effect on their
            evolution can be even more pronounced. Collisions can cause large amounts of gas and dust to be ejected from
            the galaxies, leading to a decrease in star formation rates. However, collisions can also trigger star
            formation by compressing gas and dust within the galaxies{' '}
            <Reference link={href + '#6'}>(Ekta A. Shah, et. al. 2022)</Reference>. In addition, collisions can cause
            the formation of new structures such as tidal tails or bridges, which can be visible for millions of years
            after the collision has occurred.
        </p>

        <h2 className='mb-2 mt-8 text-2xl font-semibold'>Scientific Importance</h2>
        <p className='mb-3 text-justify'>
            Galaxy collisions can also trigger the formation of massive black holes. When two galaxies collide, their
            central black holes can merge, forming a new, larger black hole with a mass that is greater than the sum of
            the original black holes. This process can release large amounts of energy in the form of gravitational
            waves, which can be detected by observatories on Earth.
        </p>
        <p className='mb-3 text-justify'>
            Although, what is it that makes looking at galactic collisions and specifically black holes important?
            Learning what happens as galaxies collide gives scientists insights into how many of the galaxies we see
            today have evolved and formed as a result of mergers and collisions. As habitants of the Milky Way galaxy,
            it is also useful to know what will happen when our home galaxy eventually collides with the Andromeda
            galaxy in roughly 4.5 billion years <Reference link={href + '#8'}>(Wood A. 2023)</Reference>.
        </p>
        <p className='mb-3 text-justify'>
            As for the study of black holes, there is much to learn. It provides a way to test General Relativity in
            extreme conditions. By observing the gravitational waves emitted during a black hole collision, scientists
            can study the properties of black holes and confirm that they behave as predicted by General Relativity{' '}
            <Reference link={href + '#11'}>(NASA 2022)</Reference>. Collisions also provide a unique opportunity to
            understand the origin and evolution of these supermassive objects. By studying the mass and spin of the
            black holes involved in a collision, scientists can learn about their formation and evolution. This can help
            shed light on how black holes are formed and how they grow over time. Lastly, studying black hole collisions
            further allows us to explore the universe and learn about its history and evolution. Black hole collisions
            occur in distant galaxies, and observing the gravitational waves from these collisions can provide valuable
            information about the structure and properties of the universe itself.
        </p>
        <p className='mb-3 text-justify'>
            <span className='text-gray-700 underline'>Recent Result:</span> Scientists have recently used the Atacama
            Large Millimetre/Submillimetre Array (ALMA) observatory to discover the closest pair of black holes to Earth
            that are on the edge of merging <Reference link={href + '#8'}>(Wood A. 2023)</Reference>. This discovery
            will greatly benefit the ability to find and detect even more supermassive black holes around the universe.
            Through studying the gravitational waves that this pair of black holes emit, the scientists have been able
            to begin estimating the number of black holes that may be present at the centre of galaxies that we may not
            have detected before <Reference link={href + '#9'}>(Koss M., et. al. 2023)</Reference>. These estimations
            have turned out to suggest that there are many black holes that may not have been identified already and
            that the number is larger than previously thought. This discovery and research related to it gives a large
            insight into the way that black holes form and advance our ability to search the universe through
            gravitational waves <Reference link={href + '#9'}>(Koss M., et. al. 2023)</Reference>.
        </p>

        <h2 className='mb-2 mt-8 text-2xl font-semibold'>How can we get a closer look?</h2>
        <p className='mb-3 text-justify'>
            Galaxies can be seen in the night sky with the naked eye or with the aid of telescopes or binoculars.
            However, to see them in detail, you will need more advanced equipment such as a telescope with a larger
            aperture.
        </p>

        <p className='mb-3 text-justify'>
            Finding a dark location away from city lights with little light pollution will help you see more stars and
            galaxies. Public observatories, planetariums, and astronomy clubs are places where you can find telescopes
            and knowledgeable guides to navigate the night sky. Additionally, there are many online resources such as
            SkyMap, Stellarium, and Google Sky that allow you to explore the night sky virtually. When observing
            galaxies, it is important to look for faint, fuzzy patches of light, which may appear grey or brownish,
            rather than bright, pinpoint sources of light like stars. The best time to see galaxies is during a new moon
            when the sky is darkest.
        </p>
        <img src={image3URL} alt='Blackhole Image' className='mt-4 w-full' />
        <span className='text-sm text-gray-700'>
            Hot gas swirling around the event horizon of a black hole{' '}
            <Reference link={href + '#10'}>(NASA 2019)</Reference>
        </span>
        <div className='h-6' />
        <p className='mb-3 text-justify'>
            As for observing black holes, this is much more difficult. Firstly, a black hole is near impossible to see,
            since its gravity is so strong, not even light can escape it. However, some light and gas can be caught near
            the event horizon that remain visible. The blurry image above comes from the black hole of Messier 87, some
            55 million light years away <Reference link={href + '#10'}>(NASA 2019)</Reference>. Capturing this image was
            no easy feat, as telescopes and observatories are far too small to capture the amount of light necessary to
            see the glow around a black hole. However, scientists were able to use observatories across the globe in
            synchronisation, effectively simulating a telescope the size of the Earth{' '}
            <Reference link={href + '#12'}>(Lutz O. 2019)</Reference>.
        </p>
    </article>
)

const references: ReferenceItemProps[] = [
    {
        author: 'NASA 2015',
        title: 'APOD: 2015 May 2 - M51: The Whirlpool Galaxy',
        sponsor: 'NASA',
        accessed: '17 March 2023',
        href: 'https://apod.nasa.gov/apod/ap150502.html',
    },
    {
        author: 'Garner R. 2021',
        title: 'Messier 51 (The Whirlpool Galaxy)',
        sponsor: 'NASA',
        accessed: '17 March 2023',
        href: 'https://www.nasa.gov/feature/goddard/2017/messier-51-the-whirlpool-galaxy',
    },
    {
        author: 'UNSW 2022',
        title: 'Lesson 4 – What are galaxies? The basics of galaxy types, formation, and evolution',
        type: 'lecture notes',
        sponsor: 'PHYS1160 - Introduction to Astronomy, University of New South Wales',
        accessed: '26 March 2023',
    },
    {
        author: 'May A. 2022',
        title: 'How Galaxies Form: Theories, Variants and Growth',
        sponsor: 'Space.com',
        accessed: '12 April 2023',
        href: 'https://www.space.com/how-galaxies-form',
    },
    {
        author: 'Williams M. (Universe Today) 2016',
        title: 'What happens when galaxies collide?',
        sponsor: 'Phys.org',
        accessed: '12 April 2023',
        href: 'https://phys.org/news/2016-10-galaxies-collide.html',
    },
    {
        author: 'Ekta A. Shah, et. al. 2022',
        title: 'Investigating the Effect of Galaxy Interactions on Star Formation at 0.5<z<3.0',
        sponsor: 'arxiv.org',
        accessed: '12 April 2023',
        href: 'https://arxiv.org/abs/2209.15587#:~:text=Abstract%3A%20Observations%20and%20simulations%20of,Active%20Galactic%20Nuclei%20(AGN)',
    },
    {
        author: 'Anderson J., Watzke M. 2009',
        title: 'A Galaxy Collision in Action',
        sponsor: 'NASA',
        accessed: '12 April 2023',
        href: 'https://www.nasa.gov/mission_pages/chandra/multimedia/photo09-049.html',
    },
    {
        author: 'Wood A. 2023',
        title: 'Scientists Have Discovered a Monstrous Pair of Supermassive Black Holes That Are Destined to Collide',
        sponsor: 'IGN.com',
        accessed: '12 April 2023',
        href: 'https://www.ign.com/articles/scientists-have-discovered-a-monstrous-pair-of-supermassive-black-holes-that-are-destined-to-collide',
    },
    {
        author: 'Recent Result: Koss M., et. al. 2023',
        title: 'UGC 4211: A Confirmed Dual Active Galactic Nucleus in the Local Universe at 230 pc Nuclear Separation',
        sponsor: 'The Astrophysical Journal Letters',
        accessed: '12 April 2023',
        href: 'https://iopscience.iop.org/article/10.3847/2041-8213/aca8f0',
    },
    {
        author: 'NASA 2019',
        title: 'Black Hole Image Makes History; NASA Telescopes Coordinated Observations',
        sponsor: 'NASA',
        type: 'image and background report',
        accessed: '14 April 2023',
        href: 'https://www.nasa.gov/mission_pages/chandra/news/black-hole-image-makes-history',
    },
    {
        author: 'NASA 2022',
        title: 'Scientists Have Discovered a Monstrous Pair of Supermassive Black Holes That Are Destined to Collide',
        sponsor: 'NASA',
        accessed: '14 April 2023',
        href: 'https://science.nasa.gov/astrophysics/focus-areas/black-holes',
    },
    {
        author: 'Lutz O. 2019',
        title: 'How Scientists Captured the First Image of a Black Hole',
        sponsor: 'NASA',
        accessed: '14 April 2023',
        href: 'https://www.jpl.nasa.gov/edu/news/2019/4/19/how-scientists-captured-the-first-image-of-a-black-hole/',
    },
]

const References = () => {
    React.useEffect(() => {
        console.log(window.location.hash.slice(1))
    }, [])

    return (
        <div>
            <h1 className='mt-8 text-4xl font-semibold'>References</h1>
            {references.map((ref, index) => (
                <ReferenceItem
                    key={'ref ' + (index + 1)}
                    id={index + 1}
                    selected={window.location.hash.slice(1)}
                    author={ref.author}
                    title={ref.title}
                    sponsor={ref.sponsor}
                    type={ref.type}
                    accessed={ref.accessed}
                    href={ref.href}
                />
            ))}
        </div>
    )
}
