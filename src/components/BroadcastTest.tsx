import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const BroadcastTest = () => {
  const [isSending, setIsSending] = useState(false);

  const sendTestEmail = async () => {
    setIsSending(true);
    try {
      console.log("Sending test broadcast email...");
      
      const { data, error } = await supabase.functions.invoke('send-broadcast', {
        body: {
          email: 'lubhitmamodia23@gmail.com',
          websiteUrl: 'https://theta.lovableproject.com',
          logoUrl: 'https://theta.lovableproject.com/src/assets/theta-logo.png'
        }
      });

      if (error) {
        throw error;
      }

      console.log("Broadcast email response:", data);
      
      toast({
        title: "🚀 Broadcast Email Sent!",
        description: "Test email sent successfully to lubhitmamodia23@gmail.com"
      });
    } catch (error: any) {
      console.error("Error sending broadcast:", error);
      toast({
        title: "Error",
        description: `Failed to send broadcast email: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={sendTestEmail}
        disabled={isSending}
        className="bg-gradient-cta hover:shadow-glow transition-all duration-300 font-bold px-6 py-3 text-sm shadow-lg hover:scale-105 rounded-full"
      >
        {isSending ? "Sending..." : "🚀 Send Test Broadcast"}
      </Button>
    </div>
  );
};

export default BroadcastTest;