import React from 'react';
import TraditionalDocWorkflowCard from '../components/TraditionalDocWorkflowCard';
import { Helmet } from 'react-helmet-async';

export default function ExerciseEncyclopedia() {
  return (
    <div className="w-full px-0 md:px-0 font-raleway">
      <Helmet>
        <title>Exercise Encyclopedia – complete gym guide with videos | Flex.ai</title>
        <meta name="description" content="Comprehensive gym exercise guide with videos, GIFs, and images for all muscle groups. Learn proper form and build strength effectively." />
        <meta name="keywords" content="exercise encyclopedia, gym guide, bodybuilding app, workout tracker" />
        <link rel="canonical" href="https://flexai024.vercel.app/library/exercises" />
        <meta property="og:title" content="Exercise Encyclopedia – Flex.ai" />
        <meta property="og:description" content="Complete gym exercise guide with videos and GIFs." />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/library.png`} />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <TraditionalDocWorkflowCard />
      <div className="w-full flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 mt-6 font-raleway max-w-xl w-full mx-auto text-center text-[1.08rem]">
          <h1 className="text-3xl md:text-4xl font-extrabold font-raleway mb-4 text-[#1b9df3] flex items-center gap-2 justify-center text-center">
            <span role="img" aria-label="book">📚</span>
            Your Ultimate Calisthenics Workouts Guide !
          </h1>
          <p className="text-lg text-slate-700 mb-4 font-raleway text-center" style={{ fontSize: '1.15rem' }}>
            Welcome to the most comprehensive online gym exercise guide designed to help beginners, intermediate, and advanced fitness enthusiasts achieve their goals faster. Whether you’re looking to build muscle, lose fat, improve flexibility, or enhance strength, our guide offers step-by-step video tutorials, GIF demonstrations, and high-quality exercise images for every muscle group.
          </p>
          <p className="text-lg text-slate-700 mb-4 font-raleway text-center" style={{ fontSize: '1.15rem' }}>
            Our mission is simple: to provide a structured, visual-based gym guide that makes workouts easy to understand and follow. Every exercise is demonstrated by fitness professionals, ensuring you learn the correct form, prevent injuries, and get the best possible results from your training.
          </p>
          <p style={{ fontSize: '1.08rem' }}>
          Complete Gym Exercise Guide with Videos, GIFs, and Images – Your Ultimate Workout Encyclopedia
          </p>
          <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway mx-auto" />

          <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway text-center" style={{ fontSize: '1.35rem' }}>Why Choose Our Gym Exercise Library?</h3>
          <p className="text-base text-slate-700 mb-2 font-raleway text-center" style={{ fontSize: '1.08rem' }}>
            Unlike random workout tips you find online, our platform is a curated fitness encyclopedia with verified exercises, clear instructions, and visual guidance in both video and GIF formats. Here’s what makes it stand out:
          </p>
          <ul className="list-disc list-inside text-base text-slate-700 mb-4 space-y-1 font-raleway text-center flex flex-col items-center" style={{ fontSize: '1.08rem' }}>
            <li className="text-left w-fit"><span className="font-semibold text-[#1b9df3]">100% Free</span> – Access without any subscription or hidden costs.</li>
            <li className="text-left w-fit"><span className="font-semibold text-[#1b9df3]">Copyright-Free Media</span> – All exercise videos and images are sourced from trusted, license-free platforms, making them safe for personal and educational use.</li>
            <li className="text-left w-fit"><span className="font-semibold text-[#1b9df3]">Multiple Formats</span> – View workouts in video, GIF, or image form, so you can choose the format that works best for you.</li>
            <li className="text-left w-fit"><span className="font-semibold text-[#1b9df3]">Step-by-Step Instructions</span> – Learn how to perform every rep with perfect form.</li>
            <li className="text-left w-fit"><span className="font-semibold text-[#1b9df3]">Organized For Muscle Groups</span> – Chest, back, shoulders, arms,Biceps, Triceps, legs, abs.</li>
          </ul>
          <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway mx-auto" />

          <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway text-center" style={{ fontSize: '1.35rem' }}>Full-Body Workout Coverage</h3>
          <p className="text-base text-slate-700 mb-4 font-raleway text-center" style={{ fontSize: '1.08rem' }}>
            Our gym guide covers every type of exercise you could need:
          </p>
          <ol className="list-decimal list-inside text-base text-slate-700 mb-4 space-y-2 font-raleway text-center flex flex-col items-center" style={{ fontSize: '1.08rem' }}>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Chest Exercises</span><br />
              From bench press to push-ups and incline dumbbell flyes, learn techniques that maximize muscle growth and target your pectorals from all angles.
            </li>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Back Exercises</span><br />
              Build a strong, wide back with movements like pull-ups, lat pulldowns, bent-over rows, and deadlifts. Perfect your posture and increase pulling strength.
            </li>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Shoulder Workouts</span><br />
              Master overhead presses, lateral raises, front raises, and shrugs to build well-rounded deltoids for both strength and aesthetics.
            </li>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Arm Workouts</span><br />
              Target your biceps, triceps, and forearms with effective moves like barbell curls, hammer curls, skull crushers, and dips.
            </li>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Leg Workouts</span><br />
              From squats to lunges and calf raises, train for explosive lower-body power and stability.
            </li>
            <li className="text-left w-fit">
              <span className="font-semibold text-[#1b9df3]">Ab & Core Workouts</span><br />
              Get a stronger core with planks, crunches, hanging leg raises, and ab rollouts.
            </li>
          </ol>
          <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway mx-auto" />

          <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway text-center" style={{ fontSize: '1.35rem' }}>Benefits of Using Video & GIF Workout Guides</h3>
          <ul className="list-disc list-inside text-base text-slate-700 mb-4 space-y-1 font-raleway text-center flex flex-col items-center" style={{ fontSize: '1.08rem' }}>
            <li className="text-left w-fit"><span className="font-semibold">Learn Faster</span> – Visual demonstrations help you understand movements instantly.</li>
            <li className="text-left w-fit"><span className="font-semibold">Avoid Injuries</span> – Proper form prevents strain and long-term damage.</li>
            <li className="text-left w-fit"><span className="font-semibold">Motivation On Demand</span> – Seeing exercises performed inspires consistency.</li>
            <li className="text-left w-fit"><span className="font-semibold">Works Anywhere</span> – Whether you train at home or the gym, videos and GIFs are easy to follow.</li>
          </ul>
          <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway mx-auto" />

          <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway text-center" style={{ fontSize: '1.35rem' }}>Train Anywhere, Anytime</h3>
          <p className="text-base text-slate-700 font-raleway text-center" style={{ fontSize: '1.08rem' }}>
            You can use this guide at home, in a commercial gym, or even outdoors. The workouts are adaptable to your space and available equipment. Plus, the visual guides make them ideal for beginners who may feel nervous in a gym setting.
          </p>

          {/* Home Calisthenics Workout Guide */}
          <div className="font-raleway text-base text-slate-700 mt-8 mb-8" style={{ fontSize: '1.08rem' }}>
            <h2 className="text-3xl font-bold text-[#1b9df3] mb-4 text-center" style={{ fontSize: '2.1rem' }}>Complete Home Calisthenics Workout Guide</h2>

            <h3 className="text-xl font-bold text-[#1b9df3] mt-6 mb-2" style={{ fontSize: '1.22rem' }}>Equipment Needed (Minimal)</h3>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li><span className="font-semibold text-[#1b9df3]">Essential</span>: Pull-up bar (doorway or wall-mounted)</li>
              <li><span className="font-semibold text-[#1b9df3]">Optional</span>: Resistance bands, parallette bars, suspension trainer</li>
              <li><span className="font-semibold text-[#1b9df3]">Alternatives</span>: Sturdy table, chairs, towels, backpack for weight</li>
            </ul>
            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>UPPER BODY WORKOUTS</h3>

            {/* CHEST */}
            <h4 className="text-xl font-bold text-[#1b9df3] mt-6 mb-2" style={{ fontSize: '1.18rem' }}>CHEST (Pectorals)</h4>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Beginner Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Wall Push-ups</span> - Pectorals, anterior deltoids, triceps</li>
                <li><span className="font-semibold">Incline Push-ups</span> (hands on chair/couch) - Pectorals, triceps, deltoids</li>
                <li><span className="font-semibold">Knee Push-ups</span> - Pectorals, triceps, deltoids</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Intermediate Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Standard Push-ups</span> - Pectorals, triceps, deltoids, core</li>
                <li><span className="font-semibold">Wide-grip Push-ups</span> - Outer pectorals, deltoids, triceps</li>
                <li><span className="font-semibold">Diamond Push-ups</span> - Inner pectorals, triceps, deltoids</li>
                <li><span className="font-semibold">Decline Push-ups</span> (feet elevated) - Upper pectorals, deltoids, triceps</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Advanced Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">One-arm Push-ups</span> - Pectorals, triceps, deltoids, core, stabilizers</li>
                <li><span className="font-semibold">Archer Push-ups</span> - Pectorals, triceps, deltoids (unilateral strength)</li>
                <li><span className="font-semibold">Handstand Push-ups</span> - Pectorals, deltoids, triceps, core</li>
                <li><span className="font-semibold">Clap Push-ups</span> - Pectorals, triceps, deltoids (explosive power)</li>
              </ul>
            </div>

            {/* BACK */}
            <h4 className="text-xl font-bold text-[#1b9df3] mt-6 mb-2" style={{ fontSize: '1.18rem' }}>BACK (Latissimus Dorsi, Rhomboids, Middle Traps)</h4>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Beginner Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Inverted Rows</span> (using table) - Latissimus dorsi, rhomboids, rear deltoids, biceps</li>
                <li><span className="font-semibold">Prone Y-raises</span> - Rhomboids, middle traps, rear deltoids</li>
                <li><span className="font-semibold">Superman</span> - Erector spinae, rhomboids, rear deltoids, glutes</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Intermediate Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Pull-ups</span> - Latissimus dorsi, rhomboids, middle traps, biceps, rear deltoids</li>
                <li><span className="font-semibold">Chin-ups</span> - Latissimus dorsi, rhomboids, biceps, middle traps</li>
                <li><span className="font-semibold">Wide-grip Pull-ups</span> - Latissimus dorsi (outer), rhomboids, rear deltoids</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Advanced Level</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">One-arm Pull-ups</span> - Latissimus dorsi, rhomboids, biceps, core (unilateral)</li>
                <li><span className="font-semibold">Commando Pull-ups</span> - Latissimus dorsi, rhomboids, biceps, core</li>
                <li><span className="font-semibold">Muscle-ups</span> - Latissimus dorsi, pectorals, triceps, deltoids, core</li>
              </ul>
            </div>

            {/* SHOULDERS */}
            <h4 className="text-xl font-bold text-[#1b9df3] mt-6 mb-2" style={{ fontSize: '1.18rem' }}>SHOULDERS (Deltoids)</h4>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Anterior Deltoids (Front)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Pike Push-ups</span> - Anterior deltoids, triceps, upper pectorals</li>
                <li><span className="font-semibold">Handstand Wall Walk</span> - Anterior deltoids, triceps, core</li>
                <li><span className="font-semibold">Shoulder Taps</span> (in plank) - Anterior deltoids, core, stabilizers</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Lateral Deltoids (Side)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Lateral Raises</span> (with water bottles/books) - Lateral deltoids</li>
                <li><span className="font-semibold">Side Plank Raises</span> - Lateral deltoids, core, stabilizers</li>
                <li><span className="font-semibold">Wall Handstand Hold</span> - All deltoids, triceps, core</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Posterior Deltoids (Rear)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Reverse Fly</span> (lying prone) - Posterior deltoids, rhomboids</li>
                <li><span className="font-semibold">Face Pulls</span> (with towel/resistance band) - Posterior deltoids, rhomboids</li>
                <li><span className="font-semibold">Prone T-raises</span> - Posterior deltoids, rhomboids, middle traps</li>
              </ul>
            </div>

            {/* ARMS */}
            <h4 className="text-xl font-bold text-[#1b9df3] mt-6 mb-2" style={{ fontSize: '1.18rem' }}>ARMS</h4>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Biceps</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Chin-ups</span> - Biceps brachii, brachialis, latissimus dorsi</li>
                <li><span className="font-semibold">Hammer Grip Pull-ups</span> - Brachialis, biceps brachii, brachioradialis</li>
                <li><span className="font-semibold">Towel Bicep Curls</span> (isometric) - Biceps brachii, brachialis</li>
                <li><span className="font-semibold">Door Frame Curls</span> - Biceps brachii, brachialis</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Triceps</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Tricep Dips</span> (on chair/couch) - Triceps brachii, anterior deltoids</li>
                <li><span className="font-semibold">Diamond Push-ups</span> - Triceps brachii, inner pectorals</li>
                <li><span className="font-semibold">Pike Push-ups</span> - Triceps brachii, anterior deltoids</li>
                <li><span className="font-semibold">Overhead Tricep Extension</span> (with backpack) - Triceps brachii (long head)</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Forearms</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Dead Hangs</span> - Forearm flexors, grip strength</li>
                <li><span className="font-semibold">Wrist Curls</span> (with water bottle) - Forearm flexors</li>
                <li><span className="font-semibold">Reverse Wrist Curls</span> - Forearm extensors</li>
                <li><span className="font-semibold">Farmer's Walk</span> (with heavy books) - Forearm flexors, grip strength</li>
              </ul>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* CORE */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>CORE WORKOUTS</h3>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Abs (Rectus Abdominis)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Crunches</span> - Upper rectus abdominis</li>
                <li><span className="font-semibold">Reverse Crunches</span> - Lower rectus abdominis</li>
                <li><span className="font-semibold">Bicycle Crunches</span> - Rectus abdominis, obliques</li>
                <li><span className="font-semibold">V-ups</span> - Rectus abdominis, hip flexors</li>
                <li><span className="font-semibold">Hollow Body Hold</span> - Rectus abdominis, transverse abdominis</li>
                <li><span className="font-semibold">Dead Bug</span> - Rectus abdominis, transverse abdominis, hip flexors</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Obliques (Internal & External)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Russian Twists</span> - Obliques, rectus abdominis</li>
                <li><span className="font-semibold">Side Crunches</span> - Obliques (lateral flexion)</li>
                <li><span className="font-semibold">Bicycle Crunches</span> - Obliques, rectus abdominis</li>
                <li><span className="font-semibold">Side Plank</span> - Obliques, transverse abdominis, quadratus lumborum</li>
                <li><span className="font-semibold">Wood Choppers</span> (with water bottle) - Obliques, core rotation</li>
                <li><span className="font-semibold">Mountain Climbers</span> - Obliques, rectus abdominis, hip flexors</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Deep Core (Transverse Abdominis)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Plank</span> - Transverse abdominis, rectus abdominis, deltoids</li>
                <li><span className="font-semibold">Side Plank</span> - Transverse abdominis, obliques, quadratus lumborum</li>
                <li><span className="font-semibold">Bird Dog</span> - Transverse abdominis, erector spinae, glutes</li>
                <li><span className="font-semibold">Dead Bug</span> - Transverse abdominis, rectus abdominis</li>
                <li><span className="font-semibold">Hollow Body Hold</span> - Transverse abdominis, rectus abdominis</li>
                <li><span className="font-semibold">Bear Crawl</span> - Transverse abdominis, deltoids, quadriceps</li>
              </ul>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* LOWER BODY */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>LOWER BODY WORKOUTS</h3>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Quadriceps (Front Thigh)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Bodyweight Squats</span> - Quadriceps, glutes, calves</li>
                <li><span className="font-semibold">Jump Squats</span> - Quadriceps, glutes, calves (explosive power)</li>
                <li><span className="font-semibold">Single-leg Squats (Pistol Squats)</span> - Quadriceps, glutes, core, balance</li>
                <li><span className="font-semibold">Bulgarian Split Squats</span> - Quadriceps, glutes (unilateral)</li>
                <li><span className="font-semibold">Wall Sits</span> - Quadriceps, glutes (isometric)</li>
                <li><span className="font-semibold">Lunges</span> - Quadriceps, glutes, calves, core</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Hamstrings (Back Thigh)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Single-leg Deadlifts</span> - Hamstrings, glutes, erector spinae, core</li>
                <li><span className="font-semibold">Glute Ham Raises</span> (using couch) - Hamstrings, glutes, erector spinae</li>
                <li><span className="font-semibold">Reverse Lunges</span> - Hamstrings, glutes, quadriceps</li>
                <li><span className="font-semibold">Good Mornings</span> (bodyweight) - Hamstrings, glutes, erector spinae</li>
                <li><span className="font-semibold">Nordic Curls</span> (assisted) - Hamstrings (eccentric strength)</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Glutes (Buttocks)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Glute Bridges</span> - Glutes, hamstrings, core</li>
                <li><span className="font-semibold">Single-leg Glute Bridges</span> - Glutes, hamstrings, core (unilateral)</li>
                <li><span className="font-semibold">Hip Thrusts</span> (shoulders on couch) - Glutes, hamstrings</li>
                <li><span className="font-semibold">Clamshells</span> - Gluteus medius, gluteus minimus</li>
                <li><span className="font-semibold">Fire Hydrants</span> - Gluteus medius, gluteus minimus, core</li>
                <li><span className="font-semibold">Donkey Kicks</span> - Glutes, hamstrings, core</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Calves (Gastrocnemius & Soleus)</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Calf Raises</span> - Gastrocnemius, soleus</li>
                <li><span className="font-semibold">Single-leg Calf Raises</span> - Gastrocnemius, soleus (unilateral)</li>
                <li><span className="font-semibold">Jump Rope</span> (imaginary rope) - Gastrocnemius, soleus, cardio</li>
                <li><span className="font-semibold">Pogo Jumps</span> - Gastrocnemius, soleus (explosive)</li>
              </ul>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* FULL BODY COMPOUND MOVEMENTS */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>FULL BODY COMPOUND MOVEMENTS</h3>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Multi-Muscle Exercises</span>
              <ul className="list-disc list-inside ml-6">
                <li><span className="font-semibold">Burpees</span> - Full body: quadriceps, glutes, pectorals, deltoids, triceps, core</li>
                <li><span className="font-semibold">Mountain Climbers</span> - Core, deltoids, quadriceps, glutes, cardio</li>
                <li><span className="font-semibold">Bear Crawl</span> - Deltoids, triceps, core, quadriceps, glutes</li>
                <li><span className="font-semibold">Crab Walk</span> - Triceps, posterior deltoids, glutes, hamstrings, core</li>
                <li><span className="font-semibold">Turkish Get-ups</span> (with water bottle) - Full body coordination and strength</li>
                <li><span className="font-semibold">Plank to Downward Dog</span> - Core, deltoids, hamstrings, calves</li>
              </ul>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* SAMPLE WORKOUT ROUTINES */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>SAMPLE WORKOUT ROUTINES</h3>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-[#1b9df3] mt-4 mb-1" style={{ fontSize: '1.13rem' }}>Upper Body Focus (Monday/Thursday)</h4>
              <ol className="list-decimal list-inside ml-6">
                <li>Push-ups: 3 sets of 8-15 reps (Pectorals, triceps, deltoids)</li>
                <li>Pull-ups: 3 sets of 5-12 reps (Latissimus dorsi, biceps, rhomboids)</li>
                <li>Pike Push-ups: 3 sets of 6-12 reps (Deltoids, triceps)</li>
                <li>Tricep Dips: 3 sets of 8-15 reps (Triceps, deltoids)</li>
                <li>Inverted Rows: 3 sets of 8-15 reps (Rhomboids, biceps, rear deltoids)</li>
              </ol>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-[#1b9df3] mt-4 mb-1" style={{ fontSize: '1.13rem' }}>Lower Body Focus (Tuesday/Friday)</h4>
              <ol className="list-decimal list-inside ml-6">
                <li>Squats: 3 sets of 15-25 reps (Quadriceps, glutes)</li>
                <li>Lunges: 3 sets of 10-15 each leg (Quadriceps, glutes, hamstrings)</li>
                <li>Single-leg Deadlifts: 3 sets of 8-12 each leg (Hamstrings, glutes)</li>
                <li>Glute Bridges: 3 sets of 15-20 reps (Glutes, hamstrings)</li>
                <li>Calf Raises: 3 sets of 15-25 reps (Calves)</li>
              </ol>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-[#1b9df3] mt-4 mb-1" style={{ fontSize: '1.13rem' }}>Core Focus (Wednesday/Saturday)</h4>
              <ol className="list-decimal list-inside ml-6">
                <li>Plank: 3 sets of 30-60 seconds (Core, deltoids)</li>
                <li>Russian Twists: 3 sets of 20-30 reps (Obliques, abs)</li>
                <li>Bicycle Crunches: 3 sets of 20-30 reps (Abs, obliques)</li>
                <li>Dead Bug: 3 sets of 10-15 each side (Deep core)</li>
                <li>Side Plank: 2 sets of 20-45 seconds each side (Obliques, core)</li>
              </ol>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-[#1b9df3] mt-4 mb-1" style={{ fontSize: '1.13rem' }}>Full Body HIIT (Sunday)</h4>
              <ol className="list-decimal list-inside ml-6">
                <li>Burpees: 4 sets of 5-10 reps (Full body)</li>
                <li>Mountain Climbers: 4 sets of 20-30 reps (Core, cardio)</li>
                <li>Jump Squats: 4 sets of 10-15 reps (Legs, explosive power)</li>
                <li>Push-ups: 4 sets of 5-15 reps (Upper body)</li>
                <li>Bear Crawl: 4 sets of 10-15 steps (Full body)</li>
              </ol>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* PROGRESSION TIPS */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>PROGRESSION TIPS</h3>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Beginner to Intermediate</span>
              <ul className="list-disc list-inside ml-6">
                <li>Master bodyweight before adding difficulty</li>
                <li>Focus on form over repetitions</li>
                <li>Progress from assisted to full range of motion</li>
                <li>Increase reps before moving to harder variations</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Intermediate to Advanced</span>
              <ul className="list-disc list-inside ml-6">
                <li>Add unilateral (single-limb) exercises</li>
                <li>Incorporate isometric holds</li>
                <li>Try explosive/plyometric variations</li>
                <li>Add external resistance when possible</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Recovery & Rest</span>
              <ul className="list-disc list-inside ml-6">
                <li>Allow 48-72 hours between training same muscle groups</li>
                <li>Include active recovery (light stretching, walking)</li>
                <li>Ensure adequate sleep (7-9 hours)</li>
                <li>Stay hydrated and maintain proper nutrition</li>
              </ul>
            </div>

            <hr className="my-6 border-t-2 border-[#1b9df3]" />

            {/* KEY MUSCLE GROUPS SUMMARY */}
            <h3 className="text-2xl font-bold text-[#1b9df3] mt-8 mb-2" style={{ fontSize: '1.35rem' }}>KEY MUSCLE GROUPS SUMMARY</h3>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Upper Body</span>: Pectorals, Latissimus Dorsi, Deltoids (Anterior/Lateral/Posterior), Rhomboids, Middle Traps, Biceps, Triceps, Forearms
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Core</span>: Rectus Abdominis, Internal/External Obliques, Transverse Abdominis, Erector Spinae
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#1b9df3]">Lower Body</span>: Quadriceps, Hamstrings, Glutes (Maximus/Medius/Minimus), Gastrocnemius, Soleus
            </div>
            <p className="mt-4">
              This comprehensive guide provides exercises for every major muscle group using minimal equipment, allowing you to build strength, muscle, and endurance entirely at home through calisthenics training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 