/**
 * About Page
 * 
 * Company information, story, and team
 */

import Image from "next/image";
import { Section, SectionHeading, Container, Icon } from "@/components/shared";
import { Button } from "@/components/ui";
import { aboutConfig } from "@/config/about";
import { teamConfig } from "@/config/team";

// Page metadata
export const metadata = {
  title: "About Us",
  description: "Learn about Silver Wood Heights - our story, values, and commitment to building quality homes for families.",
};

export default function AboutPage() {
  const { hero, story, cta } = aboutConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.image}
            alt="Silver Wood Heights community"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ebony/60" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-xl text-white/80">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title={story.title} align="left" />
          
          <div className="space-y-4 text-ebony/70 leading-relaxed">
            {story.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section background="default">
        <SectionHeading
          title={teamConfig.title}
          subtitle={teamConfig.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamConfig.members.map((member) => (
            <div key={member.id} className="text-center">
              {/* Photo */}
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-dun-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-medium text-ebony">
                {member.name}
              </h3>
              <p className="text-reseda text-sm mb-2">{member.role}</p>
              <p className="text-sm text-ebony/60 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-ebony py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-white/70 mb-8">
              {cta.description}
            </p>
            <Button href={cta.buttonLink} size="lg">
              {cta.buttonText}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}