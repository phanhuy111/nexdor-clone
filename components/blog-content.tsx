'use client';

import * as React from 'react';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <>
      <article className="prose max-w-none blog-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      <style jsx global>{`
        .blog-content img {
          width: 70% !important;
          height: auto !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
          margin-top: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        
        .blog-content figure {
          width: 100% !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        .blog-content figure img {
          margin-top: 0 !important;
        }
        
        .blog-content .wp-caption {
          width: 100% !important;
          text-align: center !important;
        }
        
        /* Ensures image captions are also centered */
        .blog-content figcaption {
          text-align: center !important;
        }
      `}</style>
    </>
  );
} 