---
title: The 4 Principles of the Web Accessibility
date: '2020-01-20T10:00:00.000Z'
description: 'Accessibility refers to the design and development of websites, applications or services that can be operated by people with disabilities. Addressing accessibility issues improves the experience not only for that group of people but for everyone.'
---

![accessibility](./accessibility.jpeg)

Accessibility refers to the design and development of websites, applications or services that can be operated by people with disabilities. Addressing accessibility issues improves the experience not only for that group of people but for everyone.

In the context of web development, we can take a look at the [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/) that is a compilation of best practices and guidelines that were written by accessibility experts. WCAG is based on four principles:

> Principle 1: Perceivable  -  Information and user interface components must be presentable to users in ways they can perceive.

Users must be able to process information without any barriers to access to your application.

This means that you should provide alternatives for people who have weaker senses, such as:

* _Video captions or sign language translations for people who are deaf_
* _Support to screen readers for who are blind_
* _The ability to change text size or contrast for people those with a visually impaired_
* _Showing interactivity states like_ `hover` _or_ `active` _to ensure people have a clue of what is happening in the UI_

> Principle 2: Operable  -  User interface components and navigation must be operable.

Operability means that a user can successfully use the interface with a variety of tools such as a mouse, a touch screen or a keyboard. To make sure it is working as expected it is recommended to:

* _Have targets (buttons, links) sizes that are big enough_
* _Have a logical and visually matching focus order_

It is also important to make forgiving apps, this means _your interface should offer instructions, warnings and cancellation options_.

> Principle 3: Understandable  -  Information and the operation of user interface must be understandable.

Your _UI language_ should be easy to comprehend. Consistency between all the components ensures that the user will not get a surprise.

It is also important to have good error handling and feedback. Labels must be explicit and adequate to provide a guide through the whole application.

> Principle 4: Robust  -  Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

Users pick their own stack of technologies. Your application should be robust enough to work in the majority of browsers and operating systems within reasonable limits.

One of the best ways to meet the principle of robustness is to follow development standards and conventions across all the development team.
