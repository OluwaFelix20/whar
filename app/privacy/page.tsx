import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Whamr",
  description:
    "How Whamr collects, uses, and protects your personal information. GDPR and CCPA compliant.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      lastUpdated="April 20, 2026"
      intro={
        <p>
          Your privacy matters. This policy explains what we collect, why we
          collect it, and what choices you have. Written in plain English,
          because a privacy policy nobody can read isn't really a privacy
          policy.
        </p>
      }
      sections={[
        {
          id: "information-we-collect",
          title: "Information we collect",
          content: (
            <>
              <p>We collect three categories of information.</p>
              <h3>Account information</h3>
              <p>
                When you sign up, you give us an email address, a display name,
                and a password. If you sign up with OAuth through Google,
                GitHub, or Facebook, we receive your email and display name
                from that provider instead.
              </p>
              <h3>Content you create</h3>
              <p>
                Posts, stickers, memes, videos, comments, messages, collections,
                and any other content you upload or create on Whamr. This is
                yours. We store it so you can use Whamr.
              </p>
              <h3>Usage data</h3>
              <p>
                Which pages you view, which posts you like, what you search for,
                how long you spend in the app. This powers your personalised
                feed and our internal analytics. User IDs are hashed before
                they reach our analytics database.
              </p>
            </>
          ),
        },
        {
          id: "how-we-use-it",
          title: "How we use your information",
          content: (
            <>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>
                  <strong>Providing the service.</strong> Showing your feed,
                  delivering your messages, processing your sticker exports,
                  calculating creator payouts.
                </li>
                <li>
                  <strong>Personalisation.</strong> Your like history informs
                  your feed. Your interests inform what content surfaces first.
                </li>
                <li>
                  <strong>Safety.</strong> Detecting spam, abuse, NSFW content,
                  and copyright violations.
                </li>
                <li>
                  <strong>Communication.</strong> Sending you notifications,
                  digest emails if you've been away for a while, and important
                  account updates.
                </li>
                <li>
                  <strong>Analytics.</strong> Understanding how Whamr is used at
                  an aggregate level so we can improve it.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties. We
                do not use your content to train AI models without your
                explicit consent.
              </p>
            </>
          ),
        },
        {
          id: "what-we-dont-collect",
          title: "What we don't collect",
          content: (
            <>
              <ul>
                <li>We do not log your IP address in application logs.</li>
                <li>
                  We do not store your password. We store a hashed version using
                  bcrypt, which cannot be reversed.
                </li>
                <li>
                  We do not read your direct messages. They are stored but not
                  scanned, except when reported for moderation.
                </li>
                <li>
                  We do not track you across other websites. We don't use
                  third-party advertising cookies that follow you around the
                  web.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "sharing",
          title: "When we share information",
          content: (
            <>
              <p>
                We share your information in a small number of specific
                situations.
              </p>
              <h3>With service providers</h3>
              <p>
                AWS (hosting and storage), Stripe and PayPal (creator payouts),
                SendGrid (transactional email), Sentry (error monitoring),
                OpenAI, Anthropic, and Google Cloud (AI services for moderation
                and content analysis). These providers process data on our
                behalf and are contractually prohibited from using it for other
                purposes.
              </p>
              <h3>When required by law</h3>
              <p>
                If we receive a valid legal request from law enforcement or a
                court, we may be required to disclose information. We resist
                overly broad requests and publish transparency reports.
              </p>
              <h3>In a business transfer</h3>
              <p>
                If Whamr is acquired or merges with another company, your
                information would transfer as part of that deal. You would be
                notified in advance and given the opportunity to delete your
                account.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          title: "Your rights",
          content: (
            <>
              <p>
                Regardless of where you live, you have the following rights
                over your data:
              </p>
              <ul>
                <li>
                  <strong>Access.</strong> Request a copy of all information we
                  hold about you.
                </li>
                <li>
                  <strong>Correction.</strong> Update any information that's
                  inaccurate.
                </li>
                <li>
                  <strong>Deletion.</strong> Delete your account and all
                  associated data.
                </li>
                <li>
                  <strong>Portability.</strong> Export your content in a
                  machine-readable format.
                </li>
                <li>
                  <strong>Objection.</strong> Object to certain types of
                  processing, including marketing communications.
                </li>
              </ul>
              <h3>GDPR (EU users)</h3>
              <p>
                If you are in the European Economic Area or the UK, the General
                Data Protection Regulation applies. You can exercise your
                rights at any time through account settings or by emailing{" "}
                <strong>privacy@whamr.com</strong>. We respond within 30 days.
              </p>
              <h3>CCPA (California users)</h3>
              <p>
                California residents have the right to know what personal
                information we collect, to delete it, and to opt out of its
                sale. We do not sell personal information. You can request
                disclosure or deletion at{" "}
                <strong>privacy@whamr.com</strong>.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "How long we keep your data",
          content: (
            <>
              <p>
                We keep your data for as long as your account is active. When
                you delete your account, your data enters a 30-day grace period
                during which you can restore it. After 30 days, your data is
                permanently removed from our live systems.
              </p>
              <p>
                Backups are retained for 90 days and then permanently deleted.
                Content you shared publicly and that others have saved or
                reposted may persist if those users haven't deleted it.
              </p>
              <p>
                Certain information must be retained longer for legal or
                accounting reasons, including transaction records (7 years for
                tax purposes) and content removed for policy violations (kept
                as evidence for up to 2 years).
              </p>
            </>
          ),
        },
        {
          id: "security",
          title: "How we protect your data",
          content: (
            <>
              <ul>
                <li>
                  All data in transit is encrypted with TLS 1.2 or higher.
                </li>
                <li>
                  All data at rest is encrypted with AES-256.
                </li>
                <li>
                  Passwords are hashed with bcrypt and never stored in
                  plaintext.
                </li>
                <li>
                  JWT sessions expire after 15 minutes and require refresh
                  tokens for continued use.
                </li>
                <li>
                  We conduct regular security audits and follow the OWASP Top
                  10 guidelines.
                </li>
                <li>
                  Access to production systems is limited to engineers who need
                  it, logged and reviewed.
                </li>
              </ul>
              <p>
                If we discover a security incident that affects your data, we
                will notify you within 72 hours of discovery.
              </p>
            </>
          ),
        },
        {
          id: "children",
          title: "Children's privacy",
          content: (
            <>
              <p>
                Whamr is not intended for children under 13, and we do not
                knowingly collect personal information from children under 13.
                In the EU and UK, the minimum age is 16 unless your country's
                local law specifies otherwise.
              </p>
              <p>
                If we discover that a user is under the minimum age for their
                region, we will suspend the account and delete associated data.
                If you believe a child has provided us with information,
                contact us at <strong>privacy@whamr.com</strong>.
              </p>
            </>
          ),
        },
        {
          id: "international",
          title: "International transfers",
          content: (
            <>
              <p>
                Whamr operates globally. Your information may be transferred to
                and stored on servers in the United States, the European Union,
                or other countries where our service providers operate.
              </p>
              <p>
                For content processed through AI moderation services, data stays
                within approved cloud regions to meet GDPR requirements for EU
                users.
              </p>
              <p>
                We rely on Standard Contractual Clauses (SCCs) for transfers
                out of the EEA and similar safeguards in other regions.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          title: "Changes to this policy",
          content: (
            <>
              <p>
                We may update this privacy policy as the product evolves. When
                we make material changes, we will notify you via email and
                through an in-app notice before the changes take effect. The
                "Last updated" date at the top of this page always reflects the
                most recent version.
              </p>
              <p>
                Historical versions of this policy are available on request at{" "}
                <strong>privacy@whamr.com</strong>.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          title: "How to contact us",
          content: (
            <>
              <p>
                Questions, concerns, or requests can be sent to our privacy
                team:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> privacy@whamr.com
                </li>
                <li>
                  <strong>Data Protection Officer:</strong> dpo@whamr.com
                </li>
                <li>
                  <strong>Mailing address:</strong> [Company mailing address to
                  be added]
                </li>
              </ul>
              <p>
                For urgent security issues, email{" "}
                <strong>security@whamr.com</strong>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
