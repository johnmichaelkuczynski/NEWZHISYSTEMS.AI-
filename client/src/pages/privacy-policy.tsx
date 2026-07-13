import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          &larr; Back to Zhi Systems
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Zhi Systems &mdash; Effective date: July 11, 2026
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Scope</h2>
            <p>
              This Privacy Policy applies to the Zhi Systems website
              (zhisystems.ai) and to all applications, courses, and services
              published by Zhi Systems, including our Living Books, Living
              Courses, and the full suite of Zhi Systems web applications,
              regardless of the domain on which they are hosted (collectively,
              the &ldquo;Services&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <p className="mb-2">
              Depending on the Service you use, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Account information.</strong> Some Services offer
                optional sign-in (for example, &ldquo;Sign in with
                Google&rdquo;). When you sign in, we receive your name, email
                address, and profile picture from your identity provider. We
                never receive or store your password.
              </li>
              <li>
                <strong>Content you submit.</strong> Answers, recordings, text,
                and other material you submit to a Service (for example, course
                answers, spoken responses, or documents you upload) are stored
                so the Service can function.
              </li>
              <li>
                <strong>Usage data.</strong> Basic technical information such
                as pages visited, timestamps, and general activity within a
                Service, used to operate and improve the Services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide, operate, and maintain the Services.</li>
              <li>
                To power features you request, such as AI tutoring, grading,
                transcription, analysis, and audio generation.
              </li>
              <li>To secure the Services and prevent abuse.</li>
              <li>To fix problems and improve the Services.</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell your personal information. We do
              not use your personal information for third-party advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">AI Processing</h2>
            <p>
              Many of our Services use third-party AI providers (such as
              OpenAI, Anthropic, and AssemblyAI) to process content you submit
              &mdash; for example, to transcribe a recording, grade an answer,
              or generate feedback. Your submissions may be sent to these
              providers solely to deliver the feature you are using. They are
              not used to build advertising profiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Google User Data
            </h2>
            <p>
              Where a Service offers Google sign-in, we access only your basic
              profile information (name, email address, and profile picture)
              to identify your account. We do not access your Gmail, Drive,
              Contacts, or any other Google data. Google user data is never
              sold, never used for advertising, and never shared with third
              parties except as required to operate the Service. Our use of
              information received from Google APIs adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Storage and Security</h2>
            <p>
              Data is stored in secured databases hosted by reputable cloud
              providers. Access is restricted, and secrets and credentials are
              managed through protected configuration &mdash; never embedded in
              client-side code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
            <p className="mb-2">We share data only with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Service providers who help us run the Services (hosting,
                database, and AI providers), bound to use the data only for
                that purpose.
              </li>
              <li>Authorities, if required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Retention and Deletion</h2>
            <p>
              We retain data for as long as needed to provide the Services. You
              may request deletion of your account data at any time by
              contacting us, and we will delete it unless we are legally
              required to keep it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Children's Privacy</h2>
            <p>
              The Services are not directed to children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              Questions or requests regarding this Privacy Policy can be sent
              to{" "}
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
