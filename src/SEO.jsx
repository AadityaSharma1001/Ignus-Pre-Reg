import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
    const title = "Ignus 2026 | IIT Jodhpur's Socio-Cultural Festival";
    const description = "Experience Ignus 2026, IIT Jodhpur's flagship cultural extravaganza! Join us for four days of spectacular performances, competitions, workshops, and cultural celebrations. Featuring star-studded concerts, dance competitions, theatrical performances, art exhibitions, literary events, and much more. Don't miss India's most awaited college cultural festival that brings together talented students from across the nation. Register now to be part of this grand celebration of art, culture, and creativity!";
    const keywords = "Ignus 2026, IIT Jodhpur, cultural festival, college fest, cultural events, Ignus, Midnight Carnival ,Ignus, ignus, ignus 2026, iit jodhpur, iitj, iit jodhpur cultural fest, iit jodhpur cultural festival, ignus 2026 iit jodhpur, ignus 2026 iit jodhpur cultural fest, ignus 2026 iit jodhpur cultural festival, jodhpur iit, Social, cultfest, IITJ, IIT Jodhpur, Indian Institute of Technology - Jodhpur, Socio-Cultural fest, Cultural fest, Cultural, Social fest, college festival, Jodhpur, Rajasthan, IIT Rajasthan, Cultfest 2024, Ignus, 2024, Ignus 2024, Paper Dance, Salsa, informals, prizes, prakriti, Bohemian Convoy, pronites, flagship, igmun, february, feb, pre-register, sponsors, film making, dance, drama, fine arts, quiz, literature, music, photography, speed dating, workshops, paintball, prom night, movie screening, poker royale, EDM, Indian Ocean, Benny Dayal, Antarang, Nrityansh, Nukkad, Aayaam, coming soon, desert, events, exhibitions, competetion, iitj, 2024, largest festival in Northwest India, friends, fun, enjoy, most awaited cultfest";
    const image = "https://i.postimg.cc/sgLNkn1z/Screenshot-2025-01-12-003932.png";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",

        "name": "Ignus 2026",
        "description": description,
        "image": image,
        "startDate": "2026-02-06",
        "endDate": "2026-02-08",
        "location": {
            "@type": "Place",
            "name": "IIT Jodhpur",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "NH 65, Nagaur Road",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "postalCode": "342030",
                "addressCountry": "IN"
            }
        },
        "organizer": {
            "@type": "Organization",
            "name": "IIT Jodhpur",
            "url": "https://ignus.iitj.ac.in",
            "logo": image
        },
        "offers": {
            "@type": "Offer",
            "url": "https://ignus.iitj.ac.in/login",
            "availability": "InStock"
        },
        "eventStatus": "EventScheduled",
        "eventAttendanceMode": "OfflineEventAttendanceMode"
    };

    return (
        <Helmet>
            {/* Primary Meta Tags - Title is set by individual pages using usePageTitle hook */}
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Indexing Directives - Updated */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            {/* Ensure Fresh Content Crawling */}
            <meta httpEquiv="cache-control" content="no-cache" />
            <meta httpEquiv="expires" content="0" />
            <meta httpEquiv="pragma" content="no-cache" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ignus.iitj.ac.in" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Ignus IIT Jodhpur" />
            <meta property="fb:pages" content="ignus.iitj" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://ignus.iitj.ac.in" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta name="twitter:site" content="@Ignus_IITJ" />

            {/* Instagram */}
            <meta property="instagram:image" content={image} />
            <meta property="instagram:card" content="summary_large_image" />
            <meta property="instagram:url" content="https://ignus.iitj.ac.in" />

            {/* Social Media Links */}
            <link rel="me" href="https://www.instagram.com/ignus_iitj/" />
            <link rel="me" href="https://www.youtube.com/user/IgnusIITJodhpur" />
            <link rel="me" href="https://www.facebook.com/ignus.iitj/" />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index,follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content="IIT Jodhpur" />
            <meta name="theme-color" content="#f7ccd5" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://ignus.iitj.ac.in" />

            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href="https://ignus-23-dz52zm5qd-panyalasainathreddy.vercel.app/static/ignus%20icon.png" />
        </Helmet>
    );
};

export default SEO;