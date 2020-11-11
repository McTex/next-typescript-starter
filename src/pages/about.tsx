import { NextPage } from 'next';
import Link from 'next/link'

const AboutPage: NextPage<{ userAgent: string }> = () => (
  <>
    <p>ABOUT</p>
    <Link href="/">
      <a>Top Page</a>
    </Link>
  </>
);

export default AboutPage;
