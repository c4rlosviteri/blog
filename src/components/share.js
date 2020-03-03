import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

function Share({ url, title, twitter }) {
  return (
    <div
      style={{
        margin: '0 -12px 30px',
      }}
    >
      <FacebookShareButton
        style={{
          '--color': '#3b5998',
          border: '1px solid var(--color)',
          borderRadius: 3,
          color: 'var(--color)',
          marginRight: 10,
          padding: '8px 12px',
        }}
        url={url}
      >
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton
        style={{
          '--color': '#55acee',
          border: '1px solid var(--color)',
          borderRadius: 3,
          color: 'var(--color)',
          marginRight: 10,
          padding: '8px 12px',
        }}
        url={url}
        title={title}
        via={twitter}
      >
        Share on Twitter
      </TwitterShareButton>
      <LinkedinShareButton
        style={{
          '--color': '#0e76a8',
          border: '1px solid var(--color)',
          borderRadius: 3,
          color: 'var(--color)',
          padding: '8px 12px',
        }}
        url={url}
        title={title}
      >
        Share on LinkedIn
      </LinkedinShareButton>
    </div>
  );
}

export default Share;
