import React from "react";
import {
  ContentWrapper,
  TextHead,
  Text,
  Container,
  Wrapper,
} from "../style/Cookiestyle/cookiecontentcss";

const CookieContent = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <TextHead>What are cookies?</TextHead>
          <Text>
            Cookies are small pieces of data, stored in text files, that are
            stored on your computer or other device when websites are loaded in
            a browser. They are widely used to “remember” you and your
            preferences, either for a single visit (through a “session cookie”)
            or for multiple repeat visits (using a “persistent cookie”). They
            ensure a consistent and efficient experience for visitors, and
            perform essential functions such as allowing users to register and
            remain logged in. Cookies may be set by the site that you are
            visiting (known as “first party cookies”), or by third parties, such
            as those who serve content or provide advertising or analytics
            services on the website (“third party cookies”).
          </Text>
          <Text>
            Both websites and HTML emails may also contain other tracking
            technologies such as “web beacons” or “pixels.” These are typically
            small transparent images that provide us with statistics, for
            similar purposes as cookies. They are often used in conjunction with
            cookies, though they are not stored on your computer in the same
            way. As a result, if you disable cookies, web beacons may still
            load, but their functionality will be restricted.
          </Text>
        </ContentWrapper>
        <ContentWrapper>
          <TextHead>How we use cookies?</TextHead>
          <Text>
            We use cookies for a number of different purposes. Some cookies are
            necessary for technical reasons; some enable a personalized
            experience for both visitors and registered users; and some allow
            the display of advertising from selected third party networks. Some
            of these cookies may be set when a page is loaded, or when a visitor
            takes a particular action (clicking the “like” or “follow” button on
            a post, for example).
          </Text>
          <Text>
            Many of the cookies we use are only set if you are a registered
            WordPress.com user (so you don’t have to log in every time, for
            example), while others are set whenever you visit one of our
            websites, irrespective of whether you have an account.
          </Text>
          <Text>
            For more information on the choices you have about the cookies we
            use, please see the Controlling Cookies section below.
          </Text>
        </ContentWrapper>
        <ContentWrapper>
          <TextHead>Where we use cookies?</TextHead>
          <Text>
            We set cookies in a number of different locations across our
            services. These include:
          </Text>
          <Text>
            On our websites (including automattic.com, wordpress.com,
            vip.wordpress.com, jetpack.com, woocommerce.com, crowdsignal.com,
            gravatar.com, intensedebate.com, vaultpress.com, akismet.com,
            simplenote.com, simperium.com, leandomainsearch.com, cloudup.com,
            longreads.com, and happy.tools). In the administrative dashboards of
            our websites, such as Calypso and wp-admin.
          </Text>
          <Text>On sites we host for our users.</Text>
          <Text>On sites that use our plugins (e.g. Jetpack).</Text>
          <Text>In the emails we send.</Text>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default CookieContent;
