/* ==============================================
   SOCIAL MEDIA LINKS DATA
   ============================================== */

/**
 * WHY SEPARATE FILE?
 * - Easy to edit social links without touching JavaScript logic
 * - Clean organization (data separated from code)
 * - If you add/remove social platforms, you only edit this file
 * 
 * HOW IT WORKS?
 * - This file is loaded BEFORE script.js in index.html
 * - Creates the 'links' array that script.js uses
 * - script.js can access this data without rewriting it
 */

/**
 * LINKS ARRAY
 * Contains all your social media and external platform links
 * Each link has:
 * - label: What text appears on the button
 * - url: Where the link points to
 */
const links = [
    {
        label: "Instagram",
        url: "https://www.instagram.com/vnunhardtova/"
    },
    {
        label: "RedBubble",
        url: "https://www.redbubble.com/people/Noolien/shop"
    },
    {
        label: "Ko-Fi",
        url: "https://www.ko-fi.com/vnunhardtova"
    },
    {
        label: "Email",
        url: "mailto:vhardt@duck.com"
    }
];

/**
 * HOW TO ADD A NEW LINK:
 * 
 * Just add a new object to the array above:
 * {
 *     label: "Your Platform Name",
 *     url: "https://your-platform-url.com/yourprofile"
 * }
 * 
 * Example (Twitter):
 * {
 *     label: "Twitter",
 *     url: "https://twitter.com/yourusername"
 * }
 */
