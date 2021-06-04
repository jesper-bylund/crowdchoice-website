import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to the crowchoice project website, where we collect all the open source material for the crowdchoice app.

          Based on an idea made popular by <a href="https://twitter.com/balajis/status/1307535361149603845">Balajis</a>, read more about it <a href="https://1729.com/miami/">here</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Changelog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            Set up the Open Source site and repo
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={'2021-06-04'} />
            </small>
            &nbsp;—&nbsp;
            <small className={utilStyles.lightText}>
              <a href="https://twitter.com/jesperbylund">@JesperBylund</a>
            </small>
          </li>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
