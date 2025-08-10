---
layout: default
title: Projects
permalink: /projects/
---

# 💼 Projects

<div class="projects-grid">

  <!-- Project Card 1 -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/link-saver-thumb.png" alt="Link Saver Thumbnail">
    <h2>Link Saver</h2>
    <p>A robust mobile app for link management, privacy, and social sharing — with built-in WhatsApp status saving.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/link-saver/">View Details</a>
  </div>

  <!-- Project Card 2 (Placeholder) -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/project2-thumb.png" alt="Project 2 Thumbnail">
    <h2>Project Two</h2>
    <p>Short description of your second project goes here.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/project-two/">View Details</a>
  </div>

  <!-- Project Card 3 (Placeholder) -->
  <div class="project-card">
    <img src="{{ site.baseurl }}/assets/images/project3-thumb.png" alt="Project 3 Thumbnail">
    <h2>Project Three</h2>
    <p>Short description of your third project goes here.</p>
    <a class="btn" href="{{ site.baseurl }}/projects/project-three/">View Details</a>
  </div>

</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: #1f1f1f;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.3);
}

.project-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.project-card h2 {
  margin-top: 0.8rem;
  color: #fff;
}

.project-card p {
  font-size: 0.9rem;
  color: #ccc;
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
