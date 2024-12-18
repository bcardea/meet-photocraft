import { toast } from 'react-hot-toast';
import { CTA } from '../constants/cta';

export async function openExternalLink(url: string) {
  // Show loading toast
  const loadingToast = toast.loading('Opening link...');
  
  try {
    // First try to check if the URL is accessible
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors'
    });

    // Clear loading toast
    toast.dismiss(loadingToast);

    // Try opening in new window first
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    if (newWindow === null) {
      // If popup is blocked, try direct navigation
      window.location.href = url;
    }
  } catch (error) {
    console.error('Error accessing link:', error);
    toast.dismiss(loadingToast);
    
    // Try fallback URL if main URL fails
    if (url === CTA.URL && CTA.FALLBACK_URL) {
      toast.error('Primary link unavailable, trying alternate link...');
      setTimeout(() => openExternalLink(CTA.FALLBACK_URL), 1000);
    } else {
      toast.error('Unable to open link. Please try again later.');
    }
  }
}