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
      from: "Theta Team <onboarding@resend.dev>",
      to: [email],
      subject: isCreator ? "Welcome to Theta Create - Turn Your Expertise Into Revenue!" : "Welcome to Theta Universe - 2 Months FREE! 🎉",
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
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h1 style="color: #6366f1; margin-bottom: 24px;">Welcome to the Theta Universe! 🎉</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            Thank you for joining our waitlist! You're now in line for <strong>2 months of Theta Premium absolutely FREE</strong> when we launch.
          </p>
          
          <div style="background: #f0f9ff; border: 2px solid #0ea5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">🇮🇳 Launching Soon in India</h3>
            <p style="color: #0369a1; margin-bottom: 0;">
              Premium plans starting from just <strong>₹159/month</strong> - but you get your first 2 months free!
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">What to Expect:</h3>
            <ul style="color: #374151; line-height: 1.6;">
              <li>Early access notifications</li>
              <li>Exclusive launch updates</li>
              <li>Special pricing and offers</li>
              <li>First access to premium features</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 16px;">
            We're working hard to bring you the unified universe for content. Stay tuned for updates!
          </p>
          
          <p style="font-size: 14px; color: #6b7280;">
            Best regards,<br>
            The Theta Team
          </p>
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