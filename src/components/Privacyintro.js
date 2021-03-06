import React from "react";
import {
  Wrapper,
  Container,
  Headingtext,
  Text,
} from "../style/Cookiestyle/privacyintrocss";

const Privacyintro = () => {
  return (
    <Wrapper>
      <Container>
        <Headingtext>Introduction</Headingtext>
        <Text>
          This Privacy Policy (“Policy”) outlines Good Loans practices in
          relation to the storage, use, processing, and disclosure of personal
          data that you have chosen to share with us when you use our mobile
          application
        </Text>
        <Text>
          At Lood Loans, we are committed to protecting your personal data and
          respecting your privacy. Please read the following terms of the Policy
          carefully to understand our practices regarding your personal data and
          how we will treat it. This Policy sets out the basis on which any
          personal data we collect from you, we collect about you, or that you
          provide to us, will be processed by us.
        </Text>
      </Container>

      <Container>
        <Headingtext>The data we collect about you</Headingtext>
        <Text>
          Identity and profile-related data: This includes your first and last
          name, username or similar identifiers, gender, title, photographs,
          educational qualifications and background, marital status, feedback,
          and survey responses.
        </Text>
        <Text>
          Contact data: This includes your email addresses, phone numbers, and
          residential address.
        </Text>
        <Text>
          Location data: This includes collection of current location details
          through GPS (Fine and Coarse GPS data fetched in the background).
        </Text>
        <Text>
          KYC data: This includes identification documents issued by the
          government or other authorities, and includes details of or pertaining
          to your Aadhaar, PAN card, voter ID, and ration card.
        </Text>
        <Text>
          Transaction data: This includes details of transactions that may occur
          through the App or in connection with the Services. For example,
          transaction data may include the services you have sought or availed
          through the App or confirmations of such services.
        </Text>
        <Text>
          Data from SMSs: We collect certain information from your SMSs. Please
          note that such data is limited to details of the transactions
          contained in the SMS. We do not collect, read or store bank OTPs,
          personal SMSs, account details, etc.
        </Text>
        <Text>
          Financial data: This includes your past credit history, income
          details, details of loans issued or otherwise applied for through the
          App, payments and repayments thereof, bank account details, and bank
          account statements.
        </Text>
        <Text>
          Marketing and communications data: This includes your preferences in
          receiving marketing messages from us and our third parties and your
          communication preferences.
        </Text>
        <Text>
          Device data: This includes your IP addresses, browser types and
          versions, time zone settings, operating systems, and device
          information.
        </Text>
        <Text>
          Usage data: This includes information about how you use the Services.
        </Text>
      </Container>
      <Container>
        <Headingtext>How we collect data about you?</Headingtext>
        <Text>
          Information you provide us: This is the information (including
          identity, contact, KYC, financial, and device data) you consent to
          give us when you use our Services or when you correspond with us (for
          example, by email or chat, or through the App). It includes
          information you provide when you register to use the Services, use an
          App feature, share data through the App, or when you report a problem
          with the App and our Services. If you contact us, we will keep a
          record of the information shared during the correspondence.
        </Text>
        <Text>
          Information we collect about you and your device: Each time you visit
          the App or use the Services, we will automatically collect personal
          data through the use of tools like cookies.
        </Text>
        <Text>
          Information we receive from other sources including third parties and
          publicly available sources: We will receive personal data about you
          from various third parties and public sources including our third
          parties, Google analytics for advertising and user analytics purposes,
          and other publicly available sources.
        </Text>
      </Container>
      <Container>
        <Headingtext>How we share your personal data?</Headingtext>
        <Text>
          You agree and acknowledge that any and all information pertaining to
          you, whether or not you directly provide it to us (via the Services or
          otherwise), including but not limited to personal correspondence such
          as emails, instructions from you, etc., may be collected, compiled,
          and shared by us in order to render the Services to you. This may
          include but not be limited to Lenders (as defined in the Terms),
          storage providers, data analytics providers, consultants, lawyers, and
          auditors. We may also share this information with other entities in
          the Money View group in connection with the abovementioned purposes.
        </Text>
        <Text>
          You agree and acknowledge that we may share data where we are required
          by law, any court, a government agency, or authority to disclose such
          information. Such disclosures are made in good faith and belief that
          it is reasonably necessary to do so for enforcing this Policy or the
          Terms, or in order to comply with any applicable laws and regulations.
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Privacyintro;
