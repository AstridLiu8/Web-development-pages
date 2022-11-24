  //creating a variable named tl for timeline and set it equal to gsap's timeline
  //to configure the scroll trigger and set it to the object and set the property in
  //set as soon as we hit the Home page(as trigger and 0%) and effect would end when the page scroll over 80%
  //set the scrub to 1(1s to catch up the bar) to make the animation smoothing
  let tl= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'80%',
          scrub: 1,
      },
  });
  //same as the tl, but tl2 is for the large logo title
  let tl2= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'60%',
          scrub: 1,
      },
  });
//tl4-tl7 are the subtitle's timeline
  let tl4= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'80%',
          scrub: 1,
      },
  });
  let tl5= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'80%',
          scrub: 1,
      },
  });
  let tl6= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'80%',
          scrub: 1,
      },
  });
  let tl7= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'80%',
          scrub: 1,
      },
  });

//set the animation's start point and end point
//  the height change
//  the scale effect and position change
//  the rolling title effect(utilizing the rotation and movement start and end point)
tl.fromTo(".sliding-logo",{y:0 },{y:-400})
tl2.fromTo(".logo",{scale:6},{scale:1.5, top:"1.1rem",left:"15rem",x:'50%',y:'50%'});
tl4.fromTo('.circle img',{left:"3%"},{left:"100%",opacity:0.1,rotation:90})
tl5.fromTo('.subtitle',{left:"59%"},{left:"150%",opacity:1,rotation:90})
tl6.fromTo('.subtitle1',{left:"71%"},{left:"150%",opacity:1,rotation:90})
tl7.fromTo('.subtitle1bg',{left:"64%"},{left:"150%",opacity:1,rotation:90})

  let tl8= gsap.timeline({
      scrollTrigger:{
          trigger:'.navbar',
          start:'0%',
          end:'10000%',
          scrub: 1,
          pin:true,
          pinSpacing: false,
      },
  });

  //in order to create the "Home" sliding effect, the Home page section should be static
  //therefore tl3 is created as the same but pin to form the effect
  //to not affect other animation, these coding should be put to the last after other "tl"
  //pinSpacing-to make other section element could move up
  //To sum up the navigation bar would follow (as static )with the scrolling after the animation(now is set til 300% page)
  let tl3= gsap.timeline({
      scrollTrigger:{
          trigger:'.Home',
          start:'0%',
          end:'300%',
          scrub: 1,
          pin:true,
          pinSpacing: false,
      },
  });






