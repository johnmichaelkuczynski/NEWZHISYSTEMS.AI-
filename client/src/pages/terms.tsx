import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          &larr; Back to Zhi Systems
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Zhi Systems &mdash; Effective date: July 11, 2026
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the Zhi Systems website (zhisystems.ai) and all applications,
              courses, and services published by Zhi Systems, including our
              Living Books, Living Courses, and the full suite of Zhi Systems
              web applications, regardless of the domain on which they are
              hosted (collectively, the &ldquo;Services&rdquo;). By accessing
              or using any of the Services, you agree to these Terms. If you do
              not agree, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of the Services</h2>
            <p className="mb-2">You agree to use the Services only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interfere with or disrupt the operation of the Services.</li>
              <li>Attempt to gain unauthorized access to any system or data.</li>
              <li>Use the Services to transmit unlawful, harmful, or infringing material.</li>
              <li>Scrape, resell, or redistribute the Services or their content without permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Accounts and Sign-In</h2>
            <p>
              Some Services offer optional sign-in (for example, Sign in with
              Google). You are responsible for activity that occurs under your
              account. We may suspend or terminate accounts that violate these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content provided through the Services &mdash; including
              books, courses, lectures, articles, audio, video, and software
              &mdash; is the property of Zhi Systems or its licensors and is
              protected by copyright and other intellectual-property laws. You
              may use it for personal, non-commercial purposes only, unless we
              grant written permission otherwise. You retain ownership of
              content you submit, and you grant us a license to store and
              process it solely to operate the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. AI-Generated Content</h2>
            <p>
              Many Services generate content using artificial intelligence
              (for example, tutoring answers, grading feedback, analyses,
              transcripts, and audio). AI output can be inaccurate or
              incomplete. It is provided for informational and educational
              purposes only and does not constitute professional, financial,
              legal, medical, or psychological advice. You are responsible for
              how you use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Disclaimer of Warranties</h2>
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, express or
              implied, including fitness for a particular purpose,
              merchantability, and non-infringement. We do not guarantee that
              the Services will be uninterrupted, error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Zhi Systems shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or for any loss of data, profits, or goodwill,
              arising from your use of (or inability to use) the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to the Services and Terms</h2>
            <p>
              We may modify, suspend, or discontinue any part of the Services
              at any time. We may also update these Terms from time to time;
              changes will be posted on this page with an updated effective
              date. Continued use of the Services after changes take effect
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Privacy</h2>
            <p>
              Your use of the Services is also governed by our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:zhi@zhisystems.org" className="underline">
                zhi@zhisystems.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
