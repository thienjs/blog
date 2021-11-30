import Head from "next/head"
import ContainerBlock from "../components/ContainerBlock"
import userData from "@constants/data"
import LatestCode from "@components/LatestCode"
import getLatestRepos from "@lib/getLatestRepos"
import Timeline from "@components/Timeline"
import axios from "axios"

export default function Home({ posts }) {
  return (
    <ContainerBlock
      title="Thien Tran"
      description="blog to get a job"
    >
      <Timeline/>
      <h1>{posts[0].title}</h1>
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/posts")

  return {
    props: {
      posts: postsRes.data
    }
  }
}