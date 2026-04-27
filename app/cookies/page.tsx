import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Whamr",
  description:
    "What cookies Whamr uses, why we use them, and how to control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      lastUpdated="April 20, 2026"
      intro={
        <p>
          Cookies are small text files stored on your device. Whamr uses them
          for three reasons: to keep you signed in, to make the platform work
          properly, and to understand how people use it. This page explains
          what we use, why we use it, and how to control it.
        </p>
      }
      sections={[
        {
          id: "what-are-cookies",
          title: "What cookies are",
          content: (
            <>
              <p>
                A cookie is a small file that a website stores on your browser.
                When you return to the site, your browser sends the cookie back,
                which lets the site remember things about you (like whether
                you're signed in, or what language you prefer).
              </p>
              <p>
                Some cookies last only for the duration of your visit (session
                cookies). Others stick around for a set period so we can
                remember you across visits (persistent cookies).
              </p>
              <p>
                We also use similar technologies like local storage, session
                storage, and pixels. For simplicity, we refer to all of them
                as "cookies" on this page.
              </p>
            </>
          ),
        },
        {
          id: "categories",
          title: "Categories of cookies we use",
          content: (
            <>
              <h3>Strictly necessary (always on)</h3>
              <p>
                These cookies make Whamr work. You can't turn them off without
                breaking core functionality.
              </p>
              <ul>
                <li>
                  <strong>Authentication.</strong> Cookies that keep you signed
                  in between visits.
                </li>
                <li>
                  <strong>Security.</strong> Cookies that prevent cross-site
                  request forgery and protect against account hijacking.
                </li>
                <li>
                  <strong>Load balancing.</strong> Cookies that route your
                  requests to the same server during a session.
                </li>
                <li>
                  <strong>Consent records.</strong> A cookie that records which
                  cookie categories you've consented to.
                </li>
              </ul>
              <h3>Functional (optional)</h3>
              <p>
                These cookies remember your preferences so the platform feels
                consistent across visits.
              </p>
              <ul>
                <li>
                  <strong>Language.</strong> Your preferred language setting.
                </li>
                <li>
                  <strong>Region.</strong> Your content region for localised
                  feed ranking.
                </li>
                <li>
                  <strong>Display preferences.</strong> Autoplay settings, theme
                  preferences, notification toggles.
                </li>
              </ul>
              <h3>Analytics (optional)</h3>
              <p>
                These cookies help us understand how Whamr is used at an
                aggregate level. All data is anonymised and hashed before
                storage.
              </p>
              <ul>
                <li>
                  <strong>Internal analytics.</strong> Page views, session
                  length, navigation patterns, feature adoption.
                </li>
                <li>
                  <strong>Performance monitoring.</strong> Page load times,
                  error rates, API response times.
                </li>
              </ul>
              <h3>Advertising</h3>
              <p>
                <strong>We don't use advertising cookies.</strong> Whamr does
                not have third-party ad tracking, retargeting pixels, or
                behavioural advertising. If you see an ad in Whamr, it was
                served from within the platform, and no personal information
                was sent to an external advertiser.
              </p>
            </>
          ),
        },
        {
          id: "third-party",
          title: "Third-party cookies",
          content: (
            <>
              <p>
                Some features of Whamr use third-party services that may set
                their own cookies. These include:
              </p>
              <ul>
                <li>
                  <strong>Stripe.</strong> For processing payments. Stripe
                  cookies are necessary when you're making a purchase or
                  receiving a payout.
                </li>
                <li>
                  <strong>OAuth providers.</strong> If you sign in with Google,
                  GitHub, or Facebook, those providers may set their own
                  cookies on their login pages.
                </li>
                <li>
                  <strong>CloudFront.</strong> Our content delivery network
                  sets cookies for cache routing and edge optimisation.
                </li>
              </ul>
              <p>
                We don't control how third parties use their cookies. Their
                privacy policies apply. Links to each provider's policy are
                available on request.
              </p>
            </>
          ),
        },
        {
          id: "your-choices",
          title: "How to control cookies",
          content: (
            <>
              <h3>Through Whamr</h3>
              <p>
                When you first visit Whamr, a cookie banner lets you accept or
                reject optional categories. You can change your choice at any
                time from the Privacy section of your account settings.
              </p>
              <h3>Through your browser</h3>
              <p>
                All major browsers let you block, delete, or allow cookies on a
                per-site basis. Instructions:
              </p>
              <ul>
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security →
                  Cookies and other site data
                </li>
                <li>
                  <strong>Safari:</strong> Settings → Privacy → Manage Website
                  Data
                </li>
                <li>
                  <strong>Firefox:</strong> Options → Privacy & Security →
                  Cookies and Site Data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site
                  permissions
                </li>
              </ul>
              <p>
                Blocking all cookies, including strictly necessary ones, will
                prevent you from signing in and using core features of Whamr.
              </p>
            </>
          ),
        },
        {
          id: "do-not-track",
          title: "Do Not Track",
          content: (
            <>
              <p>
                Your browser may have a "Do Not Track" (DNT) setting. We honour
                DNT signals by not setting analytics cookies when DNT is
                enabled. Strictly necessary cookies will still be set to keep
                the platform functional.
              </p>
              <p>
                We also honour the Global Privacy Control (GPC) signal for
                California residents, treating it as an opt-out of any sharing
                of personal information.
              </p>
            </>
          ),
        },
        {
          id: "updates",
          title: "Changes to this policy",
          content: (
            <>
              <p>
                When we add or remove cookies, we update this page. Material
                changes are announced in-app before they take effect. The
                "Last updated" date at the top reflects the current version.
              </p>
            </>
          ),
        },
        {
          id: "contact-cookies",
          title: "Questions",
          content: (
            <>
              <p>
                For questions about this cookie policy, email{" "}
                <strong>privacy@whamr.com</strong>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
