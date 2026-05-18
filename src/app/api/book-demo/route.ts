import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message, consent } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // NOT normal password
      },
    });

    // Prepare email recipients
    const sendEmailsTo = process.env.SMTP_TO_EMAIL?.split(",").map((email) => email.trim()) || [];

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: sendEmailsTo,
      subject: `New Business Inquiry - HBOX Pay - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f5f5f5;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; font-size: 32px; font-weight: 600; color: #000000; letter-spacing: -0.02em;">
                        💼 New Business Inquiry
                      </h1>
                      <p style="margin: 10px 0 0 0; font-size: 16px; color: #000000; font-weight: 400;">HBOX Pay Business Platform</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px; background-color: #ffffff;">
                      <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #000000;">
                        You have received a new business inquiry from a potential client:
                      </p>

                      <!-- Contact Information Box -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f9f9; border-radius: 16px; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 24px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #53B033; letter-spacing: -0.01em;">
                              Contact Information
                            </h2>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #000000; width: 140px;">Full Name:</td>
                                <td style="padding: 8px 0; font-size: 14px; color: #000000;">${fullName}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #000000;">Email:</td>
                                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #53B033; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #000000;">Phone:</td>
                                <td style="padding: 8px 0; font-size: 14px; color: #000000;">${phone || "Not provided"}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #000000;">SMS Consent:</td>
                                <td style="padding: 8px 0; font-size: 14px; color: #000000;">${consent ? "✓ Yes" : "✗ No"}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Box -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f9f9; border-radius: 16px; border-left: 4px solid #53B033;">
                        <tr>
                          <td style="padding: 24px;">
                            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #53B033;">Message:</h3>
                            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #000000;">${message}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Action Button -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); color: #000000; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; box-shadow: 0px 8px 30px rgba(140, 238, 84, 0.28);">
                              Reply to ${fullName.split(' ')[0]}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px; background-color: #f9f9f9; text-align: center; border-top: 1px solid #e5e5e5;">
                      <p style="margin: 0 0 8px 0; font-size: 13px; color: #666666;">
                        This email was sent from <strong>HBOX Pay</strong> contact form
                      </p>
                      <p style="margin: 0; font-size: 12px; color: #999999;">
                        Submitted on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === "true") {
      const confirmationMailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: email,
        subject: "Thank You for Contacting HBOX Pay - Let's Transform Your Business",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f5f5f5;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
              <tr>
                <td style="padding: 40px 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                      <td style="background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); padding: 50px 30px; text-align: center;">
                        <div style="font-size: 48px; margin-bottom: 10px;">✨</div>
                        <h1 style="margin: 0; font-size: 32px; font-weight: 600; color: #000000; letter-spacing: -0.02em;">
                          Thank You, ${fullName.split(' ')[0]}!
                        </h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px; color: #000000; font-weight: 400;">We've received your inquiry</p>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px; background-color: #ffffff;">
                        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #000000;">
                          Thank you for your interest in <strong>HBOX Pay</strong>. We're excited to show you how our platform can transform your business operations!
                        </p>

                        <!-- What Happens Next Box -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f9f9; border-radius: 16px; border-left: 4px solid #53B033; margin: 24px 0;">
                          <tr>
                            <td style="padding: 24px;">
                              <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #53B033; letter-spacing: -0.01em;">
                                What happens next?
                              </h2>
                              
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                  <td style="padding: 12px 0; vertical-align: top;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 28px; height: 28px; background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; color: #000000;">1</div>
                                        </td>
                                        <td style="padding-left: 12px;">
                                          <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000000;">Our team will review your request</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 12px 0; vertical-align: top;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 28px; height: 28px; background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; color: #000000;">2</div>
                                        </td>
                                        <td style="padding-left: 12px;">
                                          <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000000;">We'll contact you within <strong>24 hours</strong></p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 12px 0; vertical-align: top;">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 28px; height: 28px; background: linear-gradient(178.88deg, #8CEE54 -38.35%, #FFFFFF 285.31%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; color: #000000;">3</div>
                                        </td>
                                        <td style="padding-left: 12px;">
                                          <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000000;">Schedule your personalized consultation</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- Features Highlight -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f9f9; border-radius: 16px; margin: 24px 0;">
                          <tr>
                            <td style="padding: 24px;">
                              <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #000000;">In the meantime, explore HBOX Pay:</h3>
                              <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6; color: #000000;">✓ Payment processing & management</p>
                              <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6; color: #000000;">✓ Real-time inventory tracking</p>
                              <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6; color: #000000;">✓ Business analytics & insights</p>
                              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #000000;">✓ All-in-one operations platform</p>
                            </td>
                          </tr>
                        </table>

                        <p style="margin: 24px 0 0 0; font-size: 15px; line-height: 1.6; color: #000000;">
                          If you have any questions in the meantime, feel free to reply to this email.
                        </p>

                        <p style="margin: 16px 0 0 0; font-size: 15px; line-height: 1.6; color: #000000;">
                          Best regards,<br>
                          <strong style="color: #53B033;">The HBOX Pay Team</strong>
                        </p>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f9f9f9; text-align: center; border-top: 1px solid #e5e5e5;">
                        <p style="margin: 0 0 8px 0; font-size: 13px; color: #000000; font-weight: 600;">
                          HBOX Pay
                        </p>
                        <p style="margin: 0 0 4px 0; font-size: 12px; color: #666666;">
                          Run Your Business Smarter
                        </p>
                        <p style="margin: 0; font-size: 11px; color: #999999;">
                          © ${new Date().getFullYear()} HBOX Pay. All rights reserved.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      };

      await transporter.sendMail(confirmationMailOptions);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
