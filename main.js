var tl = gsap.timeline();

tl.from(bg1, 1, { opacity: 100, ease: Expo.easeOut });
tl.from(text1, 1, { top: 350, ease: Expo.easeOut });
tl.to(bg1, 1, { opacity: 0, ease: Expo.easeOut });

tl.from(bg2, 1, { opacity: 0, ease: Expo.easeOut });
tl.from(text2, 1, { top: 350, ease: Expo.easeOut });

tl.to(text1, 1, { opacity: 0, ease: Expo.easeOut });
tl.to(bg2, 1, { opacity: 0.3, ease: Expo.easeOut });
tl.from(text2, 1, { top: 350, ease: Expo.easeOut });

tl.to(text2, 1, { opacity: 0, ease: Expo.easeOut });
tl.from(slogan, 1, { top: 350, ease: Expo.easeOut });
tl.from(footer, 1, { top: 350, ease: Expo.easeOut });
