/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation'
import { allAuthors, allPosts } from 'contentlayer/generated'

import '@/styles/mdx.css'
import { Metadata } from 'next'

import { absoluteUrl } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { BlogPostWrapper } from '@/components/blog-post-wrapper'

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: any) {
    const slug = params?.slug?.join('/')
    const post = allPosts.find((post) => post.slugAsParams === slug)

    if (!post) {
        null
    }

    return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    // const url = process.env.NEXT_PUBLIC_APP_URL

    // const ogUrl = new URL(`${url}/api/og`)
    // ogUrl.searchParams.set('heading', post.title)
    // ogUrl.searchParams.set('type', 'Blog Post')
    // ogUrl.searchParams.set('mode', 'dark')

    return {
        title: post.title,
        description: post.description,
        authors: post.authors.map((author) => ({
            name: author,
        })),
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: absoluteUrl(post.slug),
            images: [
                // {
                //     url: ogUrl.toString(),
                //     width: 1200,
                //     height: 630,
                //     alt: post.title,
                // },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            // images: [ogUrl.toString()],
        },
    }
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
    return allPosts.map((post) => ({
        slug: post.slugAsParams.split('/'),
    }))
}

interface PostPageProps {
    params: {
        slug: string[]
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params)
    if (!post) {
        notFound()
    }

    const authors = post.authors.map((author) => allAuthors.find(({ slug }) => slug === `/authors/${author}`))
    return (
        <>
            <SiteHeader />
            <article className="mx-auto max-w-xl py-8">
                <BlogPostWrapper post={post} authors={authors} />
            </article>
        </>
    )
}
