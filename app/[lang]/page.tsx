import Breakpoint from '../components/Breakpoint/Breakpoint'
import MainContainer from '../components/Containers/MainContainer'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './page.module.css'
import { getDictionary } from './dictionaries'
import Button from '../components/Buttons/Button'
import Link from 'next/link'
import { formatText } from '@/utils/text'
import CliPreview from '../components/Previews/CliPreview'
import TitledSection from '../components/Sections/TitledSection'
import FeatureCard from '../components/Cards/FeatureCard'
import { faBoltLightning, faBrain, faShield } from '@fortawesome/free-solid-svg-icons'
import StepSection from '../components/Sections/StepSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface PageProps {
  params: Promise<{ lang: string }>;
}

const advantagesIconsMap = [faShield, faBrain, faBoltLightning];

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <>
    <Header
      lang={lang}
      dict={dict}
      activeLink=''
    />

    <MainContainer style={{ minHeight: '90dvh' }}>
      <Breakpoint>
        <div className={styles.banner}>
          <div className={styles.container}>
            <h1 className={styles.title}>{formatText(dict.homepage.banner.title)}</h1>
            <p className={styles.description}>{formatText(dict.homepage.banner.description)}</p>
            <div className={styles.actions}>
              <Button>{dict.homepage.banner.cta}</Button>
              <Link href={`https://github.com/MatteoCigognini/comentia-cli`} target='_blank'>
                <Button variant='white'><FontAwesomeIcon icon={faGithub} /> GitHub</Button>
              </Link>
            </div>
          </div>
          <div className={styles.preview}>
            <CliPreview lang={lang} dict={dict} />
          </div>
        </div>

        {/* Che problema risolve? */}
        <TitledSection
          title={dict.homepage.advantages.title}
          description={dict.homepage.advantages.description}>
          <div className={styles.advantages}>
            {dict.homepage.advantages.cards.map((c, i) => <FeatureCard
              key={`advantage-${i}`}
              title={c.title}
              description={c.description}
              icon={advantagesIconsMap[i]}
            />)}
          </div>

          <p className={styles.disclaimer}>{dict.homepage.advantages.disclaimer}</p>
        </TitledSection>

        {/* Qual'è la soluzione? */}
        <TitledSection
          title={dict.homepage.howItWorks.title}
          description={dict.homepage.howItWorks.description}>
          <StepSection steps={dict.homepage.howItWorks.timline} />
        </TitledSection>
      </Breakpoint>
    </MainContainer>
    <Footer lang={lang} dict={dict} />
  </>
}