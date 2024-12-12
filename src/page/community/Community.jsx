import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  TextField,
  Avatar,
  IconButton,
  Paper,
  Divider,
  useTheme,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  InputAdornment,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import {
  AddPhotoAlternate,
  VideoCall,
  ThumbUp,
  Comment,
  Share,
  MoreVert,
  LocationOn,
  Tag,
  Search,
  ThumbUpAltOutlined,
  BookmarkBorder,
  Bookmark,
  ExpandMore,
  Info,
  Event,
  Analytics,
  TrendingUp,
  Warning,
  Lightbulb,
  Timeline,
} from "@mui/icons-material";
import Header from "../../components/Header";

const mockPosts = [
  {
    id: 1,
    businessName: "Al Raha Electronics",
    ownerName: "Ahmed Al Mansouri",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Excited to showcase our new range of smart home devices! Looking for potential distributors in Dubai and Abu Dhabi regions. #UAETech #Innovation",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
    likes: 45,
    comments: 12,
    location: "Dubai, UAE",
    timestamp: "2 hours ago",
    tags: ["Electronics", "Smart Home", "UAE Business"],
    saved: false,
  },
  {
    id: 2,
    businessName: "Dubai Gold Traders",
    ownerName: "Fatima Al Hashimi",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Latest collection of traditional and modern jewelry designs now available! Special Eid collection coming soon. Visit our showroom in Gold Souk. #DubaiGold #Jewelry",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0",
    likes: 89,
    comments: 24,
    location: "Gold Souk, Dubai",
    timestamp: "5 hours ago",
    tags: ["Jewelry", "Gold", "Eid Collection"],
    saved: true,
  },
  {
    id: 3,
    businessName: "Sharjah Textiles",
    ownerName: "Omar Al Qasimi",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Introducing our new fabric collection for Summer 2024. Wholesale inquiries welcome. #UAEFashion #Textiles",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
    likes: 67,
    comments: 15,
    location: "Sharjah, UAE",
    timestamp: "1 day ago",
    tags: ["Textiles", "Fashion", "Wholesale"],
    saved: false,
  },
];

const businessInfo = [
  {
    title: "Business Registration",
    content: "To register a business in the UAE:\n\n1. Choose your business activity\n2. Select a legal structure (LLC, FZE, etc.)\n3. Choose your location (Mainland or Free Zone)\n4. Get initial approval from DED\n5. Choose your trade name\n6. Submit required documents\n7. Get your trade license\n\nTypical timeline: 2-3 weeks"
  },
  {
    title: "Free Zones Overview",
    content: "Popular UAE Free Zones:\n\n• Dubai Multi Commodities Centre (DMCC)\n• Dubai International Financial Centre (DIFC)\n• Jebel Ali Free Zone (JAFZA)\n• Abu Dhabi Global Market (ADGM)\n\nBenefits:\n• 100% foreign ownership\n• 0% corporate and personal tax\n• 100% repatriation of capital\n• No currency restrictions"
  },
  {
    title: "VAT Information",
    content: "Key VAT details:\n\n• Current rate: 5%\n• Registration threshold: AED 375,000\n• Voluntary registration: AED 187,500\n• Filing frequency: Monthly/Quarterly\n\nRegister if annual taxable supplies exceed threshold."
  },
  {
    title: "Funding Options",
    content: "Available funding sources:\n\n1. Bank Loans - UAE banks\n2. Government Programs - Khalifa Fund\n3. Angel Investors - UAE networks\n4. Venture Capital - Dubai/Abu Dhabi firms\n5. Crowdfunding - Beehive, Eureeca\n\nRequired: Business plan, financials, trade license"
  },
  {
    title: "Emiratisation Guidelines",
    content: "Requirements by sector:\n\n• Banking: 4% for branches\n• Insurance: 5% of workforce\n• Trade: 2% (50+ employees)\n\nBenefits:\n• Government incentives\n• Enhanced local relationships\n• Cultural integration"
  }
];

