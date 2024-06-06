import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">🎶 Music</h4>
              <p className="p-color">
                Vibe To Music In Your Voice Channels With The "Ace Music" Bot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">👮 Moderation</h4>
              <p className="p-color">
                Get Moderation Built Inside The "Ace Moderation" Bot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🎮 Fun</h4>
              <p className="p-color">
                Play Games And Have Fun With The "Ace Games" Bot.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">2</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">2</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">6</h4>
            <p className="p-color">Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
