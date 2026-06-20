"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Cold Chain Last-Mile Delivery",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to send quote request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoCol}>
            <div>
              <span className={styles.tagline}>Get In Touch</span>
              <h2 className={styles.title}>Partner With A&S Logistics</h2>
            </div>

            <p className={styles.description}>
              Have specific fleet requirements or need standard-operating-procedure compliant delivery of health commodities? Connect directly with our Fleet Management team.
            </p>

            <div className={styles.contactCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Primary Dispatch Manager</span>
                  <span className={styles.infoVal}>Sulaiman Madaki</span>
                </div>
              </div>

              <a href="tel:08033616172" className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>24/7 Fleet Contact</span>
                  <span className={styles.infoVal}>08033616172</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className={styles.formCard}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name / Company Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. Jigawa State Primary Health Board"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Contact Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. 08033616172"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>Logistics Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Cold Chain Last-Mile Delivery">Cold Chain Last-Mile Delivery (2°C - 8°C)</option>
                    <option value="Non-Cold Chain Logistics">Non-Cold Chain Logistics</option>
                    <option value="Fleet & Route Management">Fleet & Route Management</option>
                    <option value="General Merchandise Haulage">General Merchandise Haulage</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Route & Shipment Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Include pickup location, final destination, and estimated shipment size."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>
            ) : (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request Received</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{formData.name}</strong>. Your request for <em>{formData.service}</em> has been catalogued.
                  Our Dispatch Manager <strong>Sulaiman Madaki</strong> will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className={styles.submitBtn}
                  style={{ width: "auto", padding: "10px 24px", marginTop: "16px" }}
                >
                  Send Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
