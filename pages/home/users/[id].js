import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../cmp/Layout";
export default function ContactId() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
        
        <Layout id={id}>

        </Layout>
            
        <Link href={`posts/${id}`}>addPost</Link>
        <Link href={`getposts/${id}`}>allPosts</Link>
    </>
  );
}