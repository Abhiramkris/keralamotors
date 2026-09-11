import { redirect } from "next/navigation";

export default async function BlogSlugRootRedirect({ params }) {
  const { slug } = await params;
  redirect(`/en/blog/${slug}`);
}
