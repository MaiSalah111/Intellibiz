import React from "react";
import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: "How do I navigate the dashboard?",
      answer: "The dashboard provides several key sections:\n\n• Left Sidebar - Main navigation menu\n• Top Bar - Quick settings and profile access\n• Main Dashboard - Overview of your business metrics\n• Charts Section - Visual data representation\n• Community Tab - Connect with other UAE businesses\n\nUse the sidebar menu to navigate between different sections of the platform."
    },
    {
      question: "How can I customize my dashboard view?",
      answer: "You can customize your dashboard in several ways:\n\n1. Dark/Light Mode - Toggle using the theme switch in top bar\n2. Sidebar - Collapse/Expand for more space\n3. Charts - Interact with charts to view specific data\n4. Time Periods - Select different date ranges for data viewing\n5. Favorites - Bookmark frequently used sections"
    },
    {
      question: "How do I use the Community features?",
      answer: "The Community section allows you to:\n\n• Create Posts - Share updates about your business\n• Upload Media - Share images and videos\n• Add Tags - Categorize your posts\n• Network - Connect with other UAE businesses\n• Save Posts - Bookmark interesting content\n• Search - Find specific posts or businesses"
    },
    {
      question: "What do the different charts represent?",
      answer: "Our platform includes various charts:\n\n• Bar Chart - Shows product performance by emirate\n• Pie Chart - Displays revenue distribution by category\n• Line Chart - Tracks revenue trends over time\n• Geography Chart - Visualizes UAE market distribution\n\nHover over chart elements to see detailed information."
    },
    {
      question: "How can I manage my business profile?",
      answer: "To manage your profile:\n\n1. Click your avatar in the top bar\n2. Update business information\n3. Add company logo and description\n4. Set notification preferences\n5. Manage privacy settings\n6. Update contact information"
    },
    {
      question: "How do I interpret the business metrics?",
      answer: "Key metrics explained:\n\n• Revenue - Total earnings in AED\n• Market Share - Your position in UAE market\n• Growth Rate - Month-over-month changes\n• Regional Performance - Success by emirate\n• Category Distribution - Sales by product type"
    },
    {
      question: "How secure is my business data?",
      answer: "We ensure data security through:\n\n• Encrypted Data Storage\n• Secure Login System\n• Regular Backups\n• Access Controls\n• Privacy Settings\n• Compliance with UAE data protection laws"
    },
    {
      question: "Can I export reports from the dashboard?",
      answer: "Yes, you can export data in multiple formats:\n\n• PDF Reports\n• Excel Spreadsheets\n• CSV Files\n• Chart Images\n• Custom Reports\n\nUse the export button in each section to download your data."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "Support options include:\n\n1. Help Center - Detailed guides and tutorials\n2. Live Chat - Available during UAE business hours\n3. Email Support - 24/7 response\n4. Community Forum - Peer assistance\n5. Video Tutorials - Step-by-step guidance"
    },
    {
      question: "What's new in the latest update?",
      answer: "Recent updates include:\n\n• Enhanced Community Features\n• Improved Chart Interactions\n• New UAE Business Categories\n• Better Mobile Responsiveness\n• Faster Data Loading\n• Additional Export Options\n• More Customization Features"
    }
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions About Dashboard Features" />

      <Box mt="20px">
        {faqs.map((faq, index) => (
          <Accordion key={index} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={theme.palette.secondary.main} variant="h5">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
