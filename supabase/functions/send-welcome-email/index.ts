import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  source: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source }: WelcomeEmailRequest = await req.json();
    
    console.log(`Sending welcome email to ${email} from source: ${source}`);

    const isCreator = source === 'creator';
    
    // Add contact to Resend audience
    try {
      await resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: '76bd49ad-9462-4971-9ffa-6eefb60e90b0', // Replace with your actual audience ID from Resend dashboard
      });
    } catch (audienceError) {
      console.log('Contact might already exist in audience:', audienceError);
    }

    const emailResponse = await resend.emails.send({
      from: "Theta Team <communications@theta.co.in>",
      to: [email],
      subject: isCreator ? "Welcome to Theta Create - Turn Your Expertise Into Revenue!" : "You're in! Welcome to the future of reading and listening.",
      html: isCreator ? `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Theta Create</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, hsl(240, 21%, 15%) 0%, hsl(240, 39%, 12%) 50%, hsl(240, 23%, 9%) 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
            
            <!-- Header with Logo and Gradient -->
            <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center;">
              <img src="https://theta.co.in/theta-logo.png" alt="Theta Logo" style="height: 40px; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Theta Create! 🚀</h1>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px;">
                Thanks for your interest in Theta Create! We're excited to help you turn your expertise into premium content that generates revenue.
              </p>
              
              <!-- Features Box -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #6366f1;">
                <h3 style="color: #6366f1; margin: 0 0 16px 0; font-size: 18px;">What's Coming Your Way:</h3>
                <ul style="color: #374151; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>Exclusive creator beta access</li>
                  <li>Advanced content creation tools</li>
                  <li>Revenue sharing opportunities</li>
                  <li>Direct connection with your audience</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 32px;">
                We'll be in touch soon with more details about the creator program and early access opportunities.
              </p>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://theta.co.in" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px;">Visit Theta</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f8fafc; padding: 30px; border-top: 1px solid #e5e7eb;">
              <div style="text-align: center; margin-bottom: 24px;">
                <p style="color: #6b7280; margin: 0 0 16px 0; font-size: 14px;">Follow us on social media:</p>
                <div style="display: inline-block;">
                  <a href="https://www.linkedin.com/company/apptheta/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                    <img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="LinkedIn" style="width: 24px; height: 24px;">
                  </a>
                  <a href="https://www.instagram.com/theta.app_/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                    <img src="https://img.icons8.com/color/32/000000/instagram-new.png" alt="Instagram" style="width: 24px; height: 24px;">
                  </a>
                </div>
              </div>
              
              <p style="text-align: center; color: #6b7280; margin: 0; font-size: 14px;">
                Best regards,<br>
                <strong>The Theta Team</strong>
              </p>
              
              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  © 2025 Theta. All rights reserved.<br>
                  <a href="https://theta.co.in" style="color: #6366f1; text-decoration: none;">theta.co.in</a><br>
                  <a href="https://theta.co.in/unsubscribe?email=${encodeURIComponent(email)}" style="color: #9ca3af; text-decoration: underline; font-size: 11px;">Unsubscribe from emails</a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      ` : `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Theta</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, hsl(240, 21%, 15%) 0%, hsl(240, 39%, 12%) 50%, hsl(240, 23%, 9%) 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
            
            <!-- Header with Logo and Gradient -->
            <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center;">
              <img src="https://theta.co.in/theta-logo.png" alt="Theta Logo" style="height: 40px; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Theta!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Your spot is confirmed 🎉</p>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px;">
                Hi there,
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px;">
                Welcome, and thank you for joining the waitlist for Theta. Your spot is confirmed, and we are genuinely thrilled to have you as one of our earliest supporters.
              </p>
              
              <!-- Feature Highlight -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #6366f1;">
                <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0;">
                  <strong>🎧 Unified Experience:</strong> Get ready for a world where your ebooks, audiobooks, and podcasts all live in a single library. We're building a platform where you can seamlessly switch from reading an ebook to listening to its audiobook, picking up at the exact same spot.
                </p>
              </div>
              
              <h3 style="color: #374151; font-size: 20px; margin: 32px 0 16px 0; font-weight: 600;">What's next?</h3>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px;">
                We're hard at work preparing the Theta App for its launch. As a member of our waitlist, you will be the first to know about exclusive updates, early access opportunities, and our official release.
              </p>
              
              <h3 style="color: #374151; font-size: 20px; margin: 32px 0 16px 0; font-weight: 600;">Help us build the community</h3>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
                Great ideas grow faster with community support. If you're excited about our mission to build the "Spotify" for everything you read and listen to, the best way you can help is by sharing Theta with a friend:
              </p>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://theta.co.in" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px;">Share Theta</a>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px;">
                You can also follow our journey on our social channels for the latest news.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 8px;">
                Thank you again for joining us. We can't wait to share what we've built with you.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 8px;">Stay curious,</p>
            </div>
            
            <!-- Footer -->
            <div style="background: #f8fafc; padding: 30px; border-top: 1px solid #e5e7eb;">
              <div style="text-align: center; margin-bottom: 24px;">
                <p style="color: #6b7280; margin: 0 0 16px 0; font-size: 14px;">Follow us on social media:</p>
                <div style="display: inline-block;">
                  <a href="https://www.linkedin.com/company/apptheta/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                    <img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="LinkedIn" style="width: 24px; height: 24px;">
                  </a>
                  <a href="https://www.instagram.com/theta.app_/" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                    <img src="https://img.icons8.com/color/32/000000/instagram-new.png" alt="Instagram" style="width: 24px; height: 24px;">
                  </a>
                </div>
              </div>
              
              <p style="text-align: center; color: #6b7280; margin: 0; font-size: 14px;">
                <strong>The Theta Team</strong>
              </p>
              
              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  © 2025 Theta. All rights reserved.<br>
                  <a href="https://theta.co.in" style="color: #6366f1; text-decoration: none;">theta.co.in</a><br>
                  <a href="https://theta.co.in/unsubscribe?email=${encodeURIComponent(email)}" style="color: #9ca3af; text-decoration: underline; font-size: 11px;">Unsubscribe from emails</a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);