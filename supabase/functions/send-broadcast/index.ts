import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";
import { ShareBroadcastEmail } from "./_templates/share-broadcast.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BroadcastEmailRequest {
  email: string;
  websiteUrl?: string;
  logoUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, websiteUrl, logoUrl }: BroadcastEmailRequest = await req.json();

    console.log("Sending broadcast email to:", email);

    // Default URLs
    const defaultWebsiteUrl = websiteUrl || "https://theta.co.in";
    const defaultLogoUrl = logoUrl || "https://theta.co.in/src/assets/theta-logo.png";

    // Render the React email template
    const html = await renderAsync(
      React.createElement(ShareBroadcastEmail, {
        websiteUrl: defaultWebsiteUrl,
        logoUrl: defaultLogoUrl,
      })
    );

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Theta Universe <onboarding@resend.dev>",
      to: [email],
      subject: "🚀 Help Us Spread the Word About Theta - Share with Your Friends!",
      html,
    });

    console.log("Broadcast email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Broadcast email sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-broadcast function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);