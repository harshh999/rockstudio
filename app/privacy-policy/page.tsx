import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rocks Studio.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const tableOfContents = [
    { number: 1, title: "WHAT INFORMATION DO WE COLLECT?", id: "section-1" },
    { number: 2, title: "HOW DO WE USE YOUR INFORMATION?", id: "section-2" },
    { number: 3, title: "WILL YOUR INFORMATION BE SHARED WITH ANYONE?", id: "section-3" },
    { number: 4, title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?", id: "section-4" },
    { number: 5, title: "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?", id: "section-5" },
    { number: 6, title: "HOW LONG DO WE KEEP YOUR INFORMATION?", id: "section-6" },
    { number: 7, title: "HOW DO WE KEEP YOUR INFORMATION SAFE?", id: "section-7" },
    { number: 8, title: "WHAT ARE YOUR PRIVACY RIGHTS?", id: "section-8" },
    { number: 9, title: "DO WE MAKE UPDATES TO THIS NOTICE?", id: "section-9" },
    { number: 10, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?", id: "section-10" },
    { number: 11, title: "HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?", id: "section-11" },
  ];

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-stone-800 pt-36 pb-24 sm:pt-44 sm:pb-32 px-5 sm:px-8">
      <div className="mx-auto max-w-[940px]">
        {/* ============================================================ */}
        {/* PAGE INTRO                                                   */}
        {/* ============================================================ */}
        <header className="border-b border-stone-200/80 pb-10 sm:pb-12 mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold block">
            PRIVACY POLICY
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-stone-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-stone-500 font-normal">
            Last updated July 26, 2022
          </p>
        </header>

        {/* ============================================================ */}
        {/* PREAMBLE & PRE-TOC LEGAL NOTICES                             */}
        {/* ============================================================ */}
        <div className="text-[16px] sm:text-[17px] leading-[1.8] text-stone-700 space-y-6">
          <p>
            Thank you for choosing to be part of our community at Rocks Studio owned by{" "}
            <a
              href="https://g.page/rocksstudioahemdabad?share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline underline-offset-4 decoration-stone-400 hover:text-warm-gold hover:decoration-warm-gold transition-colors font-medium"
            >
              ROCKS STUDIO – Marble supplier | Granite supplier | Wall Cladding Supplier In India
            </a>
            , doing business as Rocks Studio (“Rocks Studio”, “we”, “us”, “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at{" "}
            <a
              href="mailto:rocksstudio2017@gmail.com"
              className="text-stone-900 underline underline-offset-4 decoration-stone-400 hover:text-warm-gold hover:decoration-warm-gold transition-colors font-medium"
            >
              rocksstudio2017@gmail.com
            </a>
          </p>

          <p>
            When you visit our website{" "}
            <a
              href="https://rocksstudio.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline underline-offset-4 decoration-stone-400 hover:text-warm-gold hover:decoration-warm-gold transition-colors font-medium"
            >
              https://rocksstudio.in/
            </a>{" "}
            (the “Website”), use our mobile application (the “App”), as the case may be and more generally, use any of our services (the “Services”, which include the Website and App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
          </p>

          <p>
            This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.
          </p>

          {/* Warranty Disclaimer */}
          <div className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
              Warranty Disclaimer:
            </h2>
            <p className="mb-4">
              The Website and Services provided on the Website are provided on an “as is” and “as available” basis. Rocks Studio expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and security and accuracy, as well as all warranties arising by usage of trade, course of dealing, or course of performance.
            </p>
            <p className="mb-3">
              Rocks Studio makes no warranty, and expressly disclaims any obligation, that:
            </p>
            <ul className="space-y-2 pl-6 list-none mb-4">
              <li className="relative pl-6 before:content-['(a)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                the Website content will be up-to-date, complete, comprehensive, accurate or applicable to your circumstances;
              </li>
              <li className="relative pl-6 before:content-['(b)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                the Website will meet your requirements or will be available on an uninterrupted, timely, secure, or error-free basis;
              </li>
              <li className="relative pl-6 before:content-['(c)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                the results that may be obtained from the use of the Website or Services offered through the Website will be accurate or reliable; or
              </li>
              <li className="relative pl-6 before:content-['(d)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                the quality of any products, services, information, or other material obtained by you through the Website will meet your expectations.
              </li>
            </ul>
            <p>
              The Website content may contain inaccuracies and typographical errors. Rocks Studio does not warrant the accuracy or completeness of any such content or the reliability of any advice, opinion, statement or other information displayed or distributed through the Website. You acknowledge that any reliance on any such opinion, advice, statement or information shall be at your sole risk. Rocks Studio does not endorse or represent any partner or service provider listed on this Website.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
              Limitation of Liability:
            </h2>
            <p className="mb-3">
              Rocks Studio (including its officers, directors, employees, representatives, affiliates, partners and providers) will not be responsible or liable for:
            </p>
            <ul className="space-y-2 pl-6 list-none mb-4">
              <li className="relative pl-6 before:content-['(a)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                any injury, loss, claim, accident, delay, or any direct, special, exemplary, punitive, indirect, incidental or consequential damages of any kind, whether based in contract, tort, strict liability or otherwise, that arise out of or is in any way connected with (i) any failure or delay (including without limitation the use of or inability to use any component of the Website or the Services), or (ii) any use of the Website or content, or (iii) the performance or non-performance by us or any partner or service provider, even if we have been advised of the possibility of damages to such parties or any other party, or
              </li>
              <li className="relative pl-6 before:content-['(b)'] before:absolute before:left-0 before:font-medium before:text-stone-600">
                any damages to or viruses that may infect your computer equipment or other property as the result of your access to the Website or your downloading of any content from the Website.
              </li>
            </ul>
          </div>

          {/* Indemnification */}
          <div className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
              Indemnification:
            </h2>
            <p>
              You / Yourself hereby agree to defend, hold harmless and indemnify Rocks Studio, its officers &amp; directors from and against any and all losses, costs, expenses, damages or other liabilities incurred by Rocks Studio and/or its directors and officers, from and against any cost, liability, loss, damage, cause of action, claim, suit, proceeding, demand or action brought by a third party against Rocks Studio and/or its officers &amp; directors, due to or arising out of or in connection with your use of the Website or Content or your breach of any provision of the terms or any negligent or intentional wrongdoing on your part.
            </p>
          </div>

          {/* Trademark */}
          <div className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
              Trademark:
            </h2>
            <p>
              Rocks Studio logos and marks appearing in this site / app are registered and/or pending registration in the name of Rock Studio or are used under license by its affiliates in the areas where Rocks Studio markets products bearing these trademarks. The use or misuse of these trademarks or any other content on this site is strictly prohibited.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-4 tracking-tight">
              Copyright:
            </h2>
            <p>
              The copyright on this website belongs to Rocks Studio and may be copied and used only for personal and non-commercial purposes (except as previously authorized in writing by Rocks Studio).
            </p>
          </div>

          {/* Note 1 */}
          <div className="p-5 sm:p-6 bg-stone-100/70 border-l-2 border-warm-gold rounded-sm my-6 text-stone-700">
            <p>
              <strong className="text-stone-900 font-semibold">Note:</strong> You acknowledge that, we will only disclose your information in an aggregated form which is not capable of being used or interpreted in such a manner as to identify you under Applicable law and procedure. We collect and store your Correspondence Information to: (a) comply with our obligations under law; and (b) monitor your use of our Services in order to ensure your compliance with our Terms of Service.
            </p>
          </div>

          {/* Note 2 */}
          <div className="p-5 sm:p-6 bg-stone-100/70 border-l-2 border-warm-gold rounded-sm my-6 text-stone-700">
            <p>
              <strong className="text-stone-900 font-semibold">Note:</strong> However, as effective as encryption technology is, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply won’t be intercepted while being transmitted to us over the Internet. Any transmission of information by you to our Application is at your own risk. We recommend that you do not disclose your password to anyone.
            </p>
          </div>

          <p className="pt-2 font-medium text-stone-800">
            Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
          </p>
        </div>

        {/* ============================================================ */}
        {/* TABLE OF CONTENTS                                            */}
        {/* ============================================================ */}
        <section
          aria-labelledby="toc-heading"
          className="my-14 sm:my-16 p-6 sm:p-8 bg-white border border-stone-200/80 rounded-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
        >
          <h2
            id="toc-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold mb-6"
          >
            TABLE OF CONTENTS
          </h2>
          <ol className="space-y-3 text-[15px] sm:text-[16px]">
            {tableOfContents.map((item) => (
              <li key={item.number} className="leading-snug">
                <a
                  href={`#${item.id}`}
                  className="text-stone-700 hover:text-stone-900 hover:underline underline-offset-4 transition-colors flex items-baseline gap-2"
                >
                  <span className="text-xs text-stone-400 font-mono font-medium shrink-0">
                    {item.number}.
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ============================================================ */}
        {/* NUMBERED SECTIONS                                            */}
        {/* ============================================================ */}
        <div className="text-[16px] sm:text-[17px] leading-[1.8] text-stone-700 space-y-14 sm:space-y-16">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <div className="space-y-4">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-stone-900">
                Information collected through our App
              </h3>
              <p>
                We do not collect any information through our App except for your personal information required to login either through your Social Media or your Google account.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              2. HOW DO WE USE YOUR INFORMATION?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> We process your information for purposes based on legitimate business interests, the fulfilment of our contract with you, compliance with our legal obligations, and/or your consent.
              </p>
              <p>
                We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
              </p>
              <p className="font-medium text-stone-900">
                We use the information we collect or receive:
              </p>
              <ul className="space-y-3 pl-6 list-disc marker:text-warm-gold">
                <li>
                  <strong className="text-stone-900">To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Services, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the “<a href="#section-8" className="underline underline-offset-4 decoration-stone-400 hover:text-warm-gold">WHAT ARE YOUR PRIVACY RIGHTS</a>” below).
                </li>
                <li>
                  <strong className="text-stone-900">Deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfil business obligations.
              </p>
              <p>
                We may process or share your data that we hold based on the following legal basis:
              </p>
              <ul className="space-y-3 pl-6 list-disc marker:text-warm-gold">
                <li>
                  <strong className="text-stone-900">Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                </li>
                <li>
                  <strong className="text-stone-900">Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                </li>
                <li>
                  <strong className="text-stone-900">Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfil the terms of our contract.
                </li>
                <li>
                  <strong className="text-stone-900">Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                </li>
                <li>
                  <strong className="text-stone-900">Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                </li>
              </ul>
              <p className="font-medium text-stone-900 pt-2">
                More specifically, we may need to process your data or share your personal information in the following situations:
              </p>
              <ul className="space-y-3 pl-6 list-disc marker:text-warm-gold">
                <li>
                  <strong className="text-stone-900">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
              </p>
              <p>
                Our Services offers you the ability to register and login using your third-party social media account details (like your Facebook or Instagram logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.
              </p>
              <p>
                We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> We may transfer, store and process your information in countries other than your own.
              </p>
              <p>
                Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see “<a href="#section-3" className="underline underline-offset-4 decoration-stone-400 hover:text-warm-gold">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a>” above), in and other countries.
              </p>
              <p>
                We will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law(s).
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
              </p>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
              </p>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> You may review, change, or terminate your account at any time.
              </p>
              <h3 className="text-[17px] sm:text-[18px] font-medium text-stone-900 pt-2">
                Account Information
              </h3>
              <p>
                If you would at any time like to review or change the information in your account or terminate your account, you can:
              </p>
              <ul className="space-y-2 pl-6 list-disc marker:text-warm-gold">
                <li>Log in to your account settings and update your user account.</li>
              </ul>
              <p>
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
              </p>
              <p>
                <strong className="text-stone-900 font-medium">Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests or for other non-marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              9. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <div className="space-y-4">
              <p className="italic text-stone-600 bg-stone-100/60 p-4 rounded-sm">
                <strong className="not-italic font-semibold text-stone-900">In Brief:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p>
                We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              </p>
              <p>
                We will treat your continued use of our Website / Mobile App Services after the effective date of any updated Privacy Notice as your acceptance of the changes we have made therein. We thereby encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <div className="space-y-4">
              <p>
                If you have questions or comments about this notice, you may email us at{" "}
                <a
                  href="mailto:rocksstudio2017@gmail.com"
                  className="text-stone-900 underline underline-offset-4 decoration-stone-400 hover:text-warm-gold hover:decoration-warm-gold transition-colors font-medium"
                >
                  rocksstudio2017@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-32">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-5 tracking-tight border-b border-stone-200/80 pb-3">
              11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h2>
            <div className="space-y-4">
              <p>
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please write to us at{" "}
                <a
                  href="mailto:rocksstudio2017@gmail.com"
                  className="text-stone-900 underline underline-offset-4 decoration-stone-400 hover:text-warm-gold hover:decoration-warm-gold transition-colors font-medium"
                >
                  rocksstudio2017@gmail.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>
          </section>
        </div>

        {/* Back to top / home link */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-500">
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
          >
            <span>&larr;</span> Back to Home
          </Link>
          <a
            href="#toc-heading"
            className="hover:text-stone-900 transition-colors inline-flex items-center gap-1"
          >
            Back to Table of Contents &uarr;
          </a>
        </div>
      </div>
    </article>
  );
}
