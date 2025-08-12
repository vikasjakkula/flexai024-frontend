import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlexAiContent.css';

const FlexAiContent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/account/create/welcome');
  };

  return (
    <div className="flex-ai-content">
      <h1>Flex.ai - Your Complete AI-Powered Fitness & Nutrition Companion</h1>
      
      <h2>Transform Your Health Journey with Smart Technology</h2>
      
      <p><strong>Flex.ai</strong> is the revolutionary all-in-one fitness application that combines artificial intelligence with personalized nutrition and workout guidance. Whether you're a beginner starting your fitness journey or an experienced athlete looking to optimize performance, Flex.ai adapts to your unique needs, age, and fitness goals.</p>

      <hr />

      <h2>What is Flex.ai?</h2>
      
      <p>Flex.ai is an intelligent fitness ecosystem designed to make healthy living accessible, enjoyable, and sustainable for everyone. Our platform leverages cutting-edge AI technology to provide personalized workout routines, nutrition tracking, and expert guidance tailored specifically to your age group, fitness level, and personal objectives.</p>

      <h3>Why Choose Flex.ai?</h3>
      
      <ul>
        <li><strong>AI-Powered Personalization</strong>: Advanced algorithms create custom workout and diet plans</li>
        <li><strong>Age-Specific Programs</strong>: Tailored fitness solutions for kids, young adults, and seniors</li>
        <li><strong>Visual Learning</strong>: Interactive videos and GIFs for proper form and technique</li>
        <li><strong>Community Support</strong>: Connect with like-minded fitness enthusiasts</li>
        <li><strong>24/7 AI Assistant</strong>: Get instant answers to your fitness and nutrition questions</li>
        <li><strong>Comprehensive Tracking</strong>: Monitor progress, nutrition, and health metrics</li>
        <li><strong>Affordable Excellence</strong>: Premium features at just $10</li>
      </ul>

      <hr />

      <h2>Comprehensive Fitness Programs for Every Age Group</h2>

      <h3>Kids Martial Arts Program (Ages 5-12)</h3>
      <p><strong>Kung Fu & Karate Training Made Fun</strong></p>
      
      <p>Our specialized children's program introduces young warriors to the ancient arts of Kung Fu and Karate through engaging, age-appropriate training modules.</p>

      <p><strong>Program Features:</strong></p>
      <ul>
        <li><strong>Interactive Video Tutorials</strong>: Step-by-step Kung Fu and Karate techniques with animated demonstrations</li>
        <li><strong>Balance & Coordination</strong>: Fundamental movements to develop motor skills and body awareness</li>
        <li><strong>Discipline & Focus</strong>: Character-building exercises that improve concentration and self-control</li>
        <li><strong>Safety First</strong>: Age-appropriate training intensity with proper warm-up and cool-down routines</li>
        <li><strong>Progress Tracking</strong>: Visual progress charts and achievement badges to motivate young learners</li>
        <li><strong>Fun Challenges</strong>: Gamified training sessions that make learning martial arts exciting</li>
      </ul>

      <p><strong>Nutrition for Growing Athletes:</strong></p>
      <ul>
        <li>High-protein meals for muscle development</li>
        <li>Calcium-rich foods for strong bones</li>
        <li>Healthy snacks for sustained energy</li>
        <li>Proper hydration guidelines</li>
        <li>Age-specific portion sizes and meal timing</li>
      </ul>

      <h3>Young Adults Program (Ages 13-35)</h3>
      <p><strong>Gym Training & Calisthenics Excellence</strong></p>
      
      <p>Transform your body with our comprehensive strength training and bodyweight exercise programs designed for maximum results and sustainable fitness.</p>

      <p><strong>Gym Training Modules:</strong></p>
      <ul>
        <li><strong>Strength Building</strong>: Progressive weight training routines for all muscle groups</li>
        <li><strong>Muscle Hypertrophy</strong>: Targeted exercises for lean muscle mass development</li>
        <li><strong>Power & Conditioning</strong>: High-intensity workouts for athletic performance</li>
        <li><strong>Proper Form Guidance</strong>: HD video demonstrations ensuring safe and effective technique</li>
      </ul>

      <p><strong>Calisthenics & Bodyweight Training:</strong></p>
      <ul>
        <li><strong>Progressive Skill Building</strong>: From basic push-ups to advanced movements like muscle-ups and handstands</li>
        <li><strong>Core Strengthening</strong>: Comprehensive abdominal and core stability programs</li>
        <li><strong>Flexibility & Mobility</strong>: Dynamic stretching routines to improve range of motion</li>
        <li><strong>Functional Movements</strong>: Real-world applicable strength and coordination exercises</li>
      </ul>

      <p><strong>Advanced Ab Training:</strong></p>
      <ul>
        <li><strong>Six-Pack Development</strong>: Targeted exercises for defined abdominal muscles</li>
        <li><strong>Core Stability</strong>: Planks, dead bugs, and stability ball exercises</li>
        <li><strong>Functional Core</strong>: Rotational movements and anti-extension exercises</li>
        <li><strong>Progressive Difficulty</strong>: Beginner to advanced ab workout progressions</li>
      </ul>

      <p><strong>Nutrition for Peak Performance:</strong></p>
      <ul>
        <li>Lean protein sources for muscle recovery and growth</li>
        <li>Complex carbohydrates for sustained energy</li>
        <li>Healthy fats for hormone production and joint health</li>
        <li>Pre and post-workout nutrition timing</li>
        <li>Supplement guidance for enhanced performance</li>
        <li>Meal prep strategies for busy lifestyles</li>
      </ul>

      <h3>Senior Fitness Program (Ages 50+)</h3>
      <p><strong>Safe, Effective Exercise for Healthy Aging</strong></p>
      
      <p>Our senior-friendly program focuses on maintaining mobility, strength, and independence through carefully designed low-impact exercises.</p>

      <p><strong>Exercise Components:</strong></p>
      <ul>
        <li><strong>Low-Impact Cardio</strong>: Gentle cardiovascular exercises that protect joints</li>
        <li><strong>Strength Maintenance</strong>: Resistance training to prevent muscle loss and osteoporosis</li>
        <li><strong>Balance & Stability</strong>: Fall prevention exercises and coordination training</li>
        <li><strong>Flexibility</strong>: Gentle stretching routines to maintain range of motion</li>
        <li><strong>Chair Exercises</strong>: Seated workout options for those with mobility limitations</li>
        <li><strong>Walking Programs</strong>: Structured walking plans with progressive intensity</li>
      </ul>

      <p><strong>Health-Focused Benefits:</strong></p>
      <ul>
        <li>Improved bone density and reduced fracture risk</li>
        <li>Enhanced cardiovascular health and circulation</li>
        <li>Better balance and reduced fall risk</li>
        <li>Maintained muscle mass and functional strength</li>
        <li>Improved mental health and cognitive function</li>
        <li>Enhanced quality of life and independence</li>
      </ul>

      <p><strong>Senior Nutrition Guidelines:</strong></p>
      <ul>
        <li>Adequate protein intake to prevent muscle loss</li>
        <li>Calcium and Vitamin D for bone health</li>
        <li>Heart-healthy foods to support cardiovascular function</li>
        <li>Anti-inflammatory foods to reduce joint pain</li>
        <li>Proper hydration for kidney and cognitive health</li>
        <li>Medication-food interaction awareness</li>
      </ul>

      <hr />

      <h2>Personalized Nutrition Tracking & Diet Plans</h2>

      <h3>Age-Specific Dietary Guidance</h3>

      <p><strong>Children (Ages 5-12):</strong></p>
      <ul>
        <li><strong>Growth Support</strong>: Nutrient-dense foods for healthy development</li>
        <li><strong>Brain Food</strong>: Omega-3 fatty acids and whole grains for cognitive development</li>
        <li><strong>Immune Boosters</strong>: Fruits and vegetables rich in vitamins and minerals</li>
        <li><strong>Healthy Habits</strong>: Teaching portion control and mindful eating</li>
        <li><strong>Fun Nutrition</strong>: Making healthy foods appealing and enjoyable</li>
      </ul>

      <p><strong>Teenagers (Ages 13-19):</strong></p>
      <ul>
        <li><strong>Energy for Growth</strong>: Higher caloric needs during rapid development</li>
        <li><strong>Sports Nutrition</strong>: Fuel for athletic activities and recovery</li>
        <li><strong>Body Image</strong>: Promoting healthy relationship with food and self-image</li>
        <li><strong>Convenience Foods</strong>: Healthy grab-and-go options for busy schedules</li>
        <li><strong>Social Eating</strong>: Navigating peer pressure and social food situations</li>
      </ul>

      <p><strong>Adults (Ages 20-49):</strong></p>
      <ul>
        <li><strong>Metabolic Optimization</strong>: Foods that support healthy metabolism</li>
        <li><strong>Stress Management</strong>: Nutrition to combat work-related stress</li>
        <li><strong>Weight Management</strong>: Sustainable strategies for healthy weight</li>
        <li><strong>Family Nutrition</strong>: Meal planning for the whole family</li>
        <li><strong>Meal Prep</strong>: Time-efficient cooking and preparation strategies</li>
      </ul>

      <p><strong>Seniors (Ages 50+):</strong></p>
      <ul>
        <li><strong>Nutrient Density</strong>: Maximum nutrition in smaller portions</li>
        <li><strong>Chronic Disease Prevention</strong>: Heart-healthy and diabetes-friendly options</li>
        <li><strong>Digestive Health</strong>: Foods that support healthy digestion</li>
        <li><strong>Medication Interactions</strong>: Safe food choices with common medications</li>
        <li><strong>Budget-Friendly</strong>: Nutritious meals on a fixed income</li>
      </ul>

      <h3>Gender-Specific Nutrition</h3>

      <p><strong>Male Nutrition Focus:</strong></p>
      <ul>
        <li>Higher protein requirements for muscle mass maintenance</li>
        <li>Iron-rich foods for active lifestyles</li>
        <li>Heart-healthy options for cardiovascular protection</li>
        <li>Metabolism-boosting foods for weight management</li>
      </ul>

      <p><strong>Female Nutrition Focus:</strong></p>
      <ul>
        <li>Iron-rich foods to prevent deficiency</li>
        <li>Calcium and magnesium for bone health</li>
        <li>Folate-rich foods for reproductive health</li>
        <li>Hormonal balance through proper nutrition</li>
      </ul>

      <hr />

      <h2>Revolutionary AI-Powered Features</h2>

      <h3>Visual Learning Platform</h3>
      <p><strong>Video & GIF Instruction Library</strong></p>
      
      <p>Our extensive multimedia library ensures perfect form and technique mastery:</p>

      <ul>
        <li><strong>HD Exercise Videos</strong>: Professional trainers demonstrate proper form for over 1,000 exercises</li>
        <li><strong>Slow-Motion Breakdowns</strong>: Detailed movement analysis for complex exercises</li>
        <li><strong>Common Mistakes</strong>: What to avoid and how to correct poor form</li>
        <li><strong>Progression Videos</strong>: How to advance from beginner to advanced levels</li>
        <li><strong>Equipment Tutorials</strong>: Proper use of gym equipment and home alternatives</li>
        <li><strong>Modification Options</strong>: Exercise variations for different fitness levels and physical limitations</li>
      </ul>

      <h3>AI Chatbot Assistant</h3>
      <p><strong>24/7 Fitness & Nutrition Support</strong></p>
      
      <p>Your personal AI trainer and nutritionist is always available to answer questions:</p>

      <p><strong>Workout Guidance:</strong></p>
      <ul>
        <li>Exercise form and technique corrections</li>
        <li>Workout plan modifications based on progress</li>
        <li>Equipment substitutions for home workouts</li>
        <li>Injury prevention and recovery advice</li>
        <li>Motivation and goal-setting support</li>
      </ul>

      <p><strong>Nutrition Support:</strong></p>
      <ul>
        <li>Meal planning and recipe suggestions</li>
        <li>Macro and micronutrient guidance</li>
        <li>Food substitutions for dietary restrictions</li>
        <li>Portion size recommendations</li>
        <li>Supplement advice and timing</li>
      </ul>

      <p><strong>Health Monitoring:</strong></p>
      <ul>
        <li>Progress tracking interpretation</li>
        <li>Warning signs to watch for</li>
        <li>When to consult healthcare professionals</li>
        <li>Stress and sleep optimization tips</li>
      </ul>

      <hr />

      <h2>Comprehensive Health & Progress Tracking</h2>

      <h3>Advanced Analytics Dashboard</h3>

      <p><strong>Workout Tracking:</strong></p>
      <ul>
        <li>Exercise performance metrics and improvements</li>
        <li>Strength gains and endurance progress</li>
        <li>Calories burned and workout intensity</li>
        <li>Consistency and adherence patterns</li>
        <li>Personal records and achievements</li>
      </ul>

      <p><strong>Nutrition Monitoring:</strong></p>
      <ul>
        <li>Daily caloric intake and macronutrient balance</li>
        <li>Micronutrient deficiencies and surpluses</li>
        <li>Meal timing and frequency analysis</li>
        <li>Hydration levels and water intake</li>
        <li>Weight and body composition changes</li>
      </ul>

      <p><strong>Health Metrics:</strong></p>
      <ul>
        <li>Heart rate variability and resting heart rate</li>
        <li>Sleep quality and duration tracking</li>
        <li>Stress levels and recovery indicators</li>
        <li>Energy levels and mood patterns</li>
        <li>Overall wellness scores and trends</li>
      </ul>

      <p><strong>Goal Setting & Achievement:</strong></p>
      <ul>
        <li>SMART goal creation and tracking</li>
        <li>Milestone celebrations and rewards</li>
        <li>Progress photos and measurements</li>
        <li>Achievement badges and certifications</li>
        <li>Long-term health outcome predictions</li>
      </ul>

      <hr />

      <h2>Vibrant Community Features</h2>

      <h3>Social Media Integration</h3>
      <p><strong>Connect, Share, and Inspire</strong></p>
      
      <p>Flex.ai's community platform combines social networking with fitness motivation:</p>

      <p><strong>Workout Sharing:</strong></p>
      <ul>
        <li>Post workout videos and progress photos</li>
        <li>Share personal achievements and milestones</li>
        <li>Get feedback and encouragement from community members</li>
        <li>Follow friends and favorite fitness influencers</li>
        <li>Create workout challenges and competitions</li>
      </ul>

      <p><strong>Community Support:</strong></p>
      <ul>
        <li>Join groups based on interests, age, or fitness level</li>
        <li>Participate in discussion forums and Q&A sessions</li>
        <li>Access expert advice from certified trainers and nutritionists</li>
        <li>Find workout partners and accountability buddies</li>
        <li>Share healthy recipes and meal ideas</li>
      </ul>

      <p><strong>Motivation & Inspiration:</strong></p>
      <ul>
        <li>Success stories and transformation journeys</li>
        <li>Daily motivation quotes and tips</li>
        <li>Weekly challenges and group activities</li>
        <li>Leaderboards and friendly competition</li>
        <li>Recognition and rewards for consistency</li>
      </ul>

      <p><strong>Educational Content:</strong></p>
      <ul>
        <li>Expert articles on fitness and nutrition topics</li>
        <li>Live webinars and virtual training sessions</li>
        <li>Product reviews and equipment recommendations</li>
        <li>Myth-busting and science-based information</li>
        <li>Seasonal health tips and holiday strategies</li>
      </ul>

      <hr />

      <h2>Affordable Premium Experience</h2>

      <h3>Exceptional Value at Just $10</h3>
      <p><strong>Premium Features for Everyone</strong></p>
      
      <p>Flex.ai believes that health and fitness should be accessible to all. For just $10, you get access to:</p>

      <p><strong>Complete Feature Access:</strong></p>
      <ul>
        <li>All workout programs and video libraries</li>
        <li>Unlimited AI chatbot consultations</li>
        <li>Full nutrition tracking and meal planning</li>
        <li>Community features and social networking</li>
        <li>Progress tracking and analytics</li>
        <li>Regular content updates and new features</li>
      </ul>

      <p><strong>No Hidden Costs:</strong></p>
      <ul>
        <li>One-time payment, no recurring subscriptions</li>
        <li>No premium upgrade requirements</li>
        <li>All features included from day one</li>
        <li>Free customer support and assistance</li>
        <li>Regular app updates and improvements</li>
        <li>Money-back satisfaction guarantee</li>
      </ul>

      <p><strong>Compared to Traditional Options:</strong></p>
      <ul>
        <li>Personal trainer sessions: $50-100 per hour</li>
        <li>Gym memberships: $30-80 per month</li>
        <li>Nutrition consultations: $75-150 per session</li>
        <li>Fitness apps with limited features: $10-30 per month</li>
        <li><strong>Flex.ai</strong>: Complete solution for just $10 total</li>
      </ul>

      <hr />

      <h2>Your Complete Health Security System</h2>

      <h3>Comprehensive Wellness Protection</h3>
      
      <p>Flex.ai serves as your personal health guardian, monitoring and protecting your wellbeing through:</p>

      <p><strong>Injury Prevention:</strong></p>
      <ul>
        <li>Proper form instruction to prevent workout injuries</li>
        <li>Progressive overload principles for safe strength gains</li>
        <li>Recovery guidance to prevent overtraining</li>
        <li>Warning signs of potential health issues</li>
        <li>Emergency contact features for safety</li>
      </ul>

      <p><strong>Nutritional Safety:</strong></p>
      <ul>
        <li>Allergy and dietary restriction considerations</li>
        <li>Safe weight loss and gain recommendations</li>
        <li>Supplement interaction warnings</li>
        <li>Nutritional deficiency alerts</li>
        <li>Eating disorder prevention resources</li>
      </ul>

      <p><strong>Long-term Health Monitoring:</strong></p>
      <ul>
        <li>Trend analysis for early health issue detection</li>
        <li>Preventive care reminders and suggestions</li>
        <li>Integration with healthcare provider communications</li>
        <li>Health goal adjustment based on life changes</li>
        <li>Chronic condition management support</li>
      </ul>

      <p><strong>Data Privacy & Security:</strong></p>
      <ul>
        <li>Encrypted personal health information</li>
        <li>Secure cloud storage and backup</li>
        <li>User-controlled data sharing options</li>
        <li>HIPAA-compliant privacy practices</li>
        <li>Transparent data usage policies</li>
      </ul>

      <hr />

      <h2>Why Flex.ai is Different</h2>

      <h3>The Future of Fitness Technology</h3>

      <p><strong>Artificial Intelligence Integration:</strong></p>
      <p>Unlike traditional fitness apps that offer generic programs, Flex.ai uses advanced machine learning algorithms to continuously adapt and improve your experience. Our AI learns from your preferences, progress, and feedback to create truly personalized recommendations.</p>

      <p><strong>Holistic Approach:</strong></p>
      <p>Flex.ai doesn't just focus on exercise or nutrition in isolation. We understand that true health comes from the integration of physical activity, proper nutrition, mental wellness, and community support. Our platform addresses all these aspects in one comprehensive solution.</p>

      <p><strong>Evidence-Based Programming:</strong></p>
      <p>All our workout routines and nutrition guidelines are based on the latest scientific research in exercise physiology, sports nutrition, and behavioral psychology. We regularly update our content to reflect new discoveries and best practices in health and fitness.</p>

      <p><strong>Accessibility and Inclusion:</strong></p>
      <p>Flex.ai is designed to be inclusive and accessible to people of all fitness levels, ages, and physical abilities. We provide modifications and alternatives to ensure everyone can participate safely and effectively in their fitness journey.</p>

      <p><strong>Continuous Innovation:</strong></p>
      <p>We're constantly developing new features and improving existing ones based on user feedback and technological advances. Your $10 investment grows in value over time as we add more capabilities and enhance the user experience.</p>

      <hr />

      <h2>Start Your Transformation Today</h2>

      <h3>Join Thousands of Success Stories</h3>
      
      <p>Ready to revolutionize your health and fitness journey? Flex.ai provides everything you need to achieve your goals, maintain long-term wellness, and connect with a supportive community of like-minded individuals.</p>

      <p><strong>Getting Started is Easy:</strong></p>
      <ol>
        <li><strong>Download</strong> Flex.ai from your app store</li>
        <li><strong>Complete</strong> your personalized fitness assessment</li>
        <li><strong>Choose</strong> your age-appropriate program</li>
        <li><strong>Begin</strong> your transformation journey</li>
        <li><strong>Connect</strong> with our amazing community</li>
      </ol>

      <p><strong>Your Investment in Health:</strong></p>
      <p>For less than the cost of a single personal training session or a month's gym membership, you get lifetime access to:</p>
      <ul>
        <li>Personalized AI coaching</li>
        <li>Comprehensive workout libraries</li>
        <li>Detailed nutrition guidance</li>
        <li>Community support and motivation</li>
        <li>Progress tracking and analytics</li>
        <li>24/7 expert assistance</li>
      </ul>

      <p><strong>Satisfaction Guaranteed:</strong></p>
      <p>We're so confident in Flex.ai's ability to transform your health that we offer a 30-day money-back guarantee. If you're not completely satisfied with your results, we'll refund your investment, no questions asked.</p>

      <hr />

      <h2>Contact & Support</h2>

      <p><strong>Customer Service:</strong></p>
      <ul>
        <li>24/7 chat support through the app</li>
        <li>Email support: support@flex.ai</li>
        <li>Video tutorials and FAQ section</li>
        <li>Community forums for peer support</li>
        <li>Regular webinars and training sessions</li>
      </ul>

      <p><strong>Stay Connected:</strong></p>
      <ul>
        <li>Follow us on social media for daily tips and motivation</li>
        <li>Join our email newsletter for exclusive content and offers</li>
        <li>Participate in community challenges and events</li>
        <li>Share your success story and inspire others</li>
        <li>Help us improve by providing feedback and suggestions</li>
      </ul>

      <p><strong>Download Flex.ai Today</strong></p>
      <p>Available on iOS and Android app stores</p>
      <p>One-time payment: $10</p>
      <p>Lifetime access to all features</p>
      {/* ...existing code... */}
      <p>Start your transformation now!</p>
      <button onClick={handleGetStarted} className="get-started-button">
        Get Started Now
      </button>

      <hr />
      {/* ...existing code... */}
      <p><em>Flex.ai - Where Artificial Intelligence Meets Personal Fitness. Your journey to optimal health starts here.</em></p>
    </div>
  );
};

export default FlexAiContent;
