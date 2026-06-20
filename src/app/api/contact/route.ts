import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, service, message } = body;

        // Validate required fields
        if (!name || !phone || !service || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        // Note: You need to set up environment variables:
        // EMAIL_USER=sulaimanmadaki491@gmail.com
        // EMAIL_APP_PASSWORD=your-app-password
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "sulaimanmadaki491@gmail.com",
            subject: `New Quote Request: ${service}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #047857 0%, #0284c7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #047857; }
              .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #047857; }
              .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Quote Request - A&S Logistics</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Client Name / Company:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Contact Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Service Required:</div>
                  <div class="value">${service}</div>
                </div>
                <div class="field">
                  <div class="label">Route & Shipment Details:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This request was submitted from the A&S Logistics website.</p>
                <p>Please contact the client within 24 hours.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Quote request sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send quote request" },
            { status: 500 }
        );
    }
}