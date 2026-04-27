import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines — Whamr",
  description:
    "The rules of the Whamr community. What's allowed, what isn't, and what happens when something crosses the line.",
};

export default function GuidelinesPage() {
  return (
    <LegalPage
      eyebrow="Community"
      title="Community Guidelines"
      lastUpdated="April 20, 2026"
      intro={
        <p>
          Whamr is a place for humour, pop culture, and digital expression.
          These guidelines exist so the platform stays that way. Follow them
          and you'll never hear from our moderation team. Break them and you
          will.
        </p>
      }
      sections={[
        {
          id: "our-principles",
          title: "Our principles",
          content: (
            <>
              <p>Four rules shape how we moderate:</p>
              <ol>
                <li>
                  <strong>Humour is broad.</strong> Jokes, satire, dark humour,
                  and edgy content are part of internet culture. We don't
                  sanitise that.
                </li>
                <li>
                  <strong>Targets of jokes have rights too.</strong> Humour at
                  the expense of real individuals can cross into harassment.
                  Direct attacks on real people are different from cultural
                  commentary.
                </li>
                <li>
                  <strong>Speed matters.</strong> Harmful content removed in 10
                  minutes does less damage than harmful content removed in 10
                  hours. We prioritise turnaround over perfection.
                </li>
                <li>
                  <strong>Explain decisions.</strong> If we take action against
                  your content or account, you get a clear reason and a path
                  to appeal.
                </li>
              </ol>
            </>
          ),
        },
        {
          id: "not-allowed",
          title: "Content that's not allowed",
          content: (
            <>
              <p>The following categories are prohibited. No exceptions.</p>
              <h3>Illegal content</h3>
              <p>
                Child sexual abuse material, terrorism promotion, incitement to
                violence, content facilitating human trafficking. These are
                reported to authorities in addition to being removed.
              </p>
              <h3>Violence and gore</h3>
              <p>
                Graphic real-world violence, gore, torture, or imagery designed
                to shock. Fictional violence in clearly stylised or cartoon
                form is fine. Actual footage of real harm to people is not.
              </p>
              <h3>Hate speech</h3>
              <p>
                Attacks or slurs targeting people based on race, ethnicity,
                national origin, religion, sexual orientation, gender identity,
                or disability. Punching-down humour is not the same as
                punching-up humour and we moderate it differently.
              </p>
              <h3>Harassment</h3>
              <p>
                Targeted abuse, bullying, dogpiling, coordinated attacks, doxing,
                sharing private information without consent, threatening
                messages. Blocking and reporting are your tools; use them.
              </p>
              <h3>Sexual content</h3>
              <p>
                Nudity, explicit sexual content, and sexual content involving
                minors. Whamr is not a platform for adult content. Artistic
                nudity in a clear educational or art-historical context may be
                allowed at moderator discretion.
              </p>
              <h3>Impersonation and deception</h3>
              <p>
                Pretending to be a real person, brand, or organisation without
                clear parody labelling. Deceptive practices designed to defraud
                users or manipulate public opinion.
              </p>
              <h3>Spam and manipulation</h3>
              <p>
                Bulk identical content, coordinated inauthentic behaviour,
                engagement pods, bought followers, bought likes, artificial
                virality schemes. We detect and remove these aggressively.
              </p>
              <h3>Copyright violations</h3>
              <p>
                Uploading content that isn't yours without permission. Memes
                built on pop culture references are generally fine under fair
                use in most jurisdictions, but full episodes, commercial music,
                and professional photography without licence are not.
              </p>
              <h3>Dangerous activities</h3>
              <p>
                Content promoting self-harm, suicide, eating disorders,
                dangerous challenges, or illegal drug use. Recovery-focused
                content and harm-reduction information are allowed.
              </p>
              <h3>Malware and scams</h3>
              <p>
                Phishing links, malware distribution, cryptocurrency scams,
                investment fraud, fake giveaways. We monitor link patterns
                actively.
              </p>
            </>
          ),
        },
        {
          id: "grey-areas",
          title: "The grey areas",
          content: (
            <>
              <p>
                Some content types are allowed but require context or
                labelling.
              </p>
              <h3>Dark humour</h3>
              <p>
                Jokes about death, tragedy, or taboo subjects are part of meme
                culture. They stay up as long as they aren't targeting specific
                individuals or promoting real harm. A meme about the
                universality of suffering is different from a meme mocking a
                specific victim.
              </p>
              <h3>Political content</h3>
              <p>
                Political commentary, satire, and critique are allowed. Calls
                for violence, incitement, or targeted harassment of political
                figures' families are not.
              </p>
              <h3>Disturbing content</h3>
              <p>
                Content that some users might find disturbing (medical imagery,
                horror, body horror) should be labelled as sensitive. The
                platform applies a blur overlay to sensitive content that users
                can tap to reveal.
              </p>
              <h3>Controversial public figures</h3>
              <p>
                Jokes about public figures in their public roles are allowed.
                Content targeting their personal lives, families, or private
                matters is moderated more strictly.
              </p>
            </>
          ),
        },
        {
          id: "reporting",
          title: "Reporting content",
          content: (
            <>
              <p>
                Every post has a report button. Reports go into a moderation
                queue reviewed by our team. You can specify a reason:
              </p>
              <ul>
                <li>Hate speech</li>
                <li>Harassment</li>
                <li>NSFW content</li>
                <li>Spam or bots</li>
                <li>Copyright violation</li>
                <li>Impersonation</li>
                <li>Dangerous content</li>
                <li>Other</li>
              </ul>
              <p>
                Reports are anonymous. The reported user doesn't know who
                reported them.
              </p>
              <p>
                Filing false or bad-faith reports is itself a violation. Users
                who repeatedly file unfounded reports may have their reporting
                privileges restricted.
              </p>
            </>
          ),
        },
        {
          id: "enforcement",
          title: "How we enforce",
          content: (
            <>
              <p>
                Enforcement scales to severity. Most violations result in
                warnings or content removal; repeated or severe violations
                result in account restrictions.
              </p>
              <h3>Content removal</h3>
              <p>
                The specific post is hidden from public feeds. You receive a
                notification explaining which rule was violated. The post stays
                visible to you in your profile with a "Removed" label until you
                delete it or successfully appeal.
              </p>
              <h3>Warnings</h3>
              <p>
                For first-time violations of non-serious rules, we issue a
                formal warning. Three warnings in 30 days result in a temporary
                suspension.
              </p>
              <h3>Temporary suspension</h3>
              <p>
                You can't post, comment, or message for a set period (24 hours
                to 30 days depending on severity). You can still view content
                and access your account.
              </p>
              <h3>Shadow-ban</h3>
              <p>
                For repeat offenders, your content may be hidden from
                non-followers without notifying you. This is reserved for
                users whose behaviour is patterned and hasn't improved with
                prior warnings.
              </p>
              <h3>Permanent ban</h3>
              <p>
                For severe violations (illegal content, targeted harassment,
                coordinated inauthentic behaviour), accounts are permanently
                banned. All associated content is removed. The user cannot
                create new accounts; we detect and remove ban evasion attempts.
              </p>
            </>
          ),
        },
        {
          id: "appeals",
          title: "Appealing a decision",
          content: (
            <>
              <p>
                Every moderation action can be appealed. The appeal link is in
                the notification you receive when action is taken.
              </p>
              <p>
                Appeals are reviewed by a different moderator than the one who
                made the original decision. Decisions are returned within 48
                hours, usually faster.
              </p>
              <p>
                If your appeal is upheld, the content is restored and any
                associated warning is removed from your record.
              </p>
              <p>
                If your appeal is rejected, you can request a second-level
                review by emailing <strong>appeals@whamr.com</strong> with your
                case reference number.
              </p>
            </>
          ),
        },
        {
          id: "creator-responsibilities",
          title: "Creator responsibilities",
          content: (
            <>
              <p>
                Creators have additional responsibilities because they have
                larger audiences and commercial relationships on the platform.
              </p>
              <ul>
                <li>
                  <strong>Sponsored content must be disclosed.</strong> The
                  "Sponsored" label is applied automatically to brand
                  marketplace posts. Off-platform sponsorships (where you're
                  paid separately and post on Whamr) must still be disclosed
                  with #sponsored or similar tag.
                </li>
                <li>
                  <strong>Premium content must deliver what it promises.</strong>{" "}
                  If you charge for a premium unlock, the content must match
                  the description. Bait-and-switch premium content results in
                  refunds and creator status removal.
                </li>
                <li>
                  <strong>Subscription commitments.</strong> If you have paying
                  subscribers, you should post regularly as implied by your
                  subscription description. Abandoning paid subscribers without
                  notice is grounds for review.
                </li>
                <li>
                  <strong>Brand deal integrity.</strong> Accepting brand deals
                  means producing what was agreed. Breach of a brand contract
                  can result in escrow forfeit and platform sanctions.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "changes-guidelines",
          title: "When we change these rules",
          content: (
            <>
              <p>
                Internet culture evolves. These guidelines evolve with it. We
                update them as new content types, behaviour patterns, or legal
                requirements emerge.
              </p>
              <p>
                Material changes are announced in-app and via email 14 days
                before taking effect. The "Last updated" date at the top
                reflects the current version. Past versions are available on
                request.
              </p>
            </>
          ),
        },
        {
          id: "contact-mod",
          title: "Contact",
          content: (
            <>
              <ul>
                <li>
                  <strong>Report urgent abuse:</strong> abuse@whamr.com
                </li>
                <li>
                  <strong>Appeals:</strong> appeals@whamr.com
                </li>
                <li>
                  <strong>General moderation questions:</strong>{" "}
                  moderation@whamr.com
                </li>
                <li>
                  <strong>Law enforcement requests:</strong>{" "}
                  legal@whamr.com
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
