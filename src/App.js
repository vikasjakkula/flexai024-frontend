import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AccountCreateWelcome from './pages/AccountCreateWelcome';
import InputName from './pages/account/create/InputName';
import GoalsIntro from './pages/account/create/GoalsIntro';
import GoalsBigStep from './pages/account/create/GoalsBigStep';
import GoalsLoseWeightOptions from './pages/account/create/GoalsLoseWeightOptions';
import GoalsLoseWeightAffirmation from './pages/account/create/GoalsLoseWeightAffirmation';
import ActivityLevel from './pages/account/create/ActivityLevel';
import Demographic1 from './pages/account/create/Demographic1';
import Demographic2 from './pages/account/create/Demographic2';
import UserId from './pages/account/create/UserId';
import LastStep from './pages/account/create/LastStep';
import Congratulations from './pages/account/create/Congratulations';
import Library, { CalendarDemo } from './pages/Library';
import Pricing from './pages/Pricing';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './components/InfiniteScroll.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import AskQuestions from './pages/AskQuestions';
import ReportBugs from './pages/ReportBugs';
import Community from './pages/Community';
import CommunityForum from './pages/CommunityForum';
import CommunityPhotos from './pages/CommunityPhotos';
import CommunityWorkouts from './pages/CommunityWorkouts';
import Nutrition from './pages/Nutrition';
import NutritionProtein from './pages/NutritionProtein';
import NutritionMeals from './pages/NutritionMeals';
import NutritionPlans from './pages/NutritionPlans';
import WorkoutLogs from './pages/WorkoutLogs';
import VideoLibrary from './pages/VideoLibrary';
import FormCheckerAI from './pages/FormCheckerAI';
import MyRoutines from './pages/MyRoutines';
import ExerciseEncyclopedia from './pages/ExerciseEncyclopedia';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import { Analytics } from "@vercel/analytics/react";

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
              <CalendarDemo />
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
          <AppContent />
          <Analytics />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;