<template>
  <div id="fullpage-terms">
    <div class="section section-terms-and-condition">
      <div class="section-inner">
        <div class="inner-contents">
          <h1>Terms and Conditions</h1>
          <p><strong>Last updated 11/29/2021</strong></p>
          <h2>Table of Contents</h2>

          <ol>
            <li
              v-for="(content, idx) in CONTENTS"
              @click="($evt) => scollToId(idx + 1)"
            >
              {{ content }}
            </li>
          </ol>

          <div>
            <div class="content-wrapper" id="content1">
              <h2>1. Agreement To Terms</h2>
              <p>
                These Terms and Conditions constitute a legally binding
                agreement made between you, whether personally or on behalf of
                an entity (“you”) and Zenerate Inc. ("Company," “we," “us," or
                “our”), concerning your access to and use of the
                <a href="http://app.zenerate.ai">http://app.zenerate.ai</a>
                website as well as any other media form, media channel, mobile
                website or mobile application related, linked, or otherwise
                connected thereto (collectively, the “Service”). You agree that
                by accessing the Service, you have read, understood, and agreed
                to be bound by all of these Terms and Conditions. IF YOU DO NOT
                AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE
                EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
                DISCONTINUE USE IMMEDIATELY.
              </p>
              <p>
                Supplemental terms and conditions or documents that may be
                posted on the Service from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Terms
                and Conditions at any time and for any reason. We will alert you
                about any changes by updating the “Last updated” date of these
                Terms and Conditions, and you waive any right to receive
                specific notice of each such change. Please ensure that you
                check the applicable Terms every time you use our Service so
                that you understand which Terms apply. You will be subject to,
                and will be deemed to have been made aware of and to have
                accepted, the changes in any revised Terms and Conditions by
                your continued use of the Service after the date such revised
                Terms and Conditions are posted.
              </p>
              <p>
                The information provided on the Service is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Service from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </p>
              <p>
                The Service is not tailored to comply with industry-specific
                regulations (Health Insurance Portability and Accountability Act
                (HIPAA), Federal Information Security Management Act (FISMA),
                etc.), so if your interactions would be subjected to such laws,
                you may not use this Service. You may not use the Service in a
                way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
              <p>
                The Service is intended for users who are at least 18 years old.
                Persons under the age of 18 are not permitted to use or register
                for the Service.
              </p>
            </div>

            <div class="content-wrapper" id="content2">
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Service is our proprietary
                property and all source code, databases, functionality,
                software, website designs, audio, video, text, photographs, and
                graphics on the Service (collectively, the “Content”) and the
                trademarks, service marks, and logos contained therein (the
                “Marks”) are owned or controlled by us or licensed to us, and
                are protected by copyright and trademark laws and various other
                intellectual property rights and unfair competition laws of the
                United States, international copyright laws, and international
                conventions. The Content and the Marks are provided on the
                Service “AS IS” for your information and personal use only.
                Except as expressly provided in these Terms and Conditions, no
                part of the Service and no Content or Marks may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.
              </p>
              <p>
                Provided that you are eligible to use the Service, you are
                granted a limited license to access and use the Service and to
                download or print a copy of any portion of the Content to which
                you have properly gained access solely for your personal,
                non-commercial use. We reserve all rights not expressly granted
                to you in and to the Service, the Content and the Marks.
              </p>
            </div>
            <div class="content-wrapper" id="content3">
              <h2>3. User Representations</h2>
              <p>
                By using the Service, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Terms and Conditions; (4) you are
                not a minor in the jurisdiction in which you reside; (5) you
                will not access the Service through automated or non-human
                means, whether through a bot, script, or otherwise; (6) you will
                not use the Service for any illegal or unauthorized purpose; and
                (7) your use of the Service will not violate any applicable law
                or regulation.
              </p>
              <p>
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Service (or any portion thereof).
              </p>
            </div>

            <div class="content-wrapper" id="content4">
              <h2>4. User Registration</h2>
              <p>
                You may be required to register with the Service. You agree to
                keep your password confidential and will be responsible for all
                use of your account and password. We reserve the right to
                remove, reclaim, or change a username you select if we
                determine, in our sole discretion, that such username is
                inappropriate, obscene, or otherwise objectionable.
              </p>
            </div>

            <div class="content-wrapper" id="content5">
              <h2>5. Prohibited Activities</h2>
              <p>
                You may not access or use the Service for any purpose other than
                that for which we make the Service available. The Service may
                not be used in connection with any commercial endeavors except
                those that are specifically endorsed or approved by us.
              </p>

              <ul>
                <p>As a user of the Service, you agree not to:</p>
                <li>
                  Systematically retrieve data or other content from the Service
                  to create or compile, directly or indirectly, a collection,
                  compilation, database, or directory without written permission
                  from us.
                </li>
                <li>
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords.
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Service, including features
                  that prevent or restrict the use or copying of any Content or
                  enforce limitations on the use of the Service and/or the
                  Content contained therein.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Service.
                </li>
                <li>
                  Use any information obtained from the Service in order to
                  harass, abuse, or harm another person.
                </li>
                <li>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </li>
                <li>
                  Use the Service in a manner inconsistent with any applicable
                  laws or regulations.
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the Service.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party’s
                  uninterrupted use and enjoyment of the Service or modifies,
                  impairs, disrupts, alters, or interferes with the use,
                  features, functions, operation, or maintenance of the Service.
                </li>
                <li>
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction
                  tools.
                </li>
                <li>
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </li>
                <li>
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, clear graphics interchange formats (“gifs”), 1×1
                  pixels, web bugs, cookies, or other similar devices (sometimes
                  referred to as “spyware” or “passive collection mechanisms” or
                  “pcms”).
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the
                  Service or the networks or services connected to the Service.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Service to you.
                </li>
                <li>
                  Attempt to bypass any measures of the Service designed to
                  prevent or restrict access to the Service, or any portion of
                  the Service.
                </li>
                <li>
                  Copy or adapt the Service’s software, including but not
                  limited to Flash, PHP, HTML, JavaScript, or other code.
                </li>
                <li>
                  Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software
                  comprising or in any way making up a part of the Service.
                </li>
                <li>
                  Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Service, or using or launching any unauthorized
                  script or other software.
                </li>
                <li>
                  Use a buying agent or purchasing agent to make purchases on
                  the Service.
                </li>
                <li>
                  Make any unauthorized use of the Service, including collecting
                  usernames and/or email addresses of users by electronic or
                  other means for the purpose of sending unsolicited email, or
                  creating user accounts by automated means or under false
                  pretenses.
                </li>
                <li>
                  Use the Service as part of any effort to compete with us or
                  otherwise use the Service and/or the Content for any
                  revenue-generating endeavor or commercial enterprise.
                </li>
              </ul>
            </div>

            <div class="content-wrapper" id="content6">
              <h2>6. User Generated Contributions</h2>
              <p>
                The Service does not offer users to submit or post content. We
                may provide you with the opportunity to create, submit, post,
                display, transmit, perform, publish, distribute, or broadcast
                content and materials to us or on the Service, including but not
                limited to text, writings, video, audio, photographs, graphics,
                comments, suggestions, or personal information or other material
                (collectively, "Contributions"). Contributions may be viewable
                by other users of the Service and through third-party websites.
                As such, any Contributions you transmit may be treated in
                accordance with Privacy Policy. When you create or make
                available any Contributions, you thereby represent and warrant
                that:
              </p>
              <ul>
                <li>
                  The creation, distribution, transmission, public display, or
                  performance, and the accessing, downloading, or copying of
                  your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party.
                </li>
                <li>
                  You are the creator and owner of or have the necessary
                  licenses, rights, consents, releases, and permissions to use
                  and to authorize us, the Service, and other users of the
                  Service to use your Contributions in any manner contemplated
                  by the Service and these Terms and Conditions.
                </li>
                <li>
                  You have the written consent, release, and/or permission of
                  each and every identifiable individual person in your
                  Contributions to use the name or likeness of each and every
                  such identifiable individual person to enable inclusion and
                  use of your Contributions in any manner contemplated by the
                  Service and these Terms and Conditions.
                </li>
                <li>
                  Your Contributions are not false, inaccurate, or misleading.
                </li>
                <li>
                  Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </li>
                <li>
                  Your Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </li>
                <li>
                  Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone.
                </li>
                <li>
                  Your Contributions are not used to harass or threaten (in the
                  legal sense of those terms) any other person and to promote
                  violence against a specific person or class of people.
                </li>
                <li>
                  Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </li>
                <li>
                  Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </li>
                <li>
                  Your Contributions do not violate any applicable law
                  concerning child pornography, or otherwise intended to protect
                  the health or well-being of minors.
                </li>
                <li>
                  Your Contributions do not include any offensive comments that
                  are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </li>
                <li>
                  Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of these Terms and
                  Conditions, or any applicable law or regulation.
                </li>
                <p>
                  Any use of the Service in violation of the foregoing violates
                  these Terms and Conditions and may result in, among other
                  things, termination or suspension of your rights to use the
                  Service.
                </p>
              </ul>
            </div>

            <div class="content-wrapper" id="content7">
              <h2>7. Contribution License</h2>
              <p>
                You and the Service agree that we may access, store, process,
                and use any information and personal data that you provide
                following the terms of the Privacy Policy and your choices
                (including settings).
              </p>
              <p>
                By submitting suggestions or other feedback regarding the
                Service, you agree that we can use and share such feedback for
                any purpose without compensation to you.
              </p>
              <p>
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Service. You are solely responsible for
                your Contributions to the Service and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
              </p>
            </div>

            <div class="content-wrapper" id="content8">
              <h2>8. Submissions</h2>
              <p>
                You acknowledge and agree that any questions, comments,
                suggestions, ideas, feedback, or other information regarding the
                Service ("Submissions") provided by you to us are
                non-confidential and shall become our sole property. We shall
                own exclusive rights, including all intellectual property
                rights, and shall be entitled to the unrestricted use and
                dissemination of these Submissions for any lawful purpose,
                commercial or otherwise, without acknowledgment or compensation
                to you. You hereby waive all moral rights to any such
                Submissions, and you hereby warrant that any such Submissions
                are original with you or that you have the right to submit such
                Submissions. You agree there shall be no recourse against us for
                any alleged or actual infringement or misappropriation of any
                proprietary right in your Submissions.
              </p>
            </div>

            <div class="content-wrapper" id="content9">
              <h2>9. Third-Party Website And Content</h2>
              <p>
                The Service may contain (or you may be sent via the Service)
                links to other websites ("Third-Party Websites") as well as
                articles, photographs, text, graphics, pictures, designs, music,
                sound, video, information, applications, software, and other
                content or items belonging to or originating from third parties
                ("Third-Party Content"). Such Third-Party Websites and
                Third-Party Content are not investigated, monitored, or checked
                for accuracy, appropriateness, or completeness by us, and we are
                not responsible for any Third-Party Websites accessed through
                the Service or any Third-Party Content posted on, available
                through, or installed from the Service, including the content,
                accuracy, offensiveness, opinions, reliability, privacy
                practices, or other policies of or contained in the Third-Party
                Websites or the Third-Party Content. Inclusion of, linking to,
                or permitting the use or installation of any Third-Party
                Websites or any Third-Party Content does not imply approval or
                endorsement thereof by us. If you decide to leave the Service
                and access the Third-Party Websites or to use or install any
                Third-Party Content, you do so at your own risk, and you should
                be aware these Terms and Conditions no longer govern. You should
                review the applicable terms and policies, including privacy and
                data gathering practices, of any website to which you navigate
                from the Service or relating to any applications you use or
                install from the Service. Any purchases you make through
                Third-Party Websites will be through other websites and from
                other companies, and we take no responsibility whatsoever in
                relation to such purchases which are exclusively between you and
                the applicable third party. You agree and acknowledge that we do
                not endorse the products or services offered on Third-Party
                Websites and you shall hold us harmless from any harm caused by
                your purchase of such products or services. Additionally, you
                shall hold us harmless from any losses sustained by you or harm
                caused to you relating to or resulting in any way from any
                Third-Party Content or any contact with Third-Party Websites.
              </p>
            </div>

            <div class="content-wrapper" id="content10">
              <h2>10. Site Management</h2>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor
                the Service for violations of these Terms and Conditions; (2)
                take appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Terms and Conditions,
                including without limitation, reporting such user to law
                enforcement authorities; (3) in our sole discretion and without
                limitation, refuse, restrict access to, limit the availability
                of, or disable (to the extent technologically feasible) any of
                your Contributions or any portion thereof; (4) in our sole
                discretion and without limitation, notice, or liability, to
                remove from the Service or otherwise disable all files and
                content that are excessive in size or are in any way burdensome
                to our systems; and (5) otherwise manage the Service in a manner
                designed to protect our rights and property and to facilitate
                the proper functioning of the Service.
              </p>
            </div>

            <div class="content-wrapper" id="content11">
              <h2>11. Privacy Policy</h2>
              <p>
                We care about data privacy and security. Please review our
                Privacy Policy:
                <a href="https://zenerate.ai/privacy-policy"
                  >https://zenerate.ai/privacy-policy</a
                >. By using the Service, you agree to be bound by our Privacy
                Policy, which is incorporated into these Terms and Conditions.
                Please be advised the Service is hosted in the United States. If
                you access the Service from any other region of the world with
                laws or other requirements governing personal data collection,
                use, or disclosure that differ from applicable laws in the
                United States, then through your continued use of the Service,
                you are transferring your data to the United States, and you
                agree to have your data transferred to and processed in the
                United States.
              </p>
            </div>

            <div class="content-wrapper" id="content12">
              <h2>12. Term And Termination</h2>
              <p>
                These Terms and Conditions shall remain in full force and effect
                while you use the Service. WITHOUT LIMITING ANY OTHER PROVISION
                OF THESE Terms and Conditions, WE RESERVE THE RIGHT TO, IN OUR
                SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO
                AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE Terms and Conditions OR OF ANY
                APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
                PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT
                OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN
                OUR SOLE DISCRETION.
              </p>
              <p>
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </p>
            </div>

            <div class="content-wrapper" id="content13">
              <h2>13. Modifications And Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Service at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Service. We also reserve the right
                to modify or discontinue all or part of the Service without
                notice at any time. We will not be liable to you or any third
                party for any modification, price change, suspension, or
                discontinuance of the Service.
              </p>
              <p>
                We cannot guarantee the Service will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Service, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Service at any time or for any reason without notice
                to you.
              </p>
              <p>
                You agree that we have no liability whatsoever for any loss,
                damage, or inconvenience caused by your inability to access or
                use the Service during any downtime or discontinuance of the
                Service. Nothing in these Terms and Conditions will be construed
                to obligate us to maintain and support the Service or to supply
                any corrections, updates, or releases in connection therewith.
              </p>
            </div>

            <div class="content-wrapper" id="content14">
              <h2>14. Governing Law</h2>
              <p>
                These Terms and Conditions and your use of the Service are
                governed by and construed in accordance with the laws of the
                State of California applicable to agreements made and to be
                entirely performed within the State of California, without
                regard to its conflict of law principles.
              </p>
            </div>

            <div class="content-wrapper" id="content15">
              <h2>15. Dispute Resolution</h2>
              <p>
                Any legal action of whatever nature brought by either you or us
                (collectively, the “Parties” and individually, a “Party”) shall
                be commenced or prosecuted in the state and federal courts
                located in Los Angeles County, California, and the Parties
                hereby consent to, and waive all defenses of lack of personal
                jurisdiction and forum non conveniens with respect to venue and
                jurisdiction in such state and federal courts. Application of
                the United Nations Convention on Contracts for the International
                Sale of Goods and the Uniform Computer Information Transaction
                Act (UCITA) are excluded from these Terms and Conditions. In no
                event shall any claim, action, or proceeding brought by either
                Party related in any way to the Service be commenced more than
                one (1) years after the cause of action arose.
              </p>
            </div>

            <div class="content-wrapper" id="content16">
              <h2>16. Corrections</h2>
              <p>
                There may be information on the Service that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Service at any time, without prior notice.
              </p>
            </div>

            <div class="content-wrapper" id="content17">
              <h2>17. Disclaimer</h2>
              <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR
                SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
                ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE
                CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
                LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
                INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
                PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
                ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR
                USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
                INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE,
                (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR
                (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR
                ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
                OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE
                VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR
                ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                CAUTION WHERE APPROPRIATE.
              </p>
            </div>

            <div class="content-wrapper" id="content18">
              <h2>18. Limitations Of Liability</h2>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING
                ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU
                FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE
                ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY,
                BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE
                OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS
                DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
                OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,
                SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </div>

            <div class="content-wrapper" id="content19">
              <h2>19. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of: (1) use of the Service; (2) breach of these
                Terms and Conditions; (3) any breach of your representations and
                warranties set forth in these Terms and Conditions; (4) your
                violation of the rights of a third party, including but not
                limited to intellectual property rights; or (5) any overt
                harmful act toward any other user of the Service with whom you
                connected via the Service. Notwithstanding the foregoing, we
                reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate, at your expense, with
                our defense of such claims. We will use reasonable efforts to
                notify you of any such claim, action, or proceeding which is
                subject to this indemnification upon becoming aware of it.
              </p>
            </div>

            <div class="content-wrapper" id="content20">
              <h2>20. User Data</h2>
              <p>
                We will maintain certain data that you transmit to the Service
                for the purpose of managing the performance of the Service, as
                well as data relating to your use of the Service. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Service. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
              </p>
            </div>

            <div class="content-wrapper" id="content21">
              <h2>
                21. Electronic Communications, Transactions, And Signatures
              </h2>
              <p>
                Visiting the Service, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Service,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or
                requirements under any statutes, regulations, rules, ordinances,
                or other laws in any jurisdiction which require an original
                signature or delivery or retention of non-electronic records, or
                to payments or the granting of credits by any means other than
                electronic means.
              </p>
            </div>

            <div class="content-wrapper" id="content22">
              <h2>22. California Users And Residents</h2>
              <p>
                If any complaint with us is not satisfactorily resolved, you can
                contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 North Market Blvd., Suite N 112,
                Sacramento, California 95834 or by telephone at (800) 952-5210
                or (916) 445-1254.
              </p>
            </div>

            <div class="content-wrapper" id="content23">
              <h2>23. Miscellaneous</h2>
              <p>
                These Terms and Conditions and any policies or operating rules
                posted by us on the Service or in respect to the Service
                constitute the entire agreement and understanding between you
                and us. Our failure to exercise or enforce any right or
                provision of these Terms and Conditions shall not operate as a
                waiver of such right or provision. These Terms and Conditions
                operate to the fullest extent permissible by law. We may assign
                any or all of our rights and obligations to others at any time.
                We shall not be responsible or liable for any loss, damage,
                delay, or failure to act caused by any cause beyond our
                reasonable control. If any provision or part of a provision of
                these Terms and Conditions is determined to be unlawful, void,
                or unenforceable, that provision or part of the provision is
                deemed severable from these Terms and Conditions and does not
                affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Terms and Conditions or use of the Service. You agree that
                these Terms and Conditions will not be construed against us by
                virtue of having drafted them. You hereby waive any and all
                defenses you may have based on the electronic form of these
                Terms and Conditions and the lack of signing by the parties
                hereto to execute these Terms and Conditions.
              </p>
            </div>

            <div class="content-wrapper" id="content24">
              <h2>24. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Service or to
                receive further information regarding use of the Service, please
                contact us at:
                <a href="mailto:contact@zenerate.ai">contact@zenerate.ai </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <i class="scroll-to-top" @click="($evt) => scollToTop()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
          />
        </svg>
      </i>

      <div class="section section-footer fp-auto-height-responsive">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Store from '/Store/index'
import Footer from '/Components/EN/Footer.vue'

const CONTENTS = [
  'Agreement To Terms',
  'Intellectual Property Rights',
  'User Representations',
  'User Registration',
  'Prohibited Activities',
  'User Generated Contributions',
  'Contribution License',
  'Submissions',
  'Third-Party Website And Content',
  'Site Management',
  'Privacy Policy',
  'Term And Termination',
  'Modifications And Interruptions',
  'Governing Law',
  'Dispute Resolution',
  'Corrections',
  'Disclaimer',
  'Limitations Of Liability',
  'Indemnification',
  'User Data',
  'Electronic Communications, Transactions, And Signatures',
  'California Users And Residents',
  'Miscellaneous',
  'Contact Us',
]

const fullpage = computed(() => Store.state.root.FullPage)
onMounted(() => {
  fullpage.value.destroy()
})

const scollToId = (contentId: number) => {
  const el = document.getElementById(`content${contentId}`)
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scollToTop = () => {
  const el = document.querySelector('.inner-contents')
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
<style lang="scss" scoped>
#fullpage-terms {
  overflow: hidden;

  .section-inner {
    @include flex;
    position: relative;
    height: 100%;
    padding: 0px 60px 180px;
    cursor: default;

    @include en-tablet {
      padding: 0px 24px;
      max-width: 100%;
    }
    @include en-mobile {
      padding: 0 24px 120px;
      max-width: 100%;
    }
  }
}

.scroll-to-top {
  @include fixed(bottom 24px right 32px);
  cursor: pointer;
  z-index: 9;

  svg {
    width: 40px;
    height: 40px;

    fill: $text-darken;
  }

  @include en-mobile {
    @include fixed(bottom 14px right 18px);
    svg {
      width: 32px;
      height: 32px;
    }
  }
}

.inner-contents {
  padding-top: 140px;
  padding-bottom: 60px;
  height: content-fit;
  text-align: left;
}

.content-wrapper {
  padding-top: 80px;
  margin-bottom: -80px;

  h2 {
    margin: 0px 0px 24px 0px;
    padding-top: 32px;
  }

  @include en-mobile {
    margin: 0px;
    padding-top: 20px;
  }
}

h1 {
  @include medium(36);
  margin: 0px 0px 48px 0px;
  padding: 0px;
  color: #161616;
  @include en-mobile {
    @include medium(28);
    margin: 0px 0px 28px 0px;
  }
}

h2 {
  @include bold(22);
  margin: 48px 0px 24px 0px;
  padding: 0px 0px 0px;
  color: #161616;
  @include en-mobile {
    @include bold(18);
    margin: 38px 0px 12px 0px;
  }
}

h3 {
  @include bold(18);
  margin: 0px 0px 28px 0px;
  padding: 0px;
  color: #161616;
  @include en-mobile {
    @include bold(16);
    margin: 0px 0px 16px 0px;
  }
}

ol {
  padding: 0px;
  margin-bottom: 28px;

  @include en-mobile {
    margin-bottom: 16px;
  }

  li {
    @include regular(16);
    margin: 0px 20px 4px 20px;
    color: #707070;
    text-align: left;
    cursor: pointer;

    @include en-mobile {
      @include regular(14);
      margin: 0px 0px 4px 16px;
    }
  }
}

ul {
  margin-bottom: 28px;
  text-align: left;
  @include en-mobile {
    margin-bottom: 16px;
  }
  p {
    margin: 0px 20px 16px 20px;
  }

  li {
    @include regular(16);
    margin: 0px 40px 14px 40px;
    list-style-type: square;
    color: #707070;
    text-align: left;

    @include en-mobile {
      @include regular(14);
      margin: 0px 0px 12px 16px;
    }
  }
}

p {
  @include regular(16);
  margin-bottom: 20px;
  line-height: 20px;
  color: #707070;

  @include en-mobile {
    @include regular(14);
    margin: 0px 0px 16px 0px;
  }
}

span {
  display: block;
  margin-bottom: 4px;

  &.core-text {
    color: #5c6dff;
  }
}

a,
a:hover,
a:active,
a:visited {
  text-decoration: underline;
  color: #5c6dff;
}
</style>
