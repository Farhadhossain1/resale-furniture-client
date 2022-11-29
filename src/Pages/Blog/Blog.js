import React from 'react';
import './Blog.css';

const Blog = () => {
    return (

        
        <div>
             <div>
                <h2 className='text-4xl font-semibold text-center text-gray-700 '>Blog Section</h2>
            </div>
            <div className='lg:w-4/5 m-auto mt-10 px-3'>
            <div className='py-4 px-8 blog-text'>
                    <h2 className='text-2xl font-semibold font-serif '>What are the different ways to manage a state in a React application?</h2>
                    <p className='text-xl py-4'>In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "disappears" once the execution is finished.But thanks to state, React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.</p>
            </div>
            <div className='py-4 my-12 px-8 blog-text'>
                    <h2 className='text-2xl font-serif font-semibold'>How does prototypical inheritance work?</h2>
                    <p className='text-xl py-4'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='py-4 my-12 px-8  blog-text'>
                <h2 className='text-2xl font-serif font-semibold'> What is a unit test? Why should we write unit tests?</h2>
                <p className='text-xl py-4'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system</p>
            </div>
            <div className='py-4 my-12 px-8  blog-text'>
                <h2 className='text-2xl font-serif font-semibold'>React vs. Angular vs. Vue?</h2>
                <p className='text-xl py-4'>Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company.With the availability of thousands of app development, creating an application is not a challenging job but at the same time, if you are assuming that breaking into the mobile app market is the key to success, then you are mistaken. To succeed in this thriving market, it includes in-depth planning, unique strategy, extensive planning and access to top-rated technologies to create an enterprise-level app
                </p>
            </div>
            </div>
        </div>
    );
};

export default Blog;