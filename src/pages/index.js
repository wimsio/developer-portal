import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Get Started",
    imageUrl: "img/card-getting-started.svg",
    targetUrl: "docs/getting-started/overview",
    description: (
      <>
        Welcome to the Cardano Developer portal. This category will help you
        find your way around quickly.
      </>
    ),
  },
  {
    title: "Integrate Cardano",
    imageUrl: "img/card-payment-integration.svg",
    targetUrl: "docs/cardano-integration/overview",
    description: (
      <>How to integrate Cardano into existing websites and services.</>
    ),
  },
  {
    title: "Build with Transaction Metadata",
    imageUrl: "img/card-transaction-metadata.svg",
    targetUrl: "docs/transaction-metadata/overview",
    description: (
      <>
        Learn what transaction metadata is, how to add it to a transaction, how
        to view the metadata and what potential use cases are.
      </>
    ),
  },
  {
    title: "Discover Native Tokens",
    imageUrl: "img/card-native-tokens.svg",
    targetUrl: "docs/native-tokens/overview",
    description: (
      <>
        Learn what native tokens are, how to mint them, which policies can be
        used and how to create NFT.
      </>
    ),
  },
  {
    title: "Fund a Project",
    imageUrl: "img/card-funding.svg",
    targetUrl: "docs/funding/overview",
    description: (
      <>Find out what opportunities are available to get your project funded.</>
    ),
  },
  {
    title: "Operate a Stake Pool",
    imageUrl: "img/card-stake-pool-course.svg",
    targetUrl: "docs/stake-pool-operation/overview",
    description: (
      <>
        Learn what it takes to become a Cardano stake pool operator from a
        technical and marketing perspective.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, targetUrl }) {
  const imgUrl = useBaseUrl(imageUrl); // not used right now
  const trgUrl = useBaseUrl(targetUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {targetUrl && (
        <Link className="navbar__link" to={trgUrl}>
          <div className="card">
            <div className="card__header">
              {imgUrl && (
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={imgUrl}
                    alt={title}
                  />
                </div>
              )}
              <h3>{title}</h3>
            </div>
            <div className="card__body">
              <p>{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Overview`} description="Cardano Developer Portal">
      <header className={clsx("hero hero--primary", styles.heroBanner)} style={{backgroundImage: "url('/img/hero-header-zoom.png')"}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/overview")}
            >
              Getting Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;