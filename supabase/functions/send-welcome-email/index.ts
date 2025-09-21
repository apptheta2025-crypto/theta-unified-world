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
    
    const emailResponse = await resend.emails.send({
      from: "Theta Team <hello@theta.co.in>",
      to: [email],
      subject: isCreator ? "Welcome to Theta Create - Turn Your Expertise Into Revenue!" : "You're in! Welcome to the future of reading and listening.",
      html: isCreator ? `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h1 style="color: #6366f1; margin-bottom: 24px;">Welcome to Theta Create! 🚀</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            Thanks for your interest in Theta Create! We're excited to help you turn your expertise into premium content that generates revenue.
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">What's Coming Your Way:</h3>
            <ul style="color: #374151; line-height: 1.6;">
              <li>Exclusive creator beta access</li>
              <li>Advanced content creation tools</li>
              <li>Revenue sharing opportunities</li>
              <li>Direct connection with your audience</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            We'll be in touch soon with more details about the creator program and early access opportunities.
          </p>
          
          <p style="font-size: 14px; color: #6b7280;">
            Best regards,<br>
            The Theta Team
          </p>
        </div>
      ` : `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151;">
          
          <p style="font-size: 16px; margin-bottom: 20px;">Hi there,</p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Welcome, and thank you for joining the waitlist for Theta. Your spot is confirmed, and we are genuinely thrilled to have you as one of our earliest supporters.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            You've taken the first step toward a unified content experience. Get ready for a world where your ebooks, audiobooks, and podcasts all live in a single library. We're building a platform where you can seamlessly switch from reading an ebook to listening to its audiobook, picking up at the exact same spot.
          </p>
          
          <h3 style="color: #374151; font-size: 18px; margin: 24px 0 16px 0;">What's next?</h3>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            We're hard at work preparing the Theta App for its launch. As a member of our waitlist, you will be the first to know about exclusive updates, early access opportunities, and our official release.
          </p>
          
          <h3 style="color: #374151; font-size: 18px; margin: 24px 0 16px 0;">Help us build the community</h3>
          
          <p style="font-size: 16px; margin-bottom: 16px;">
            Great ideas grow faster with community support. If you're excited about our mission to build the "Spotify" for everything you read and listen to, the best way you can help is by sharing Theta with a friend:
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            <a href="https://theta.co.in" style="color: #6366f1; text-decoration: none;">https://theta.co.in</a>
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            You can also follow our journey on our social channels for the latest news.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Thank you again for joining us. We can't wait to share what we've built with you.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 8px;">Stay curious,</p>
          <p style="font-size: 16px; margin-bottom: 0;">The Theta Team</p>
        </div>
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