const businessEvents = [
  {
    title: "GITEX Technology Week",
    date: "October 2024",
    location: "Dubai World Trade Centre",
    description: "The largest technology exhibition in MENA region featuring latest innovations in AI, blockchain, and digital transformation.",
    category: "Technology",
    website: "gitex.com"
  },
  {
    title: "Arab Health",
    date: "January 2024",
    location: "Dubai World Trade Centre",
    description: "Leading healthcare exhibition in the Middle East, connecting medical device manufacturers and service providers.",
    category: "Healthcare",
    website: "arabhealthonline.com"
  },
  {
    title: "ADIPEC",
    date: "November 2024",
    location: "Abu Dhabi National Exhibition Centre",
    description: "Major oil and gas event bringing together industry leaders and innovators in energy sector.",
    category: "Energy",
    website: "adipec.com"
  },
  {
    title: "Dubai Airshow",
    date: "November 2024",
    location: "Dubai World Central",
    description: "Premier aerospace event showcasing latest aviation technology and industry developments.",
    category: "Aviation",
    website: "dubaiairshow.aero"
  },
  {
    title: "Gulfood",
    date: "February 2024",
    location: "Dubai World Trade Centre",
    description: "World's largest annual food & beverage trade exhibition connecting global F&B community.",
    category: "Food & Beverage",
    website: "gulfood.com"
  }
];

