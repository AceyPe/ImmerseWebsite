// import { transition } from "@chakra-ui/react";

export const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.3 },
});

export const fadeInDown = (delay = 0.2) => ({
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.3 },
});

export const fadeInLeft = (delay = 0.2) => ({
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.3 },
});

export const fadeInRight = (delay = 0.2) => ({
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.3 },
});

export const fadeIn = (delay = 0.2) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, delay },
    viewport: { once:true, amount: 0.3 },
})