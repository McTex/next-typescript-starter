import { NextPage } from 'next';
import Link from 'next/link'

const IndexPage: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <p>Hello world! - <b>useragent</b>: {userAgent}</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </>
);

IndexPage.getInitialProps = async ({ req }) => {
  console.log('when')
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};
export default IndexPage;
