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
        
          <div className="cotainer">
            <Link href={`posts/${id}`}>addPost</Link>
            <Link href={`getposts/${id}`}>{`${id}`}</Link>
          </div>
        
    </>
  );
}