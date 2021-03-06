import { Link, graphql } from 'gatsby';
import React from 'react';

import { rhythm, scale } from '../utils/typography';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';

function Translations(props) {
  const { translations } = props;

  return (
    <section
      style={{
        marginBottom: rhythm(1),
      }}
    >
      <p>
        Translations available:{' '}
        {translations.map(translation => {
          const language = translation.langKey === 'es' ? 'Español' : 'English';

          return (
            <Link key={translation.langKey} to={translation.slug}>
              {language}
            </Link>
          );
        })}
      </p>
    </section>
  );
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const {
      currentLanguage,
      translations,
      previous,
      next,
    } = this.props.pageContext;
    const url = `${this.props.data.site.siteMetadata.url}${this.props.data.markdownRemark.fields.slug}`;
    const twitter = this.props.data.site.siteMetadata.social.twitter;
    const postTitle = this.props.data.markdownRemark.frontmatter.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          {translations && translations.length > 0 && (
            <Translations
              current={currentLanguage}
              translations={translations}
            />
          )}
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <Share url={url} title={postTitle} twitter={twitter} />

        {/* TODO: create nav in the same language */}
        {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        url
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
