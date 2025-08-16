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
      <div className="w-full bg-white rounded-2xl shadow-lg p-8 mb-8 mt-6 border border-slate-200 font-raleway">
        <h1 className="text-3xl md:text-4xl font-extrabold font-raleway mb-4 text-[#1b9df3] flex items-center gap-2">
          <span role="img" aria-label="book">📚</span>
          Complete Gym Exercise Guide with Videos, GIFs, and Images – Your Ultimate Workout Encyclopedia
        </h1>
        <p className="text-lg text-slate-700 mb-4 font-raleway">
          Welcome to the most comprehensive online gym exercise guide designed to help beginners, intermediate, and advanced fitness enthusiasts achieve their goals faster. Whether you’re looking to build muscle, lose fat, improve flexibility, or enhance strength, our guide offers step-by-step video tutorials, GIF demonstrations, and high-quality exercise images for every muscle group.
        </p>
        <p className="text-lg text-slate-700 mb-4 font-raleway">
          Our mission is simple: to provide a structured, visual-based gym guide that makes workouts easy to understand and follow. Every exercise is demonstrated by fitness professionals, ensuring you learn the correct form, prevent injuries, and get the best possible results from your training.
        </p>
        <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway" />

        <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway">Why Choose Our Gym Exercise Library?</h3>
        <p className="text-base text-slate-700 mb-2 font-raleway">
          Unlike random workout tips you find online, our platform is a curated fitness encyclopedia with verified exercises, clear instructions, and visual guidance in both video and GIF formats. Here’s what makes it stand out:
        </p>
        <ul className="list-disc pl-6 text-base text-slate-700 mb-4 space-y-1 font-raleway">
          <li><span className="font-semibold text-[#1b9df3]">100% Free</span> – Access without any subscription or hidden costs.</li>
          <li><span className="font-semibold text-[#1b9df3]">Copyright-Free Media</span> – All exercise videos and images are sourced from trusted, license-free platforms, making them safe for personal and educational use.</li>
          <li><span className="font-semibold text-[#1b9df3]">Multiple Formats</span> – View workouts in video, GIF, or image form, so you can choose the format that works best for you.</li>
          <li><span className="font-semibold text-[#1b9df3]">Step-by-Step Instructions</span> – Learn how to perform every rep with perfect form.</li>
          <li><span className="font-semibold text-[#1b9df3]">Organized by Muscle Groups</span> – Chest, back, shoulders, arms, legs, abs, and more.</li>
        </ul>
        <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway" />

        <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway">Full-Body Workout Coverage</h3>
        <p className="text-base text-slate-700 mb-4 font-raleway">
          Our gym guide covers every type of exercise you could need:
        </p>
        <ol className="list-decimal pl-6 text-base text-slate-700 mb-4 space-y-2 font-raleway">
          <li>
            <span className="font-semibold text-[#1b9df3]">Chest Exercises</span><br />
            From bench press to push-ups and incline dumbbell flyes, learn techniques that maximize muscle growth and target your pectorals from all angles.
          </li>
          <li>
            <span className="font-semibold text-[#1b9df3]">Back Exercises</span><br />
            Build a strong, wide back with movements like pull-ups, lat pulldowns, bent-over rows, and deadlifts. Perfect your posture and increase pulling strength.
          </li>
          <li>
            <span className="font-semibold text-[#1b9df3]">Shoulder Workouts</span><br />
            Master overhead presses, lateral raises, front raises, and shrugs to build well-rounded deltoids for both strength and aesthetics.
          </li>
          <li>
            <span className="font-semibold text-[#1b9df3]">Arm Workouts</span><br />
            Target your biceps, triceps, and forearms with effective moves like barbell curls, hammer curls, skull crushers, and dips.
          </li>
          <li>
            <span className="font-semibold text-[#1b9df3]">Leg Workouts</span><br />
            From squats to lunges and calf raises, train for explosive lower-body power and stability.
          </li>
          <li>
            <span className="font-semibold text-[#1b9df3]">Ab & Core Workouts</span><br />
            Get a stronger core with planks, crunches, hanging leg raises, and ab rollouts.
          </li>
        </ol>
        <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway" />

        <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway">Benefits of Using Video & GIF Workout Guides</h3>
        <ul className="list-disc pl-6 text-base text-slate-700 mb-4 space-y-1 font-raleway">
          <li><span className="font-semibold">Learn Faster</span> – Visual demonstrations help you understand movements instantly.</li>
          <li><span className="font-semibold">Avoid Injuries</span> – Proper form prevents strain and long-term damage.</li>
          <li><span className="font-semibold">Motivation On Demand</span> – Seeing exercises performed inspires consistency.</li>
          <li><span className="font-semibold">Works Anywhere</span> – Whether you train at home or the gym, videos and GIFs are easy to follow.</li>
        </ul>
        <hr className="w-full border-t-2 border-[#1b9df3] my-8 font-raleway" />

        <h3 className="text-2xl font-bold text-[#1b9df3] mt-6 mb-2 font-raleway">Train Anywhere, Anytime</h3>
        <p className="text-base text-slate-700 font-raleway">
          You can use this guide at home, in a commercial gym, or even outdoors. The workouts are adaptable to your space and available equipment. Plus, the visual guides make them ideal for beginners who may feel nervous in a gym setting.
        </p>
      </div>
    </div>
  );
} 