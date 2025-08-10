---
layout: default
title: Projects
---

# 🚀 My Projects

Here are some of my favorite Android projects.  
Click **View Details** to see screenshots, features, and links.

<div class="projects-grid">

  <!-- Project 1 -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/smart-expense-tracker-thumb.png" alt="Smart Expense Tracker Thumbnail">
    <h3>📱 Smart Expense Tracker</h3>
    <p>Android app to track personal expenses, categorize spending, and visualize data with charts.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/trackulator">View Details</a>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/newshub-thumb.png" alt="NewsHub Thumbnail">
    <h3>📰 NewsHub</h3>
    <p>Clean Android news reader app using Retrofit and Glide, with offline caching.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/newshub">View Details</a>
  </div>

  <!-- Project 3 -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/music-player-pro-thumb.png" alt="Music Player Pro Thumbnail">
    <h3>🎵 Music Player Pro</h3>
    <p>Feature-rich Android music player with playlists, equalizer, and custom UI.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/music-player-pro">View Details</a>
  </div>

  <!-- Project 4 -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/moniepoint-sample-thumb.png" alt="Moniepoint Sample App Thumbnail">
    <h3>📊 Moniepoint Sample App</h3>
    <p>A sample mobile banking UI demo with login, dashboard, and transaction history.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/moniepoint-sample">View Details</a>
  </div>

</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  padding: 1rem;
  border-radius: 12px;
  box-shadow: var(--shadow, 0px 4px 15px rgba(0,0,0,0.1));
  background: var(--card-bg, var(--background-color));
  text-align: center;
}

.project-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.8rem;
}

.project-card h3 {
  margin-top: 0;
}

.project-card p {
  font-size: 0.9rem;
  min-height: 50px;
}

.project-card .btn {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.5rem 1.2rem;
  background: #00c896;
  color: #000;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.project-card .btn:hover {
  background: #00a77d;
}
</style>
