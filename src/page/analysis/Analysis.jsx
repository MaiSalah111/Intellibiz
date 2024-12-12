import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  LinearProgress,
  Alert,
  AlertTitle,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Analytics,
  TrendingUp,
  Warning,
  Lightbulb,
  Timeline,
} from "@mui/icons-material";
import Header from "../../components/Header";

const mockAnalysis = {
  overview: {
    revenue: {
      trend: "upward",
      value: "+15%",
      insight: "Revenue growth is above industry average of 8%",
      recommendation: "Consider expanding to new emirates based on market analysis"
    },
    performance: {
      trend: "stable",
      value: "Good",
      insight: "Strong performance in Dubai and Abu Dhabi markets",
      recommendation: "Explore opportunities in Northern Emirates"
    },
    risks: {
      level: "moderate",
      areas: ["Market Competition", "Supply Chain"],
      recommendation: "Diversify supplier base and strengthen market position"
    }
  },
  marketInsights: [
    {
      category: "Electronics",
      growth: "+12%",
      opportunity: "High demand for smart home devices",
      action: "Focus on IoT product lines and smart home integration"
    },
    {
      category: "Gold & Jewelry",
      growth: "+8%",
      opportunity: "Growing luxury market in UAE",
      action: "Expand premium product offerings"
    },
    {
      category: "Textiles",
      growth: "+5%",
      opportunity: "Increasing demand for sustainable fashion",
      action: "Introduce eco-friendly product lines"
    }
  ],
  recommendations: [
    {
      title: "Market Expansion",
      description: "Based on your growth trajectory, consider expanding to Sharjah",
      impact: "Potential 25% revenue increase",
      priority: "High"
    },
    {
      title: "Product Mix Optimization",
      description: "Increase focus on high-margin electronics categories",
      impact: "Potential 15% profit improvement",
      priority: "Medium"
    },
    {
      title: "Digital Transformation",
      description: "Implement e-commerce solution for B2B sales",
      impact: "Potential 30% efficiency gain",
      priority: "High"
    }
  ]
};

const Analysis = () => {
  const theme = useTheme();
  const [analysisLoading, setAnalysisLoading] = useState(false);

  const generateNewAnalysis = () => {
    setAnalysisLoading(true);
    // Simulate API call for new analysis
    setTimeout(() => {
      setAnalysisLoading(false);
    }, 2000);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="AI Business Analysis" subTitle="Powered by Advanced Analytics" />
        <Button
          variant="contained"
          startIcon={<Analytics />}
          onClick={generateNewAnalysis}
          disabled={analysisLoading}
          sx={{ height: 40 }}
        >
          Generate New Analysis
        </Button>
      </Box>

      {analysisLoading ? (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress />
          <Typography sx={{ mt: 1 }}>
            Analyzing your business data...
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3} mt={1}>
          {/* Business Overview */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
                  Business Overview
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendingUp color="success" sx={{ mr: 1 }} />
                      <Typography variant="h6">
                        Revenue Growth: {mockAnalysis.overview.revenue.value}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {mockAnalysis.overview.revenue.insight}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Timeline color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">
                        Performance: {mockAnalysis.overview.performance.value}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {mockAnalysis.overview.performance.insight}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Warning color="warning" sx={{ mr: 1 }} />
                      <Typography variant="h6">
                        Risk Level: {mockAnalysis.overview.risks.level}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      Key areas: {mockAnalysis.overview.risks.areas.join(", ")}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Market Insights */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
                  Market Insights
                </Typography>
                {mockAnalysis.marketInsights.map((insight, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Lightbulb color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">
                        {insight.category} ({insight.growth})
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Opportunity: {insight.opportunity}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Recommended Action: {insight.action}
                    </Typography>
                    {index < mockAnalysis.marketInsights.length - 1 && (
                      <Divider sx={{ mt: 2 }} />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Recommendations */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
                  Strategic Recommendations
                </Typography>
                {mockAnalysis.recommendations.map((rec, index) => (
                  <Alert 
                    key={index} 
                    severity={rec.priority === "High" ? "warning" : "info"}
                    sx={{ mb: 2 }}
                  >
                    <AlertTitle>{rec.title}</AlertTitle>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {rec.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Potential Impact: {rec.impact}
                    </Typography>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Analysis; 