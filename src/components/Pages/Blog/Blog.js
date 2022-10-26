import React from 'react';

const Blog = () => {
    return (
        <div >
           <h4 >1. What is cors?</h4>
           <p className='m-2'>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
           <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
           <p> Google Analytics for Firebase allows us to track our users' journey through realtime and custom reporting. Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.</p>
           <h6>Other options:</h6>
           <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
           <h4>3. How does the private route work?</h4>
           <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
           <h4>4. What is Node? How does Node work?</h4>
           <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
        </div>
    );
};

export default Blog;