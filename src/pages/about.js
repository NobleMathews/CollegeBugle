import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import SEO from 'components/seo';
import Layout from 'layout/layout';
import Markdown from 'styles/markdown';
import { rhythm } from 'styles/typography';
import {members, newsletter} from '../data'
import Image from '../components/imager';

const About = () => {

  return (
    <Layout>
      <SEO title="About" />
      <FadeIn>
      <Container
        rhythm={rhythm}
      >
      <h2>Newsletter Committee</h2>
      <hr/>
      <>
        <div className="img-grid lab-member">
        {newsletter.map((member) => (
          <figure key={Math.random()} className="figure">
            <a
              href={`${member.link}`}
              target="_blank"
              referrerPolicy="no-referrer"
            >
            <div className="img-wrap">
              <Image
                // className="rounded"
                filename={member.key}
                />
            </div>
            </a>
            <figcaption style={{padding:"0px",textAlign:"center",paddingTop:"10px"}} className="figure-caption text-center">
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
              <b>{member.title}</b>
              </a>
              <br/>
              {/* <p style={{textAlign:"center",fontWeight:"bold",fontSize:"small!important",margin:"0px"}}>{member.pos}</p> */}
            </figcaption>
          </figure>
        ))}
        </div>
      </>
      <h2>Literary Affairs Council 2020</h2>
      <hr/>
      <>
        <div className="img-grid lab-member">
        {members.map((member) => (
          <figure key={Math.random()} className="figure">
            <a
              href={`${member.link}`}
              target="_blank"
              referrerPolicy="no-referrer"
            >
            <div className="img-wrap">
              <Image
                // className="rounded"
                filename={member.key}
                />
            </div>
            </a>
            <figcaption style={{padding:"0px",textAlign:"center",paddingTop:"10px"}} className="figure-caption text-center">
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
              <b>{member.title}</b>
              </a>
              <br/>
              <p style={{textAlign:"center",fontWeight:"bold",fontSize:"small!important",margin:"0px"}}>{member.pos}</p>
            </figcaption>
          </figure>
        ))}
        </div>
      </>
      </Container>
      </FadeIn>
    </Layout>
  );
};

const Container = styled(Markdown).attrs({
  as: 'main',
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }
  figure{
    transition: all 0.3s;
  }
  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
  .img-grid{
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
    box-sizing: border-box;
  }
  .img-wrap{
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    /* padding controls height, will always be perfectly square regardless of width */
    position: relative;
    opacity: 0.8;
    border-radius: 50%;

  }

  .gatsby-image-wrapper{
    /* min-width: 100%;
    min-height: 100%;
    height: 100%;
    position: initial!important;
    top: 50%;
    left: -50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    position initial!important;
  }
  /* Grid changes on medium sized screens: */
@media screen and (min-width: 500px) {
  
  .img-grid {
    /* Two equally sized colums, 1 fraction or "fr" each: */
    grid-template-columns: repeat(3, 1fr);

  }

}
figure:hover{
  transform:scale(1.05)
}
figure:hover .img-wrap{
  opacity: 1
}
p{
  font-size:smaller
}
/* Grid changes again on larger screens: */
@media screen and (min-width: 1000px) {
  
  .img-grid {
    /* Three equally sized colums, 1 fraction or "fr" each: */
    grid-template-columns: repeat(4, 1fr);
  }

}
`;

export default About;
