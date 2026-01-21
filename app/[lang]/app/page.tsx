import Breakpoint from '../../components/Breakpoint/Breakpoint'
import MainContainer from '../../components/Containers/MainContainer'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './page.module.css'
import { getDictionary } from '../dictionaries'
import Link from 'next/link'
import { formatText } from '@/utils/text'
import AppForm from '@/app/components/App/Forms/AppForm'

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <>
        <div className={styles.container}>
            <AppForm lang={lang} dict={dict} />
        </div>
    </>
}