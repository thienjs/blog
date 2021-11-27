import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import userData from "@constants/data";
import LatestCode from "@components/LatestCode";
import getLatestRepos from "@lib/getLatestRepos";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Thien Tran"
      description="blog to get a job"
    >
     <LatestCode repositories={repositories} />

    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
