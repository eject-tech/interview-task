import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-unfetch';

interface HomeProps {
  fonts: string;
}

const Home = ({fonts}: HomeProps) => {
  // Example prop
  console.log(fonts);

  return (
    <main className="relative w-full h-full bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-900 pt-20">Hello World</h1>
    </main>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({req}) => {

  return {
    props: {
      fonts: "An example prop",
    }
  }
};
