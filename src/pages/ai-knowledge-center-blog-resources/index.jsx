// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { GoogleGenAI } from "@google/genai";
//
// import Header from '../../components/ui/Header';
// import Icon from '../../components/AppIcon';
// import BlogCard from './components/BlogCard';
// import NewsletterSignup from './components/NewsletterSignup';
// // Adjust this path if your file structure is different
// import TrendingTopics from '../../components/TrendingTopics';
//
// // Use your valid API key here, preferably from environment variables
// const ai = new GoogleGenAI({ apiKey: "AIzaSyBHMKVBQVtUai4ZB7f4iIv1CJ2W5yXA6uE" });
//
// const AIKnowledgeCenter = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [blogArticles, setBlogArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   const parseArticlesFromResponse = (text) => {
//     console.log("--- Raw API Response ---");
//     console.log(text);
//     const articles = [];
//     const articleBlocks = text.split(/\n\s*\d+\.\s+/).filter(block => block.trim());
//
//     articleBlocks.forEach((block, index) => {
//       const titleMatch = block.match(/Title:\s*(.*)/);
//       const excerptMatch = block.match(/Excerpt:\s*(.*)/);
//       const categoryMatch = block.match(/Category:\s*(.*)/);
//       const audienceMatch = block.match(/Audience:\s*(.*)/);
//       const complexityMatch = block.match(/Complexity:\s*(.*)/);
//
//       if (titleMatch && excerptMatch) {
//         articles.push({
//           id: index + 1,
//           title: titleMatch[1].trim(),
//           excerpt: excerptMatch[1].trim(),
//           category: categoryMatch ? categoryMatch[1].trim().toLowerCase() : 'general',
//           audience: audienceMatch ? audienceMatch[1].trim().toLowerCase() : 'all',
//           complexity: complexityMatch ? complexityMatch[1].trim().toLowerCase() : 'beginner',
//           image: `https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&h=400&fit=crop&q=80&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format`,
//           author: { name: "AI Author", role: "Generated Content", avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=face" },
//           publishedAt: new Date().toISOString().split('T')[0],
//           views: Math.floor(Math.random() * 5000) + 100,
//         });
//       }
//     });
//
//     console.log("--- Parsed Articles ---");
//     console.log(articles);
//     return articles;
//   };
//
//   useEffect(() => {
//     const fetchAndCacheArticles = async () => {
//       const cacheKey = 'geminiBlogCache';
//       const twentyFourHours = 24 * 60 * 60 * 1000;
//
//       try {
//         const cachedItem = localStorage.getItem(cacheKey);
//         if (cachedItem) {
//           const { timestamp, data } = JSON.parse(cachedItem);
//           if (Date.now() - timestamp < twentyFourHours) {
//             console.log("--- Loading articles from valid cache ---");
//             setBlogArticles(data);
//             setIsLoading(false);
//             return;
//           } else {
//             console.log("--- Cache expired. Fetching new data. ---");
//             localStorage.removeItem(cacheKey);
//           }
//         }
//       } catch (e) {
//         console.error("Failed to read or parse cache.", e);
//         localStorage.removeItem(cacheKey);
//       }
//
//       setIsLoading(true);
//       setError(null);
//       try {
//         const groundingTool = { googleSearch: {} };
//         const config = { tools: [groundingTool] };
//
//         // *** CHANGE MADE HERE: Changed from 6 to 5 articles ***
//         const prompt = `
//           List the top 5 latest and most relevant articles on Artificial Intelligence and Deep Learning.
//           For each article, provide the following details in this exact format:
//           Title: [Article Title]
//           Excerpt: [A short summary of the article]
//           Category: [e.g., Technical, Business, Ethics]
//           Audience: [e.g., Technical, Executive, General]
//           Complexity: [e.g., Beginner, Intermediate, Advanced]
//         `;
//
//         const response = await ai.models.generateContent({
//           model: "gemini-2.5-flash",
//           contents: prompt,
//           config,
//         });
//
//         const parsedArticles = parseArticlesFromResponse(response.text);
//         setBlogArticles(parsedArticles);
//
//         const cachePayload = {
//           timestamp: Date.now(),
//           data: parsedArticles,
//         };
//         localStorage.setItem(cacheKey, JSON.stringify(cachePayload));
//         console.log("--- Articles fetched from API and cached successfully ---");
//
//       } catch (err) {
//         console.error("Error fetching articles from Gemini API:", err);
//         setError("Failed to fetch articles. Please check your API key and network connection.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//
//     fetchAndCacheArticles();
//   }, []);
//
//   const filteredArticles = blogArticles.filter(article => {
//     return !searchQuery ||
//       article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//   });
//
//   const handleClearFilters = () => {
//     setSearchQuery('');
//   };
//
//   return (
//     <>
//       <Helmet>
//         <title>AI Knowledge Center - Blog & Resources | Givi AI</title>
//         <meta name="description" content="Explore comprehensive AI insights, implementation guides, and industry trends." />
//       </Helmet>
//
//       <div className="min-h-screen bg-background">
//         <Header />
//
//         {/* Hero Section */}
//         <section className="pt-24 pb-16 px-6 lg:px-8">
//           {/* ... Hero content ... */}
//         </section>
//
//         {/* Main Content */}
//         <section className="px-6 lg:px-8 mb-16">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//               {/* Main Content Area */}
//               <div className="lg:col-span-3">
//                 <div className="mb-8">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-2xl font-bold text-foreground">
//                       Latest Articles
//                     </h2>
//                     <span className="text-muted-foreground">
//                       {filteredArticles.length} articles found
//                     </span>
//                   </div>
//
//                   {isLoading ? (
//                     <div className="text-center py-12">
//                       <Icon name="Loader" size={48} className="text-primary mx-auto mb-4 animate-spin" />
//                       <h3 className="text-xl font-semibold text-foreground">Loading Articles...</h3>
//                     </div>
//                   ) : error ? (
//                     <div className="text-center py-12 bg-destructive/10 text-destructive rounded-lg">
//                       <Icon name="AlertTriangle" size={48} className="mx-auto mb-4" />
//                       <h3 className="text-xl font-semibold mb-2">An Error Occurred</h3>
//                       <p>{error}</p>
//                     </div>
//                   ) : filteredArticles.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       {filteredArticles.map((article) => (
//                         <BlogCard key={article.id} article={article} />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-12">
//                       <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
//                       <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
//                       <p className="text-muted-foreground mb-4">
//                         This could be due to an API error or no results matching your search.
//                       </p>
//                       <button
//                         onClick={handleClearFilters}
//                         className="text-primary hover:text-primary/80 font-medium"
//                       >
//                         Clear all filters
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//
//               {/* Sidebar */}
//               <div className="lg:col-span-1 space-y-8">
//                 <TrendingTopics articles={blogArticles} isLoading={isLoading} />
//               </div>
//             </div>
//           </div>
//         </section>
//
//         {/* Newsletter Signup */}
// {/*         <section className="px-6 lg:px-8 mb-16"> */}
// {/*           <div className="max-w-7xl mx-auto"> */}
// {/*             <NewsletterSignup /> */}
// {/*           </div> */}
// {/*         </section> */}
//
//         {/* Footer */}
//         <footer className="bg-card border-t border-border px-6 lg:px-8 py-12">
//             {/* Your footer content */}
//         </footer>
//       </div>
//     </>
//   );
// };
//
// export default AIKnowledgeCenter;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import TrendingTopics from '../../components/TrendingTopics';

