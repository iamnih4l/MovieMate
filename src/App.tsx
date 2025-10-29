import React, { useState } from 'react';
import { Film, Sparkles, ChevronRight, RefreshCw, Star, TrendingUp } from 'lucide-react';

const MOVIE_DATABASE = [
  { id: 1, title: "Inception", genre: ["Sci-Fi", "Thriller", "Action"], rating: 8.8, year: 2010, description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", traits: { complex: 0.95, emotional: 0.6, fastPaced: 0.8, dark: 0.7, intellectual: 0.95 } },
  { id: 2, title: "The Shawshank Redemption", genre: ["Drama"], rating: 9.3, year: 1994, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", traits: { complex: 0.7, emotional: 0.95, fastPaced: 0.3, dark: 0.6, intellectual: 0.7 } },
  { id: 3, title: "The Dark Knight", genre: ["Action", "Crime", "Thriller"], rating: 9.0, year: 2008, description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests.", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", traits: { complex: 0.8, emotional: 0.7, fastPaced: 0.9, dark: 0.95, intellectual: 0.75 } },
  { id: 4, title: "Pulp Fiction", genre: ["Crime", "Drama"], rating: 8.9, year: 1994, description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", traits: { complex: 0.9, emotional: 0.6, fastPaced: 0.7, dark: 0.85, intellectual: 0.8 } },
  { id: 5, title: "Forrest Gump", genre: ["Drama", "Romance"], rating: 8.8, year: 1994, description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", traits: { complex: 0.5, emotional: 0.95, fastPaced: 0.4, dark: 0.4, intellectual: 0.5 } },
  { id: 6, title: "The Matrix", genre: ["Sci-Fi", "Action"], rating: 8.7, year: 1999, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", traits: { complex: 0.85, emotional: 0.5, fastPaced: 0.9, dark: 0.7, intellectual: 0.9 } },
  { id: 7, title: "Interstellar", genre: ["Sci-Fi", "Drama", "Adventure"], rating: 8.6, year: 2014, description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", traits: { complex: 0.9, emotional: 0.85, fastPaced: 0.6, dark: 0.6, intellectual: 0.95 } },
  { id: 8, title: "Fight Club", genre: ["Drama", "Thriller"], rating: 8.8, year: 1999, description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", traits: { complex: 0.95, emotional: 0.7, fastPaced: 0.7, dark: 0.9, intellectual: 0.85 } },
  { id: 9, title: "Goodfellas", genre: ["Crime", "Drama"], rating: 8.7, year: 1990, description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners.", poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", traits: { complex: 0.75, emotional: 0.65, fastPaced: 0.8, dark: 0.85, intellectual: 0.7 } },
  { id: 10, title: "The Lord of the Rings", genre: ["Fantasy", "Adventure"], rating: 8.8, year: 2001, description: "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", traits: { complex: 0.7, emotional: 0.8, fastPaced: 0.6, dark: 0.65, intellectual: 0.6 } },
  { id: 11, title: "Parasite", genre: ["Thriller", "Drama", "Comedy"], rating: 8.6, year: 2019, description: "Greed and class discrimination threaten the newly formed symbiotic relationship between wealthy and destitute families.", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", traits: { complex: 0.85, emotional: 0.75, fastPaced: 0.7, dark: 0.8, intellectual: 0.9 } },
  { id: 12, title: "Gladiator", genre: ["Action", "Drama", "Adventure"], rating: 8.5, year: 2000, description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", traits: { complex: 0.6, emotional: 0.8, fastPaced: 0.75, dark: 0.7, intellectual: 0.5 } },
  { id: 13, title: "The Prestige", genre: ["Drama", "Mystery", "Thriller"], rating: 8.5, year: 2006, description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.", poster: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg", traits: { complex: 0.95, emotional: 0.7, fastPaced: 0.65, dark: 0.8, intellectual: 0.9 } },
  { id: 14, title: "Spirited Away", genre: ["Animation", "Fantasy", "Family"], rating: 8.6, year: 2001, description: "During her family's move, a sullen 10-year-old girl wanders into a world ruled by gods and spirits.", poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", traits: { complex: 0.7, emotional: 0.85, fastPaced: 0.5, dark: 0.5, intellectual: 0.7 } },
  { id: 15, title: "The Silence of the Lambs", genre: ["Crime", "Thriller", "Horror"], rating: 8.6, year: 1991, description: "A young FBI cadet must receive help from an incarcerated cannibal killer to catch another serial killer.", poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg", traits: { complex: 0.85, emotional: 0.65, fastPaced: 0.7, dark: 0.95, intellectual: 0.85 } },
  { id: 16, title: "Whiplash", genre: ["Drama", "Music"], rating: 8.5, year: 2014, description: "A promising young drummer enrolls at a cutthroat music conservatory where his dreams are mentored by a terrifying instructor.", poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", traits: { complex: 0.7, emotional: 0.9, fastPaced: 0.85, dark: 0.75, intellectual: 0.7 } },
  { id: 17, title: "La La Land", genre: ["Romance", "Drama", "Musical"], rating: 8.0, year: 2016, description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.", poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", traits: { complex: 0.5, emotional: 0.95, fastPaced: 0.5, dark: 0.3, intellectual: 0.5 } },
  { id: 18, title: "Mad Max Fury Road", genre: ["Action", "Adventure", "Sci-Fi"], rating: 8.1, year: 2015, description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", traits: { complex: 0.6, emotional: 0.6, fastPaced: 0.98, dark: 0.8, intellectual: 0.5 } },
  { id: 19, title: "Her", genre: ["Sci-Fi", "Romance", "Drama"], rating: 8.0, year: 2013, description: "In a near future, a lonely writer develops an unlikely relationship with an operating system.", poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg", traits: { complex: 0.75, emotional: 0.95, fastPaced: 0.3, dark: 0.5, intellectual: 0.8 } },
  { id: 20, title: "Arrival", genre: ["Sci-Fi", "Drama", "Mystery"], rating: 7.9, year: 2016, description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", traits: { complex: 0.9, emotional: 0.8, fastPaced: 0.4, dark: 0.6, intellectual: 0.95 } },
  { id: 21, title: "Get Out", genre: ["Horror", "Thriller", "Mystery"], rating: 7.7, year: 2017, description: "A young African-American visits his white girlfriend's parents, uncovering a terrifying secret.", poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", traits: { complex: 0.85, emotional: 0.75, fastPaced: 0.75, dark: 0.9, intellectual: 0.85 } },
  { id: 22, title: "Coco", genre: ["Animation", "Family", "Fantasy"], rating: 8.4, year: 2017, description: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer.", poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", traits: { complex: 0.6, emotional: 0.95, fastPaced: 0.6, dark: 0.4, intellectual: 0.6 } },
  { id: 23, title: "John Wick", genre: ["Action", "Thriller"], rating: 7.4, year: 2014, description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog.", poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", traits: { complex: 0.4, emotional: 0.5, fastPaced: 0.95, dark: 0.8, intellectual: 0.3 } },
  { id: 24, title: "Eternal Sunshine", genre: ["Romance", "Sci-Fi", "Drama"], rating: 8.3, year: 2004, description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.", poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg", traits: { complex: 0.9, emotional: 0.95, fastPaced: 0.5, dark: 0.6, intellectual: 0.85 } },
  { id: 25, title: "Blade Runner 2049", genre: ["Sci-Fi", "Drama", "Mystery"], rating: 8.0, year: 2017, description: "A young blade runner's discovery leads him to track down former blade runner Rick Deckard.", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", traits: { complex: 0.85, emotional: 0.75, fastPaced: 0.5, dark: 0.8, intellectual: 0.9 } },
  { id: 26, title: "The Godfather", genre: ["Crime", "Drama"], rating: 9.2, year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", traits: { complex: 0.8, emotional: 0.75, fastPaced: 0.5, dark: 0.85, intellectual: 0.8 } },
  { id: 27, title: "Schindler's List", genre: ["Drama", "History", "War"], rating: 9.0, year: 1993, description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.", poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", traits: { complex: 0.7, emotional: 0.95, fastPaced: 0.4, dark: 0.95, intellectual: 0.8 } },
  { id: 28, title: "12 Angry Men", genre: ["Drama"], rating: 9.0, year: 1957, description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", poster: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg", traits: { complex: 0.75, emotional: 0.8, fastPaced: 0.5, dark: 0.6, intellectual: 0.9 } },
  { id: 29, title: "The Green Mile", genre: ["Drama", "Fantasy", "Crime"], rating: 8.6, year: 1999, description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder who has a mysterious gift.", poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", traits: { complex: 0.6, emotional: 0.95, fastPaced: 0.4, dark: 0.75, intellectual: 0.65 } },
  { id: 30, title: "Se7en", genre: ["Crime", "Mystery", "Thriller"], rating: 8.6, year: 1995, description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.", poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", traits: { complex: 0.85, emotional: 0.7, fastPaced: 0.7, dark: 0.95, intellectual: 0.85 } },
  { id: 31, title: "City of God", genre: ["Crime", "Drama"], rating: 8.6, year: 2002, description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", poster: "https://image.tmdb.org/t/p/w500/k7eYdQcaQO5EpVcq2awsJ0kpluV.jpg", traits: { complex: 0.8, emotional: 0.8, fastPaced: 0.85, dark: 0.9, intellectual: 0.75 } },
  { id: 32, title: "Saving Private Ryan", genre: ["War", "Drama", "Action"], rating: 8.6, year: 1998, description: "Following the Normandy Landings, a group of soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed.", poster: "https://image.tmdb.org/t/p/w500/uqx37WKq3QPKfUE0gAaOuqHt4nT.jpg", traits: { complex: 0.6, emotional: 0.9, fastPaced: 0.8, dark: 0.85, intellectual: 0.6 } },
  { id: 33, title: "The Usual Suspects", genre: ["Crime", "Mystery", "Thriller"], rating: 8.5, year: 1995, description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met.", poster: "https://image.tmdb.org/t/p/w500/9Xh2ZbRDqjJjD2smQ1fgshEKEF1.jpg", traits: { complex: 0.95, emotional: 0.6, fastPaced: 0.7, dark: 0.8, intellectual: 0.9 } },
  { id: 34, title: "Life is Beautiful", genre: ["Comedy", "Drama", "Romance"], rating: 8.6, year: 1997, description: "When an Italian Jewish man is sent to a concentration camp, he uses his imagination to shield his son from the horrors.", poster: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg", traits: { complex: 0.6, emotional: 0.95, fastPaced: 0.5, dark: 0.7, intellectual: 0.7 } },
  { id: 35, title: "The Departed", genre: ["Crime", "Drama", "Thriller"], rating: 8.5, year: 2006, description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.", poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg", traits: { complex: 0.85, emotional: 0.7, fastPaced: 0.8, dark: 0.9, intellectual: 0.75 } },
  { id: 36, title: "The Pianist", genre: ["Drama", "War"], rating: 8.5, year: 2002, description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.", poster: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", traits: { complex: 0.65, emotional: 0.95, fastPaced: 0.4, dark: 0.9, intellectual: 0.75 } },
  { id: 37, title: "Memento", genre: ["Mystery", "Thriller"], rating: 8.4, year: 2000, description: "A man with short-term memory loss attempts to track down his wife's murderer.", poster: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg", traits: { complex: 0.98, emotional: 0.7, fastPaced: 0.6, dark: 0.8, intellectual: 0.95 } },
  { id: 38, title: "The Lion King", genre: ["Animation", "Family", "Drama"], rating: 8.5, year: 1994, description: "Lion prince Simba flees his kingdom after the murder of his father, only to return years later to reclaim his throne.", poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", traits: { complex: 0.5, emotional: 0.9, fastPaced: 0.6, dark: 0.5, intellectual: 0.5 } },
  { id: 39, title: "American History X", genre: ["Drama"], rating: 8.5, year: 1998, description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.", poster: "https://image.tmdb.org/t/p/w500/fXepRAYOx1qC3wju7XdDGx60775.jpg", traits: { complex: 0.75, emotional: 0.85, fastPaced: 0.6, dark: 0.95, intellectual: 0.85 } },
  { id: 40, title: "Apocalypse Now", genre: ["Drama", "War"], rating: 8.4, year: 1979, description: "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel.", poster: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg", traits: { complex: 0.85, emotional: 0.75, fastPaced: 0.5, dark: 0.9, intellectual: 0.9 } }
];

const SURVEY_QUESTIONS = [
  { id: 'q1', question: 'What kind of stories do you prefer?', options: [
    { text: 'Emotional and heartwarming', trait: 'emotional', value: 1 },
    { text: 'Thrilling and suspenseful', trait: 'dark', value: 1 },
    { text: 'Light and fun', trait: 'emotional', value: 0.5 },
    { text: 'Dark and intense', trait: 'dark', value: 1.2 }
  ]},
  { id: 'q2', question: 'How do you feel about complex plots?', options: [
    { text: 'Love them! The more twists the better', trait: 'complex', value: 1.5 },
    { text: 'They\'re okay in moderation', trait: 'complex', value: 0.8 },
    { text: 'Prefer straightforward stories', trait: 'complex', value: 0.3 },
    { text: 'I enjoy thought-provoking narratives', trait: 'intellectual', value: 1.2 }
  ]},
  { id: 'q3', question: 'What\'s your preferred movie pace?', options: [
    { text: 'Fast-paced with lots of action', trait: 'fastPaced', value: 1.5 },
    { text: 'Moderate pace with good balance', trait: 'fastPaced', value: 0.8 },
    { text: 'Slow burn that builds tension', trait: 'fastPaced', value: 0.3 },
    { text: 'Contemplative and methodical', trait: 'intellectual', value: 1 }
  ]},
  { id: 'q4', question: 'How intellectual do you like your movies?', options: [
    { text: 'Mind-bending and philosophical', trait: 'intellectual', value: 1.5 },
    { text: 'Smart but accessible', trait: 'intellectual', value: 1 },
    { text: 'Entertaining without overthinking', trait: 'intellectual', value: 0.4 },
    { text: 'I prefer emotional depth over complexity', trait: 'emotional', value: 1.2 }
  ]}
];

function App() {
  const [page, setPage] = useState('landing');
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSurveyAnswer = (questionId, option) => {
    setSurveyAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const toggleMovieSelection = (movie) => {
    setSelectedMovies(prev => {
      const isSelected = prev.find(m => m.id === movie.id);
      if (isSelected) {
        return prev.filter(m => m.id !== movie.id);
      } else if (prev.length < 5) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const calculateUserProfile = () => {
    const profile = { complex: 0, emotional: 0, fastPaced: 0, dark: 0, intellectual: 0 };
    Object.values(surveyAnswers).forEach(answer => {
      profile[answer.trait] += answer.value;
    });
    Object.keys(profile).forEach(key => {
      profile[key] = profile[key] / Object.keys(surveyAnswers).length;
    });
    return profile;
  };

  const calculateSimilarity = (t1, t2) => {
    const traits = ['complex', 'emotional', 'fastPaced', 'dark', 'intellectual'];
    let dot = 0, mag1 = 0, mag2 = 0;
    traits.forEach(trait => {
      const v1 = t1[trait] || 0;
      const v2 = t2[trait] || 0;
      dot += v1 * v2;
      mag1 += v1 * v1;
      mag2 += v2 * v2;
    });
    return dot / (Math.sqrt(mag1) * Math.sqrt(mag2));
  };

  const generateRecommendations = () => {
    const profile = calculateUserProfile();
    setUserProfile(profile);
    const selectedIds = selectedMovies.map(m => m.id);
    const candidates = MOVIE_DATABASE.filter(m => !selectedIds.includes(m.id));

    setIsLoading(true);
    setPage('recommendations');

    const scored = candidates.map(movie => {
      let profileSim = calculateSimilarity(profile, movie.traits);
      let movieSim = 0;
      selectedMovies.forEach(sm => {
        movieSim += calculateSimilarity(sm.traits, movie.traits);
      });
      movieSim /= selectedMovies.length;

      const genreBonus = selectedMovies.some(sm => sm.genre.some(g => movie.genre.includes(g))) ? 0.15 : 0;
      const ratingBonus = movie.rating >= 8.0 ? 0.1 : 0;
      const totalScore = (profileSim * 0.4) + (movieSim * 0.4) + genreBonus + ratingBonus;

      const reason = generateReason(movie, profile, selectedMovies);
      return { ...movie, score: totalScore, reason };
    });

    scored.sort((a, b) => b.score - a.score);
    setTimeout(() => {
      setRecommendations(scored.slice(0, 8));
      setIsLoading(false);
    }, 500);
  };

  const generateReason = (movie, profile, selectedMovies) => {
    const reasons = [];
    if (selectedMovies.length > 0) {
      const mostSimilar = selectedMovies.reduce((prev, curr) => {
        const prevSim = calculateSimilarity(prev.traits, movie.traits);
        const currSim = calculateSimilarity(curr.traits, movie.traits);
        return currSim > prevSim ? curr : prev;
      });
      const sharedGenres = movie.genre.filter(g => mostSimilar.genre.includes(g));
      if (sharedGenres.length > 0) {
        reasons.push(`Similar to "${mostSimilar.title}" with ${sharedGenres.join(', ')} elements`);
      } else {
        reasons.push(`Fans of "${mostSimilar.title}" also enjoyed this`);
      }
    }

    const dominantTraits = Object.entries(profile).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([trait]) => trait);
    const traitDesc = { complex: 'intricate storytelling', emotional: 'emotional depth', fastPaced: 'engaging pace', dark: 'intense atmosphere', intellectual: 'thought-provoking themes' };
    const movieStrengths = Object.entries(movie.traits).filter(([trait, value]) => value > 0.7 && dominantTraits.includes(trait)).map(([trait]) => traitDesc[trait]);

    if (movieStrengths.length > 0) {
      reasons.push(`Features ${movieStrengths.join(' and ')}`);
    }
    if (movie.rating >= 8.5) {
      reasons.push('Critically acclaimed masterpiece');
    }
    return reasons.join('. ') + '.';
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center py-12 px-4">
      <div className="text-center space-y-8 w-full max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Film className="w-16 h-16 text-purple-400" />
          <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">AI MovieMate</h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-2">Discover Movies You'll Love</p>
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Your personal AI-powered movie recommendation assistant</p>
        <button onClick={() => setPage('survey')} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400/40 text-white px-8 py-4 rounded-xl text-lg md:text-xl font-semibold transition-transform duration-200 hover:scale-105 flex items-center gap-2 mx-auto shadow-2xl">
          Get Started
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="mt-12 text-gray-400 text-sm">Powered by advanced AI recommendation algorithms</div>
      </div>
    </div>
  );

  const renderSurvey = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Tell Us About Your Taste</h2>
          <p className="text-purple-300 text-base md:text-lg">Answer a few questions to help us understand your preferences</p>
        </div>

        <div className="space-y-8 mb-12">
          {SURVEY_QUESTIONS.map((q, idx) => (
            <div key={q.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-white/15 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">{idx + 1}. {q.question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {q.options.map((option, optIdx) => (
                  <button key={optIdx} onClick={() => handleSurveyAnswer(q.id, option)} className={`p-4 md:p-5 rounded-xl text-left transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400/60 ${surveyAnswers[q.id]?.text === option.text ? 'bg-purple-600 text-white border-2 border-purple-400' : 'bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10'}`}>
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(surveyAnswers).length === SURVEY_QUESTIONS.length && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Now, Pick Your Favorites</h3>
              <p className="text-purple-300 text-sm md:text-base">Select 3-5 movies you love (selected: {selectedMovies.length}/5)</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
              {MOVIE_DATABASE.slice(0, 20).map(movie => (
                <div key={movie.id} onClick={() => toggleMovieSelection(movie)} className={`cursor-pointer group rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] ${selectedMovies.find(m => m.id === movie.id) ? 'ring-4 ring-purple-500 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
                  <div className="relative">
                    <img src={movie.poster} alt={movie.title} className="w-full aspect-[2/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-500/90 text-black px-2 py-1 rounded-md text-xs font-semibold shadow">
                      <Star className="w-3 h-3" />
                      {movie.rating}
                    </div>
                  </div>
                  <div className="bg-black/80 p-2">
                    <p className="text-white text-sm font-semibold truncate">{movie.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedMovies.length >= 3 && (
              <div className="text-center">
                <button onClick={generateRecommendations} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-400/40 text-white px-10 md:px-12 py-4 rounded-xl text-lg md:text-xl font-semibold transition-transform duration-200 hover:scale-105 flex items-center gap-2 mx-auto shadow-2xl">
                  <Sparkles className="w-6 h-6" />
                  Get My Recommendations
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 md:w-12 h-10 md:h-12 text-yellow-400 animate-pulse" />
            <TrendingUp className="w-8 md:w-10 h-8 md:h-10 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Your Personalized Recommendations</h2>
          <p className="text-purple-300 text-base md:text-lg">Based on your unique taste profile and favorite movies</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-7 mb-8 border border-white/15 shadow-xl animate-fade-in">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Your Taste Profile</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {userProfile && Object.entries(userProfile).map(([trait, value]) => (
              <div key={trait} className="text-center">
                <div className="text-purple-300 text-sm capitalize mb-1">{trait}</div>
                <div className="bg-purple-900/50 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-full transition-[width] duration-700 ease-out" style={{ width: `${Math.min(value * 100, 100)}%` }} />
                </div>
                <div className="text-white text-xs mt-1">{Math.round(value * 100)}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 mb-8">
          {isLoading ? Array.from({ length: 6 }).map((_, i) => (
            <div key={`sk-${i}`} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="p-4 flex gap-4">
                <div className="w-28 md:w-32 aspect-[2/3] rounded-lg skeleton" />
                <div className="flex-1 space-y-3">
                  <div className="skeleton skeleton-line w-3/4" />
                  <div className="skeleton skeleton-line w-1/2" />
                  <div className="flex gap-2 pt-1">
                    <div className="skeleton h-5 w-16 rounded-md" />
                    <div className="skeleton h-5 w-14 rounded-md" />
                  </div>
                  <div className="skeleton h-16 w-full rounded-md" />
                </div>
              </div>
            </div>
          )) : recommendations.map((movie, idx) => (
            <div key={movie.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-purple-400 transition-transform duration-200 hover:scale-[1.01] shadow-xl animate-fade-in-up" style={{ animationDelay: `${idx * 70}ms` }}>
              <div className="flex gap-4 p-4">
                <img src={movie.poster} alt={movie.title} className="w-28 md:w-32 aspect-[2/3] object-cover rounded-lg shadow-lg" />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                    <div className="flex items-center gap-1 bg-yellow-400/20 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="text-yellow-200 font-semibold">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {movie.genre.map(g => (
                      <span key={g} className="bg-purple-600/40 text-purple-100 px-2 py-1 rounded-md text-xs">{g}</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{movie.description}</p>
                  <div className="bg-purple-900/30 rounded-lg p-3 border-l-4 border-purple-400">
                    <p className="text-xs text-purple-200 font-semibold mb-1">Why we recommend this:</p>
                    <p className="text-sm text-purple-100">{movie.reason}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full overflow-hidden">
                      <div className="bg-white/90 h-full" style={{ width: `${movie.score * 100}%` }} />
                    </div>
                    <span className="text-purple-300 text-xs font-semibold">{Math.round(movie.score * 100)}% Match</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <button disabled={isLoading} onClick={generateRecommendations} className={`bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400/40 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}>
            <RefreshCw className="w-5 h-5" />
            {isLoading ? 'Generating...' : 'Refresh Recommendations'}
          </button>
          <button onClick={() => { setPage('landing'); setSurveyAnswers({}); setSelectedMovies([]); setRecommendations([]); setUserProfile(null); setIsLoading(false); }} className="bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-colors border border-white/20">
            Start Over
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">Recommendations generated using advanced similarity algorithms and trait matching</p>
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <div className="sticky top-0 z-20 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="m-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-purple-300" />
            <span className="text-white font-semibold">AI MovieMate</span>
          </div>
          <span className="text-xs text-purple-200/80">v1.0</span>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <div className="w-full mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="m-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-center text-xs text-gray-300">
          Built with ❤️ using React and Tailwind CSS
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      <Header />
      {page === 'landing' && renderLanding()}
      {page === 'survey' && renderSurvey()}
      {page === 'recommendations' && renderRecommendations()}
      <Footer />
    </div>
  );
}

export default App;
    