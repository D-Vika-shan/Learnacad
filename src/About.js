import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './About.css'; // Import your CSS for styling

function About() {
  const threeCanvas = useRef(null);

  useEffect(() => {
    let renderer, scene, camera;
    const shapes = [];

    // Set up Three.js scene
    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: threeCanvas.current, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xfdf5e6); // Soft peach background color

      camera.position.z = 5;

      // Create multiple instances of different shapes
      const numShapes = 30; // Number of shapes to create

      const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32); // Cylinder (pen) geometry
      const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black material

      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // Sphere geometry
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff6347 }); // Tomato color

      const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100); // Torus geometry
      const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x4682b4 }); // Steel blue color

      const dodecahedronGeometry = new THREE.DodecahedronGeometry(1); // Dodecahedron geometry
      const dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: 0x8a2be2 }); // Blue violet color

      for (let i = 0; i < numShapes; i++) {
        const randomShape = Math.floor(Math.random() * 4); // Randomly choose a shape

        let mesh, geometry, material;

        switch (randomShape) {
          case 0:
            geometry = cylinderGeometry;
            material = cylinderMaterial;
            break;
          case 1:
            geometry = sphereGeometry;
            material = sphereMaterial;
            break;
          case 2:
            geometry = torusGeometry;
            material = torusMaterial;
            break;
          case 3:
            geometry = dodecahedronGeometry;
            material = dodecahedronMaterial;
            break;
          default:
            geometry = sphereGeometry;
            material = sphereMaterial;
            break;
        }

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 10 - 5; // Random position within range
        mesh.position.y = Math.random() * 10 - 5; // Random position within range
        mesh.position.z = Math.random() * 10 - 5; // Random position within range
        mesh.rotation.x = Math.random() * Math.PI * 2; // Random rotation
        mesh.rotation.y = Math.random() * Math.PI * 2; // Random rotation
        scene.add(mesh);
        shapes.push(mesh);
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update rotation for each shape
      shapes.forEach((shape) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    // Initialize scene and start animation loop
    initScene();
    animate();

    // Handle resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose(); // Clean up renderer resources
    };
  }, []);

  return (
    <div className="about-container">
      <canvas ref={threeCanvas} className="about-canvas" />
      <div className="about-overlay">
        <div className="about-details">
          <h1>About Us</h1>
          <h2><strong>Team Name:</strong> Webzters</h2>
          <ul>
            <li><strong>Name:</strong> Devika Prashant</li>
            <li><strong>Registration Number:</strong> 22BAI1196</li>
            <li><strong>Contact Number:</strong> 9345909097</li>
            <li><strong>VIT Email ID:</strong> devika.prashant2022@vitstudent.ac.in</li>
            <br/>
            <li><strong>Name:</strong> Mridula Prasad</li>
            <li><strong>Registration Number:</strong> 22BAI1249</li>
            <li><strong>Contact Number:</strong> 7305831064</li>
            <li><strong>VIT Email ID:</strong> mridula.prasad2022@vitstudent.ac.in</li>
          </ul>
        </div>
        <div className="video-container">
          <iframe
            src="https://drive.google.com/file/d/1KIaPJMw4pclJdFf9F--oApAUuQQSRIuk/preview"
            width="700"
            height="400"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