// --- MODIFIED: BlogCard component to handle new link property and hover effect ---
const BlogCard = ({ article }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-foreground hover:text-primary transition-colors"
      >
        {article.title}
      </a>
      <p className="text-muted-foreground mt-2">{article.excerpt}</p>
    </div>
  </div>
);


const AIKnowledgeCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // --- MODIFIED: Static array of blog articles ---
  const blogArticles = [
    {
      id: 1,
      title: 'Attention Is All You Need',
      excerpt: 'On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.',
      link: 'https://arxiv.org/pdf/1706.03762',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'AN IMAGE IS WORTH 16X16 WORDS: TRANSFORMERS FOR IMAGE RECOGNITION AT SCALE',
      excerpt: 'We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.).',
      link: 'https://arxiv.org/pdf/2010.11929',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=800&h=400&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'DeepSeek-V3 Technical Report',
      excerpt: 'We pre-train DeepSeek-V3 on 14.8 trillion diverse and high-quality tokens, followed by Supervised Fine-Tuning and Reinforcement Learning stages to fully harness its capabilities. Comprehensive evaluations reveal that DeepSeek-V3 outperforms other open-source models and achieves performance comparable to leading closed-source models.',
      link: 'https://arxiv.org/pdf/2412.19437',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'LLaMA: Open and Efficient Foundation Language Models',
      excerpt: 'We introduce LLaMA, a collection of foundation language models ranging from 7B to 65B parameters. We train our models on trillions of tokens, and show that it is possible to train state-of-the-art models using publicly available datasets exclusively, without resorting to proprietary and inaccessible datasets.',
      link: 'https://arxiv.org/pdf/2302.13971',
      image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=400&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'You could have designed state of the art positional encoding',
      excerpt: 'This post walks you through the step-by-step discovery of state-of-the-art positional encoding in transformer models. We will achieve this by iteratively improving our approach to encoding position, arriving at Rotary Postional Encoding (RoPE) used in the latest LLama 3.2 release and most modern transformers.',
      link: 'https://huggingface.co/blog/designing-positional-encoding',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=400&fit=crop&q=80',
    },
  ];

  const filteredArticles = blogArticles.filter(article => {
    return !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleClearFilters = () => {
    setSearchQuery('');
  };

  return (
    <>
      <Helmet>
        <title>AI Knowledge Center - Blog & Resources | Givi AI</title>
        <meta name="description" content="Explore comprehensive AI insights, implementation guides, and industry trends." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          {/* ... Hero content ... */}
        </section>

        {/* Main Content */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      Latest Articles
                    </h2>
{/*                     <span className="text-muted-foreground"> */}
{/*                       {filteredArticles.length} articles found */}
{/*                     </span> */}
                  </div>

                  {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredArticles.map((article) => (
                        <BlogCard key={article.id} article={article} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                      <p className="text-muted-foreground mb-4">
                        No results matching your search.
                      </p>
                      <button
                        onClick={handleClearFilters}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <TrendingTopics articles={blogArticles} isLoading={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
{/*         <footer className="bg-card border-t border-border px-6 lg:px-8 py-12"> */}
{/*              */}{/* Your footer content */}
{/*         </footer> */}
      </div>
    </>
  );
};

export default AIKnowledgeCenter;