import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './components/InfiniteScroll.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import('./pages/Home'));
const AccountCreateWelcome = lazy(() => import('./pages/AccountCreateWelcome'));
const InputName = lazy(() => import('./pages/account/create/InputName'));
const GoalsIntro = lazy(() => import('./pages/account/create/GoalsIntro'));
const GoalsBigStep = lazy(() => import('./pages/account/create/GoalsBigStep'));
const GoalsLoseWeightOptions = lazy(() => import('./pages/account/create/GoalsLoseWeightOptions'));
const GoalsLoseWeightAffirmation = lazy(() => import('./pages/account/create/GoalsLoseWeightAffirmation'));
const ActivityLevel = lazy(() => import('./pages/account/create/ActivityLevel'));
const Demographic1 = lazy(() => import('./pages/account/create/Demographic1'));
const Demographic2 = lazy(() => import('./pages/account/create/Demographic2'));
const UserId = lazy(() => import('./pages/account/create/UserId'));
const LastStep = lazy(() => import('./pages/account/create/LastStep'));
const Congratulations = lazy(() => import('./pages/account/create/Congratulations'));
const Library = lazy(() => import('./pages/Library'));
const CalendarDemoPage = lazy(() => import('./pages/Library').then(m => ({ default: m.CalendarDemo })));
const Pricing = lazy(() => import('./pages/Pricing'));
const AskQuestions = lazy(() => import('./pages/AskQuestions'));
const ReportBugs = lazy(() => import('./pages/ReportBugs'));
const Community = lazy(() => import('./pages/Community'));
const CommunityForum = lazy(() => import('./pages/CommunityForum'));
const CommunityPhotos = lazy(() => import('./pages/CommunityPhotos'));
const CommunityWorkouts = lazy(() => import('./pages/CommunityWorkouts'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const NutritionProtein = lazy(() => import('./pages/NutritionProtein'));
const NutritionMeals = lazy(() => import('./pages/NutritionMeals'));
const NutritionPlans = lazy(() => import('./pages/NutritionPlans'));
const WorkoutLogs = lazy(() => import('./pages/WorkoutLogs'));
const VideoLibrary = lazy(() => import('./pages/VideoLibrary'));
const FormCheckerAI = lazy(() => import('./pages/FormCheckerAI'));
const MyRoutines = lazy(() => import('./pages/MyRoutines'));
const ExerciseEncyclopedia = lazy(() => import('./pages/ExerciseEncyclopedia'));
const Profile = lazy(() => import('./pages/Profile'));

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();
  const hideChrome = location.pathname.startsWith('/account/create/welcome');

  return (
    <div className={`app-container ${theme}`}>
      {!hideChrome && <Navbar />}
      <main style={{ paddingTop: hideChrome ? 0 : '80px' }}>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Home />} />
          <Route path="/account/create/welcome" element={<AccountCreateWelcome />} />
          <Route path="/account/create/input-name" element={<InputName />} />
          <Route path="/account/create/goals" element={<GoalsIntro />} />
          <Route path="/account/create/goals/big-step" element={<GoalsBigStep />} />
          <Route path="/account/create/goals/lose-weight/options" element={<GoalsLoseWeightOptions />} />
          <Route path="/account/create/goals/lose-weight/affirmation" element={<GoalsLoseWeightAffirmation />} />
          <Route path="/account/create/activity-level" element={<ActivityLevel />} />
          <Route path="/account/create/demographic-1" element={<Demographic1 />} />
          <Route path="/account/create/demographic-2" element={<Demographic2 />} />
          <Route path="/account/create/user-id" element={<UserId />} />
          <Route path="/account/create/last-step" element={<LastStep />} />
          <Route path="/account/create/congratulations" element={<Congratulations />} />
          
          {/* Protected routes */}
          <Route path="/library" element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          } />
          <Route path="/library/calender" element={
            <ProtectedRoute>
              <CalendarDemoPage />
            </ProtectedRoute>
          } />
          <Route path="/library/workout-logs" element={
            <ProtectedRoute>
              <WorkoutLogs />
            </ProtectedRoute>
          } />
          <Route path="/library/video-library" element={
            <ProtectedRoute>
              <VideoLibrary />
            </ProtectedRoute>
          } />
          <Route path="/library/form-checker" element={
            <ProtectedRoute>
              <FormCheckerAI />
            </ProtectedRoute>
          } />
          <Route path="/library/routines" element={
            <ProtectedRoute>
              <MyRoutines />
            </ProtectedRoute>
          } />
          <Route path="/library/exercises" element={
            <ProtectedRoute>
              <ExerciseEncyclopedia />
            </ProtectedRoute>
          } />
          <Route path="/pricing" element={
            <ProtectedRoute>
              <Pricing />
            </ProtectedRoute>
          } />
          <Route path="/contact/ask-questions" element={
            <ProtectedRoute>
              <AskQuestions />
            </ProtectedRoute>
          } />
          <Route path="/contact/report-bugs" element={
            <ProtectedRoute>
              <ReportBugs />
            </ProtectedRoute>
          } />
          <Route path="/community" element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }>
            <Route path="forum" element={
              <ProtectedRoute>
                <CommunityForum />
              </ProtectedRoute>
            } />
            <Route path="photos" element={
              <ProtectedRoute>
                <CommunityPhotos />
              </ProtectedRoute>
            } />
            <Route path="workouts" element={
              <ProtectedRoute>
                <CommunityWorkouts />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="/nutrition" element={
            <ProtectedRoute>
              <Nutrition />
            </ProtectedRoute>
          }>
            <Route path="protein" element={
              <ProtectedRoute>
                <NutritionProtein />
              </ProtectedRoute>
            } />
            <Route path="meals" element={
              <ProtectedRoute>
                <NutritionMeals />
              </ProtectedRoute>
            } />
            <Route path="plans" element={
              <ProtectedRoute>
                <NutritionPlans />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      {!hideChrome && <Footer />}
      {/* <ChatWidget /> Removed as per user request */}
      <Analytics /> {/* Added analytics */}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div style={{padding:'40px', textAlign:'center'}}>Loading...</div>}>
            <AppContent />
          </Suspense>
          <Analytics /> {/* Added analytics */}
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;