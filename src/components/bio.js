import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import { rhythm } from '../utils/typography';

function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            title
            company {
              name
              url
            }
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author.name}</strong> works at{` `}
        <a href={author.company.url}>{author.company.name}</a> as a {` `}
        {author.title}. In his free time he writes posts about HTML,
        CSS and JavaScript.
      </p>
    </div>
  );
}

export default Bio;
