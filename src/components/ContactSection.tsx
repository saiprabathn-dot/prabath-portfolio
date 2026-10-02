"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Send,
  Check,
  Mail,
  CheckCircle2,
  MapPin,
  Copy,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import ScrollReveal from "./ScrollReveal";
import styles from "./ContactSection.module.css";

const VALUE_PROPS = [
  "A reply within one working day",
  "Direct communication throughout",
  "Support that continues after launch",
];

const SOCIAL_LINKS = [
  {
    name: "X / Twitter",
    url: "https://twitter.com",
    icon: <FaXTwitter size={15} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Prabathsai1",
    icon: <FaGithub size={15} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sai-prabath-nagireddy/",
    icon: <FaLinkedin size={15} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram size={15} />,
  },
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
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
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 850);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Huge Faded Background Watermark */}
      <div className={styles.watermark} aria-hidden="true">
        Get In Touch
      </div>

      {/* Top Header Badge */}
      <div className={styles.topHeader}>
        <ScrollReveal delay={0.05} direction="up" distance={15}>
          <div className={styles.contactBadge}>
            <span>CONTACT</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Two-Column Split Layout */}
      <div className={styles.mainGrid}>
        {/* Left Column: Say hello & Benefits */}
        <div className={styles.leftCol}>
          {/* Founder Presence Card with Photo 2 */}
          <ScrollReveal delay={0.06} direction="up" distance={16}>
            <div className={styles.founderCard}>
              <div className={styles.avatarWrapper}>
                <img
                  src="/prabath-avatar.jpg"
                  alt="Nagireddy Sai Prabath"
                  className={styles.avatarImg}
                />
                <span className={styles.statusPulse} title="Available for projects">
                  <span className={styles.pulseDot} />
                </span>
              </div>
              <div className={styles.founderMeta}>
                <div className={styles.founderNameRow}>
                  <span className={styles.founderName}>Nagireddy Sai Prabath</span>
                  <span className={styles.founderRoleBadge}>CO-FOUNDER</span>
                </div>
                <div className={styles.founderStatus}>
                  <span className={styles.statusLiveDot} />
                  <span>Available for architecture & new products</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up" distance={20}>
            <div className={styles.sayHelloRow}>
              <h2 className={styles.sayHelloTitle}>Say hello</h2>
              <ArrowUpRight size={32} className={styles.helloArrow} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16} direction="up" distance={20}>
            <p className={styles.description}>
              Got a project in mind, or just want to sanity-check an idea before
              you commit? Send it over. We read everything that comes through
              this form.
            </p>
          </ScrollReveal>

          {/* Checkmark list */}
          <div className={styles.checkList}>
            {VALUE_PROPS.map((prop, i) => (
              <ScrollReveal
                key={prop}
                delay={0.22 + i * 0.08}
                direction="up"
                distance={16}
              >
                <div className={styles.checkItem}>
                  <div className={styles.checkIconWrapper}>
                    <Check size={13} className={styles.checkIcon} />
                  </div>
                  <span className={styles.checkText}>{prop}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Social Rounded Square Icons */}
          <ScrollReveal delay={0.4} direction="up" distance={18}>
            <div className={styles.socialRow}>
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Glassmorphic Inset Form Card */}
        <ScrollReveal delay={0.2} direction="up" distance={25} className={styles.formRevealWrapper}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name & Email Row */}
              <div className={styles.inputsRow}>
                <div className={styles.inputWrapper}>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={styles.inputField}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className={styles.inputWrapper}>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className={styles.textareaField}
                />
              </div>

              {/* Solid Light Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} ${
                  isSuccess ? styles.submitSuccess : ""
                }`}
              >
                {isSuccess ? (
                  <span className={styles.btnContent}>
                    <CheckCircle2 size={16} />
                    <span>Message Sent!</span>
                  </span>
                ) : isSubmitting ? (
                  <span className={styles.btnContent}>
                    <span className={styles.spinner} />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom 2-Card Information Row */}
      <div className={styles.infoCardsGrid}>
        {/* Card 1: Location */}
        <ScrollReveal delay={0.28} direction="up" distance={20}>
          <div className={styles.infoCard}>
            <div className={styles.cardIconBox}>
              <MapPin size={15} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Location</h3>
              <p className={styles.cardValue}>
                Hyderabad / Remote Worldwide · IST (UTC+5:30)
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: Email */}
        <ScrollReveal delay={0.36} direction="up" distance={20}>
          <div
            onClick={handleCopyEmail}
            className={`${styles.infoCard} ${styles.interactiveCard}`}
            title="Click to copy email"
          >
            <div className={styles.cardIconBox}>
              <Mail size={15} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.emailCardHeader}>
                <h3 className={styles.cardTitle}>Email</h3>
                <span className={styles.cardCopyTag}>
                  {copiedEmail ? "Copied!" : "Click to copy"}
                </span>
              </div>
              <p className={styles.cardValue}>{emailAddress}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
