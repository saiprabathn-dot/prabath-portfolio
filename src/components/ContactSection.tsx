"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Sparkles,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "./ContactSection.module.css";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "AI & Autonomous Agents",
  "Product Architecture",
  "MVP & Startup Build",
  "Consulting / Advisory",
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-Stack Web App");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailAddress = "saiprabath.n@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate clean async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 4500);
    }, 900);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.sectionBadge}>
          <span className={styles.pulseDot} />
          <span>AVAILABLE FOR NEW PROJECTS &amp; VENTURES</span>
        </div>
        <h2 className={styles.title}>
          Let&apos;s Build Something <span className={styles.titleGradient}>Exceptional</span>
        </h2>
        <p className={styles.subtitle}>
          Have an ambitious product idea, need robust full-stack architecture, or looking to integrate autonomous AI workflows? Let&apos;s connect.
        </p>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column: Direct Touch & Availability Cards */}
        <div className={styles.infoCol}>
          {/* Primary Quick Copy Card */}
          <div className={styles.emailCard}>
            <div className={styles.emailCardHeader}>
              <div className={styles.iconCircle}>
                <Mail size={18} />
              </div>
              <span className={styles.emailCardLabel}>DIRECT EMAIL</span>
            </div>
            <div className={styles.emailAddressWrapper}>
              <span className={styles.emailText}>{emailAddress}</span>
            </div>
            <div className={styles.emailActions}>
              <button
                type="button"
                className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
              </button>
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20NSP`}
                className={styles.mailDirectBtn}
              >
                <span>Open Mailer</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Quick Connect & Presence Cards */}
          <div className={styles.presenceGrid}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.presenceCard}
            >
              <div className={styles.presenceLeft}>
                <FaGithub size={18} className={styles.presenceIcon} />
                <div>
                  <span className={styles.presenceTitle}>GitHub</span>
                  <span className={styles.presenceSub}>Code &amp; Repositories</span>
                </div>
              </div>
              <ArrowUpRight size={15} className={styles.arrowIcon} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.presenceCard}
            >
              <div className={styles.presenceLeft}>
                <FaLinkedin size={18} className={styles.presenceIcon} />
                <div>
                  <span className={styles.presenceTitle}>LinkedIn</span>
                  <span className={styles.presenceSub}>Professional Network</span>
                </div>
              </div>
              <ArrowUpRight size={15} className={styles.arrowIcon} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.presenceCard}
            >
              <div className={styles.presenceLeft}>
                <FaXTwitter size={16} className={styles.presenceIcon} />
                <div>
                  <span className={styles.presenceTitle}>Twitter / X</span>
                  <span className={styles.presenceSub}>Insights &amp; AI Updates</span>
                </div>
              </div>
              <ArrowUpRight size={15} className={styles.arrowIcon} />
            </a>

            <a
              href="#qdelta"
              className={`${styles.presenceCard} ${styles.qdeltaHighlight}`}
            >
              <div className={styles.presenceLeft}>
                <Globe size={18} className={styles.presenceIcon} />
                <div>
                  <span className={styles.presenceTitle}>QDelta Studio</span>
                  <span className={styles.presenceSub}>Agency &amp; Ventures</span>
                </div>
              </div>
              <ArrowUpRight size={15} className={styles.arrowIcon} />
            </a>
          </div>

          {/* Location & Timezone Capsule */}
          <div className={styles.statusMeta}>
            <div className={styles.metaItem}>
              <MapPin size={13} className={styles.metaIcon} />
              <span>Hyderabad / Remote Worldwide</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <Clock size={13} className={styles.metaIcon} />
              <span>IST (UTC+5:30) · Fast Response &lt; 12h</span>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Project Inquirer Form */}
        <div className={styles.formCol}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <div className={styles.formBadge}>
                <MessageSquare size={13} />
                <span>START A CONVERSATION</span>
              </div>
              <h3 className={styles.formTitle}>Send a Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Project Type Filter Pills */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>I&apos;M INTERESTED IN</label>
                <div className={styles.typePillsWrapper}>
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`${styles.typePill} ${
                        selectedType === type ? styles.activeTypePill : ""
                      }`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.fieldLabel}>
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.fieldLabel}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={styles.inputField}
                  />
                </div>
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.fieldLabel}>
                  PROJECT DETAILS
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your product goals, timeline, and requirements..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className={styles.textareaField}
                />
              </div>

              {/* Submit Button & Status */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} ${
                  isSuccess ? styles.submitSuccess : ""
                }`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className={styles.spinner} />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
