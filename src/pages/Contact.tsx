
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyyazCgHU6kJ8UR_dmU_S3q27z_ehu9CVtFmt_yPiqrmm3pm8eYnu3FSA_Grql-gSZC6w/exec", {
        method: "POST",
        mode: "no-cors", // avoids CORS issues for public scripts
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Show success toast even with no-cors (can't confirm success)
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Get in Touch</h1>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
              I'd love to hear from you! Whether you have a question, opportunity, or just want to connect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-theme-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-700">Dallas, Texas, United States</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-theme-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <a href="mailto:sahibsood4@gmail.com" className="text-theme-blue hover:underline">
                  sahibsood4@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-6 w-6 text-theme-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/sahibsood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-theme-blue hover:underline"
                >
                  linkedin.com/in/sahibsood
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-theme-dark-blue to-theme-blue p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-8">
                    Fill out the form and I'll get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Dallas, Texas, United States</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <a href="mailto:sahibsood4@gmail.com" className="hover:underline">
                      sahibsood4@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-3" />
                      <a 
                        href="https://linkedin.com/in/sahibsood" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/sahibsood
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-3" />
                      <a 
                        href="https://github.com/sahibsood4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/sahibsood4
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Sahib Sood"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="sahib@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can I help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-theme-blue hover:bg-theme-dark-blue text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
