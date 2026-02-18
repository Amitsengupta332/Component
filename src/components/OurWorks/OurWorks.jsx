const OurWorks = () => {
  return (
    <section style={styles.wrap}>
      <div style={styles.inner}>
        {/* Left */}
        <div style={styles.left}>
          <h2 style={styles.title}>
            <span style={styles.outline}>OUR</span>{" "}
            <span style={styles.solid}>WORKS</span>
          </h2>

          <p style={styles.subtitle}>
            Discover how we empower high-growth startups and global <br />
            enterprises at every stage with scalable, software solutions.
          </p>
        </div>

        {/* Right */}
        <a
          href="#case-studies"
          style={styles.cta}
          aria-label="All case studies">
          <span style={styles.ctaText}>ALL CASE STUDIES</span>
          <span style={styles.iconBtn} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 7L19 12L13 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

const styles = {
  wrap: {
    background: "#f7f7f7",
    padding: "28px 36px",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  left: {
    minWidth: 0,
  },
  title: {
    margin: 0,
    lineHeight: 1,
    letterSpacing: "-0.5px",
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    flexWrap: "wrap",
  },
  outline: {
    fontSize: 44,
    fontWeight: 900,
    color: "transparent",
    WebkitTextStroke: "2px #d9d9d9",
    textTransform: "uppercase",
  },
  solid: {
    fontSize: 44,
    fontWeight: 900,
    color: "#111",
    textTransform: "uppercase",
  },
  subtitle: {
    margin: "10px 0 0",
    fontSize: 12,
    lineHeight: 1.6,
    color: "#6a6a6a",
    fontWeight: 600,
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    textDecoration: "none",
    color: "#666",
    flexShrink: 0,
  },
  ctaText: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "1.6px",
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 999,
    border: "2px solid #bdbdbd",
    display: "grid",
    placeItems: "center",
    color: "#666",
  },
};

export default OurWorks;