const Community = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
    video: null,
    location: "",
    tags: [],
  });
  const [currentTab, setCurrentTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCommentDialog, setShowCommentDialog] = useState(false);

  const handlePostSubmit = () => {
    if (newPost.content) {
      const post = {
        id: posts.length + 1,
        businessName: "Your Business",
        ownerName: "Your Name",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        content: newPost.content,
        image: newPost.image,
        video: newPost.video,
        location: newPost.location,
        tags: newPost.tags,
        likes: 0,
        comments: 0,
        timestamp: "Just now",
        saved: false,
      };
      setPosts([post, ...posts]);
      setNewPost({ content: "", image: null, video: null, location: "", tags: [] });
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  const handleAddTag = () => {
    if (tagInput && !newPost.tags.includes(tagInput)) {
      setNewPost({ ...newPost, tags: [...newPost.tags, tagInput] });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setNewPost({ 
      ...newPost, 
      tags: newPost.tags.filter(tag => tag !== tagToRemove) 
    });
  };

  const filteredPosts = posts.filter(post => {
    if (currentTab === 1 && !post.saved) return false;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      post.businessName.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <Box m="20px">
      <Header title="Business Community" subTitle="Connect with UAE Business Owners" />

      <Tabs
        value={currentTab}
        onChange={(e, newValue) => setCurrentTab(newValue)}
        sx={{ mb: 3 }}
      >
        <Tab icon={<Comment />} label="POSTS" />
        <Tab icon={<Info />} label="BUSINESS INFO" />
        <Tab icon={<Event />} label="EVENTS" />
        <Tab icon={<BookmarkBorder />} label="SAVED" />
      </Tabs>

      {currentTab === 0 && (
        <>
          {/* Search */}
          <TextField
            fullWidth
            placeholder="Search posts, businesses, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          {/* Create Post Section */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Share Your Business Update
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="What's new with your business?"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              sx={{ mb: 2 }}
            />
            
            {/* Location and Tags */}
            <Box sx={{ mb: 2 }}>
              <TextField
                placeholder="Add location"
                value={newPost.location}
                onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
                sx={{ mr: 2 }}
              />
              <TextField
                placeholder="Add tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Tag />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Display Tags */}
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {newPost.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  onDelete={() => handleRemoveTag(tag)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <IconButton color="primary" component="label">
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const imageUrl = URL.createObjectURL(file);
                      setNewPost({ ...newPost, image: imageUrl });
                    }}
                  />
                  <AddPhotoAlternate />
                </IconButton>
                <IconButton color="primary" component="label">
                  <input
                    hidden
                    accept="video/*"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const videoUrl = URL.createObjectURL(file);
                      setNewPost({ ...newPost, video: videoUrl });
                    }}
                  />
                  <VideoCall />
                </IconButton>
              </Box>
              <Button
                variant="contained"
                onClick={handlePostSubmit}
                disabled={!newPost.content}
              >
                Post Update
              </Button>
            </Box>
          </Paper>

          {/* Posts Feed */}
          <Grid container spacing={3}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} key={post.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={post.avatar} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {post.businessName}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {post.ownerName} • {post.timestamp}
                          </Typography>
                          {post.location && (
                            <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                              {post.location}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <IconButton onClick={() => handleSave(post.id)}>
                        {post.saved ? <Bookmark /> : <BookmarkBorder />}
                      </IconButton>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {post.content}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {post.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    {post.image && (
                      <CardMedia
                        component="img"
                        height="300"
                        image={post.image}
                        alt="Post image"
                        sx={{ borderRadius: 1, mb: 2 }}
                      />
                    )}
                    {post.video && (
                      <CardMedia
                        component="video"
                        height="300"
                        src={post.video}
                        controls
                        sx={{ borderRadius: 1, mb: 2 }}
                      />
                    )}
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Button 
                        startIcon={post.liked ? <ThumbUp /> : <ThumbUpAltOutlined />}
                        onClick={() => handleLike(post.id)}
                      >
                        Like ({post.likes})
                      </Button>
                      <Button 
                        startIcon={<Comment />}
                        onClick={() => {
                          setSelectedPost(post);
                          setShowCommentDialog(true);
                        }}
                      >
                        Comment ({post.comments})
                      </Button>
                      <Button startIcon={<Share />}>
                        Share
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {currentTab === 1 && (
        <Box>
          <Typography variant="h4" color="secondary" sx={{ mb: 3 }}>
            UAE Business Information Guide
          </Typography>
          {businessInfo.map((info, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" color="secondary">
                  {info.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {info.content.split('\n').map((line, i) => (
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
      )}

      {currentTab === 2 && (
        <Box>
          <Typography variant="h4" color="secondary" sx={{ mb: 3 }}>
            Upcoming Business Events
          </Typography>
          <Grid container spacing={3}>
            {businessEvents.map((event, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" color="secondary">
                        {event.title}
                      </Typography>
                      <Chip label={event.category} color="primary" />
                    </Box>
                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Event sx={{ mr: 1 }} /> {event.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOn sx={{ mr: 1 }} /> {event.location}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {event.description}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      href={`https://${event.website}`}
                      target="_blank"
                      fullWidth
                    >
                      Visit Website
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {currentTab === 3 && (
        <Grid container spacing={3}>
          {posts.filter(post => post.saved).map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={post.avatar} sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {post.businessName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {post.ownerName} • {post.timestamp}
                        </Typography>
                        {post.location && (
                          <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                            {post.location}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <IconButton onClick={() => handleSave(post.id)}>
                      {post.saved ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {post.content}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {post.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  {post.image && (
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.image}
                      alt="Post image"
                      sx={{ borderRadius: 1, mb: 2 }}
                    />
                  )}
                  {post.video && (
                    <CardMedia
                      component="video"
                      height="300"
                      src={post.video}
                      controls
                      sx={{ borderRadius: 1, mb: 2 }}
                    />
                  )}
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button 
                      startIcon={post.liked ? <ThumbUp /> : <ThumbUpAltOutlined />}
                      onClick={() => handleLike(post.id)}
                    >
                      Like ({post.likes})
                    </Button>
                    <Button 
                      startIcon={<Comment />}
                      onClick={() => {
                        setSelectedPost(post);
                        setShowCommentDialog(true);
                      }}
                    >
                      Comment ({post.comments})
                    </Button>
                    <Button startIcon={<Share />}>
                      Share
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Comment Dialog */}
      <Dialog 
        open={showCommentDialog} 
        onClose={() => setShowCommentDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Write a comment..."
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCommentDialog(false)}>Cancel</Button>
          <Button variant="contained">Post Comment</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Community; 