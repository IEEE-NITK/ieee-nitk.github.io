---
layout: post
title: "The Challenger Disaster"
author_github: mahirjain25
date: 2017-09-03 10:52:30
image: '/assets/img/'
description: 'Examining a space exploration disaster'
tags:
- Space
- NASA
- Case Study
categories:
- Piston
github_username: 'mahirjain25'
---

{% highlight javascript %}
angular
  .module('app')
  .directive('foo', function() {
    return {
      restrict: 'E',
      template: 'Sup yo'
    }
  });
{% endhighlight %}





***The Challenger Disaster***

On January 28<sup>th</sup> 1986, the scheduled launch for NASA’s space
orbiter- the Challenger, took place as planned. But the launch was the
only part of the mission that stuck to plan. 73 seconds after liftoff,
the shuttle exploded and broke up, bringing a devastating end to the
spacecraft’s 10<sup>th</sup> mission, claiming all 7 lives onboard. All
because of a tiny, rather overlooked aspect of a structure failing due
to a very basic property of the given material.

After extensive failure analysis, it was determined that the failure of
2 rubber O-rings caused the disaster.

To understand why the O-rings failed, the answer lies in a basic concept
of polymer materials- the glass transition temperature. When a polymer
is cooled below this temperature, it becomes hard and brittle, like
glass. The temperature at which this happens is called glass transition
temperature( T<sub>g</sub>). Each and every polymer material has a glass
transition temperature that varies with its structure, substituent
groups, molecular mass etc.

A good way to understand why this transition occurs is to use an anology
of snakes. Polymers exist as highly coiled chains. Consider a room full
of snakes. Let each snake represent a polymer chain. We know that snakes
are cold blooded. When it’s warm, snakes move more, slither and slide
over each other easier. The snakes move randomly. Now, when the
temperature is reduced, snakes generally don’t move much. They slow down
and tend to stay still. They’re still wrapped around, over and under
each other, but there is no motion. Polymer chains work similarly. This
lack of movement in the polymer chains causes it to become a brittle
mass.

The O-Ring in the Challenger shuttle was made of nitrile rubber- a
synthetic variant of natural rubber. The glass transition temperature of
nitrile rubber used was around 1-2<sup>o</sup> C. Due to the cold
ambient temperature along with the ice collected on the launch pad due
to some unusual temperatures, the rubber became a brittle mass losing
its ability to seal the fuel tanks properly. This allowed leakage of
exhaust gases, which caused uncontrolled combustion between the liquid
hydrogen and oxygen, destroying the fuel tanks and causing the shuttle
to break apart.

It is interesting to note that the engineers involved in the design of
the shuttle did warn their superiors about certain components of the
shuttle failing at low temperatures but, for whatever reasons, these
warnings were unheeded. This was also the first time NASA launched
shuttles at such low temperatures. The coldest temperature of a previous
launch was 11<sup>o</sup>C higher.

Almost a billion US dollars and, more importantly, seven lives were lost
because world renowned scientists and engineers forgot to keep in mind
basic concepts of simple materials. Law suits were filed against both
NASA and the company responsible for designing the rocket boosters and
the tanks- Morton Thiokol.

To this day, this incident is a case study in many discussions of
engineering safety and workplace ethics. This incident only goes on to
prove the importance of materials used when designing structures.

--

Nikhil Govindarajan
