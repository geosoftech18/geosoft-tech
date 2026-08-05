/** Swiper ships plain .css files without type declarations, which TypeScript
 *  cannot resolve under moduleResolution "bundler". Bundler handles them fine. */
declare module 'swiper/css';
declare module 'swiper/css/*';
