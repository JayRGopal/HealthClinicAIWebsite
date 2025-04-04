import { getBlogPost } from "@/server/db";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { SocialShareButtons } from "./_components/SocialShareButtons";
import { AuthorInfo } from "./_components/AuthorInfo";
import { RelatedPosts } from "./_components/RelatedPosts";
import { NewsletterSignup } from "./_components/NewsletterSignup";
import { TableOfContents } from "./_components/TableOfContents";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const sampleHeadings = [
  "Introduction",
  "The Challenge in Healthcare",
  "How AI is Transforming Medical Billing",
  "Benefits for Healthcare Providers",
  "Implementation Strategies",
  "Future Outlook",
];

const author = {
  name: "Dr. Sarah Johnson",
  role: "Healthcare Technology Specialist",
  avatar: "/images/blog/author.jpg",
};

interface BlogPostPageProps {
  params: { id: string };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  let post;

  try {
    post = await getBlogPost(params.id);
  } catch (error) {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={post.title}
        description="Insights and perspectives on healthcare technology and innovation"
        data-oid="-yil76n"
      />

      <section className="py-16 lg:py-24" data-oid="2ejske-">
        <div className="container" data-oid="p.5e62q">
          <div className="mx-auto max-w-4xl" data-oid="vsdlvzh">
            {/* Featured Image */}
            <div
              className="mb-8 overflow-hidden rounded-2xl"
              data-oid="8wp9b5l"
            >
              <Image
                src={post.mainImage}
                alt={post.title}
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                priority
                data-oid="ft:g56_"
              />
            </div>

            {/* Post Header */}
            <div className="mb-12" data-oid=":vwenw0">
              <div
                className="mb-6 flex flex-wrap items-center justify-between gap-4"
                data-oid="y71jbhu"
              >
                <div className="flex items-center gap-4" data-oid="uaenbvq">
                  <span
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    data-oid="lxm7wyg"
                  >
                    Healthcare
                  </span>
                  <span
                    className="text-sm text-gray-500 dark:text-gray-400"
                    data-oid="v0z5pvo"
                  >
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <SocialShareButtons data-oid="p.a.ln-" />
              </div>

              <h1
                className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
                data-oid="hjg.ioy"
              >
                {post.title}
              </h1>

              <AuthorInfo author={author} data-oid="plb3krm" />
            </div>
          </div>

          {/* Content Area with Sidebar */}
          <div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-4"
            data-oid="5.dnnpq"
          >
            {/* Table of Contents Sidebar */}
            <div className="hidden lg:block" data-oid="gb.gqa6">
              <TableOfContents headings={sampleHeadings} data-oid="i..gerg" />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3" data-oid="q1rxbxu">
              <article
                className="prose prose-lg max-w-none dark:prose-invert"
                data-oid="p5-ttro"
              >
                <p data-oid="yd128qk">{post.content}</p>
              </article>

              {/* Related Posts */}
              <RelatedPosts currentPostId={params.id} data-oid="i_bpoie" />

              {/* Newsletter Signup */}
              <NewsletterSignup data-oid="i9zit3w" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate static params for common blog posts
export async function generateStaticParams() {
  return [];
}
