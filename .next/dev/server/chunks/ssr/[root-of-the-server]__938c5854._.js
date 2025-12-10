module.exports = [
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/models/product.model.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const productSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    currency: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    priceHistory: [
        {
            price: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    lowestPrice: {
        type: Number
    },
    highestPrice: {
        type: Number
    },
    averagePrice: {
        type: Number
    },
    discountRate: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    reviewsCount: {
        type: Number
    },
    isOutOfStock: {
        type: Boolean,
        default: false
    },
    users: [
        {
            email: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});
const Product = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Product', productSchema);
const __TURBOPACK__default__export__ = Product;
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/mongoose.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDB",
    ()=>connectToDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
let isConnected = false; // Variable to track the connection status
const connectToDB = async ()=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].set('strictQuery', true);
    if (!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined');
    if (isConnected) return console.log('=> using existing database connection');
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
};
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractCurrency",
    ()=>extractCurrency,
    "extractDescription",
    ()=>extractDescription,
    "extractFiveStarPercentage",
    ()=>extractFiveStarPercentage,
    "extractPrice",
    ()=>extractPrice,
    "extractReviewsCount",
    ()=>extractReviewsCount,
    "extractStars",
    ()=>extractStars,
    "formatNumber",
    ()=>formatNumber,
    "getAveragePrice",
    ()=>getAveragePrice,
    "getEmailNotifType",
    ()=>getEmailNotifType,
    "getHighestPrice",
    ()=>getHighestPrice,
    "getLowestPrice",
    ()=>getLowestPrice
]);
const Notification = {
    WELCOME: 'WELCOME',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET'
};
const THRESHOLD_PERCENTAGE = 40;
function extractPrice(...elements) {
    for (const element of elements){
        const priceText = element.text().trim();
        if (priceText) {
            const cleanPrice = priceText.replace(/[^\d.]/g, '');
            let firstPrice;
            if (cleanPrice) {
                firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
            }
            return firstPrice || cleanPrice;
        }
    }
    return '';
}
function extractCurrency(element) {
    const currencyText = element.text().trim().slice(0, 1);
    return currencyText ? currencyText : "";
}
function extractDescription($) {
    // Extracting description from common Amazon selectors
    const selectors = [
        '#feature-bullets .a-list-item',
        '#productDescription p',
        '.a-unordered-list .a-list-item'
    ];
    let description = '';
    selectors.forEach((selector)=>{
        $(selector).each((i, el)=>{
            const text = $(el).text().trim();
            if (text.length > 0 && !text.toLowerCase().includes('sort reviews by') && !text.match(/^\d(\.\d)?$/)) {
                description += `• ${text}\n`;
            }
        });
    });
    // Truncate to 300 words if necessary, ending at the next full stop
    const maxWords = 300;
    const words = description.split(/\s+/);
    if (words.length > maxWords) {
        let truncatedText = words.slice(0, maxWords).join(' ');
        const lastPeriodIndex = truncatedText.lastIndexOf('.');
        if (lastPeriodIndex !== -1) {
            truncatedText = truncatedText.slice(0, lastPeriodIndex + 1);
        }
        description = truncatedText + '...';
    }
    return description.trim();
}
function extractReviewsCount(...elements) {
    for (const element of elements){
        const text = element.text().trim();
        const count = text.replace(/[^0-9]/g, '');
        if (count) {
            // Remove duplication by taking the first half of the string
            return count.slice(0, count.length / 2);
        }
    }
    return '';
}
function extractStars(...elements) {
    for (const element of elements){
        // Get the rating text, usually in a format like "4.5 out of 5 stars"
        const ratingText = element.text().trim();
        if (ratingText) {
            // Extract the numeric value from the rating string
            const ratingMatch = ratingText.match(/(\d+(\.\d+)?)/);
            if (ratingMatch) {
                return parseFloat(ratingMatch[0]);
            }
        }
    }
    return '';
}
function extractFiveStarPercentage(...elements) {
    for (const element of elements){
        // Get the text content that usually contains the percentage, like "80% 5 star"
        const percentageText = element.text().trim();
        if (percentageText) {
            // Extract the numeric percentage value (e.g., "80%")
            const percentageMatch = percentageText.match(/(\d+(\.\d+)?)%/);
            if (percentageMatch) {
                return parseFloat(percentageMatch[1]);
            }
        }
    }
    return '';
}
function getHighestPrice(priceList) {
    let highestPrice = priceList[0];
    for(let i = 0; i < priceList.length; i++){
        if (priceList[i].price > highestPrice.price) {
            highestPrice = priceList[i];
        }
    }
    return highestPrice.price;
}
function getLowestPrice(priceList) {
    let lowestPrice = priceList[0];
    for(let i = 0; i < priceList.length; i++){
        if (priceList[i].price < lowestPrice.price) {
            lowestPrice = priceList[i];
        }
    }
    return lowestPrice.price;
}
function getAveragePrice(priceList) {
    const sumOfPrices = priceList.reduce((acc, curr)=>acc + curr.price, 0);
    const averagePrice = sumOfPrices / priceList.length || 0;
    return averagePrice;
}
const getEmailNotifType = (scrapedProduct, currentProduct)=>{
    const lowestPrice = getLowestPrice(currentProduct.priceHistory);
    if (scrapedProduct.currentPrice < lowestPrice) {
        return Notification.LOWEST_PRICE;
    }
    if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
        return Notification.CHANGE_OF_STOCK;
    }
    if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
        return Notification.THRESHOLD_MET;
    }
    return null;
};
const formatNumber = (num = 0)=>{
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d01e4a731a225be6c4fd8a0d17c4ebe3a2b37ffb":"scrapeAmazonProduct"},"",""] */ __turbopack_context__.s([
    "scrapeAmazonProduct",
    ()=>scrapeAmazonProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$cheerio$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/cheerio/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function scrapeAmazonProduct(url) {
    if (!url) return;
    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = 1000000 * Math.random() | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
        timeout: 30000
    };
    try {
        console.log('Starting axios request to:', url);
        // Fetch the product page
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(url, options);
        console.log('Response status:', response.status);
        const $ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$cheerio$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["load"](response.data);
        // Extract the product title
        const title = $('#productTitle').text().trim();
        const currentPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPrice"])($('.priceToPay span.a-price-whole'), $('.a.size.base.a-color-price'), $('.a-button-selected .a-color-base'));
        const originalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPrice"])($('#priceblock_ourprice'), $('.a-price.a-text-price span.a-offscreen'), $('#listPrice'), $('#priceblock_dealprice'), $('.a-size-base.a-color-price'));
        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';
        const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}';
        const imageUrls = Object.keys(JSON.parse(images));
        const currency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractCurrency"])($('.a-price-symbol'));
        const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");
        const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractDescription"])($);
        // Extract the star rating
        const stars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractStars"])($('#acrPopover'), $('.averageStarRating'), $('.a-icon-alt'));
        // Construct data object with scraped information
        const data = {
            url,
            currency: currency || '$',
            image: imageUrls[0] || '',
            title,
            currentPrice: Number(currentPrice) || Number(originalPrice),
            originalPrice: Number(originalPrice) || Number(currentPrice),
            priceHistory: [],
            discountRate: Number(discountRate),
            category: 'category',
            reviewsCount: 100,
            stars: stars,
            isOutOfStock: outOfStock,
            description,
            lowestPrice: Number(currentPrice) || Number(originalPrice),
            highestPrice: Number(originalPrice) || Number(currentPrice),
            averagePrice: Number(currentPrice) || Number(originalPrice)
        };
        return data;
    } catch (error) {
        console.error('Scraper Error:', error.message);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    scrapeAmazonProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(scrapeAmazonProduct, "40d01e4a731a225be6c4fd8a0d17c4ebe3a2b37ffb", null);
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600b2cb237b6296c1508684f9ef6f30a1cd053485f":"generateEmailBody","7f9619cfbff6a8374b5c8783f138557fc880104c0c":"sendEmail"},"",""] */ __turbopack_context__.s([
    "generateEmailBody",
    ()=>generateEmailBody,
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const Notification = {
    WELCOME: 'WELCOME',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET'
};
async function generateEmailBody(product, type) {
    const THRESHOLD_PERCENTAGE = 40;
    // Shorten the product title
    const shortenedTitle = product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title;
    let subject = "";
    let body = "";
    switch(type){
        case Notification.WELCOME:
            subject = `Welcome to Price Tracking for ${shortenedTitle}`;
            body = `
        <div>
          <h2>Welcome to AmzonTrackr 🚀</h2>
          <p>You are now tracking ${product.title}.</p>
          <p>Here's an example of how you'll receive updates:</p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>${product.title} is back in stock!</h3>
            <p>We're excited to let you know that ${product.title} is now back in stock.</p>
            <p>Don't miss out - <a href="${product.url}" target="_blank" rel="noopener noreferrer">buy it now</a>!</p>
            <img src="https://i.ibb.co/pwFBRMC/Screenshot-2023-09-26-at-1-47-50-AM.png" alt="Product Image" style="max-width: 100%;" />
          </div>
          <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
        </div>
      `;
            break;
        case Notification.CHANGE_OF_STOCK:
            subject = `${shortenedTitle} is now back in stock!`;
            body = `
        <div>
          <h4>Hey, ${product.title} is now restocked! Grab yours before they run out again!</h4>
          <p>See the product <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      `;
            break;
        case Notification.LOWEST_PRICE:
            subject = `Lowest Price Alert for ${shortenedTitle}`;
            body = `
        <div>
          <h4>Hey, ${product.title} has reached its lowest price ever!!</h4>
          <p>Grab the product <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a> now.</p>
        </div>
      `;
            break;
        case Notification.THRESHOLD_MET:
            subject = `Discount Alert for ${shortenedTitle}`;
            body = `
        <div>
          <h4>Hey, ${product.title} is now available at a discount more than ${THRESHOLD_PERCENTAGE}%!</h4>
          <p>Grab it right away from <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      `;
            break;
        default:
            throw new Error("Invalid notification type.");
    }
    return {
        subject,
        body
    };
}
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
    pool: true,
    service: 'hotmail',
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    maxConnections: 1
});
const sendEmail = async (emailContent, sendTo)=>{
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: sendTo,
        html: emailContent.body,
        subject: emailContent.subject
    };
    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) return console.log(error);
        console.log('Email sent: ', info);
    });
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateEmailBody,
    sendEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateEmailBody, "600b2cb237b6296c1508684f9ef6f30a1cd053485f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendEmail, "7f9619cfbff6a8374b5c8783f138557fc880104c0c", null);
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000aad256e8fe23b4670b6969ef1cf5ab116aa10cf":"getAllProducts","406e46d3d4c42d3a823918b606a2e2e3f531bd96f0":"getSimilarProducts","40bc1459c2076a9e607ccaaff41c269fb635780e64":"scrapeAndStoreProduct","40dfff62cfbd23af053109cd5e187e741f78989d79":"getProductById","60bbdb1bed9c0bd3d794ed7a615516ce78af0d65b2":"addUserEmailToProduct"},"",""] */ __turbopack_context__.s([
    "addUserEmailToProduct",
    ()=>addUserEmailToProduct,
    "getAllProducts",
    ()=>getAllProducts,
    "getProductById",
    ()=>getProductById,
    "getSimilarProducts",
    ()=>getSimilarProducts,
    "scrapeAndStoreProduct",
    ()=>scrapeAndStoreProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/models/product.model.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/mongoose.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function scrapeAndStoreProduct(productUrl) {
    if (!productUrl) return;
    try {
        console.log('Starting scrape for URL:', productUrl);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        console.log('DB connected');
        const scrapedProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scrapeAmazonProduct"])(productUrl);
        console.log('Scraped product:', scrapedProduct);
        if (!scrapedProduct) {
            throw new Error('Failed to scrape product data');
        }
        let product = scrapedProduct;
        const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            url: scrapedProduct.url
        });
        if (existingProduct) {
            const updatedPriceHistory = [
                ...existingProduct.priceHistory,
                {
                    price: scrapedProduct.currentPrice
                }
            ];
            product = {
                ...scrapedProduct,
                priceHistory: updatedPriceHistory,
                lowestPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLowestPrice"])(updatedPriceHistory),
                highestPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHighestPrice"])(updatedPriceHistory),
                averagePrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAveragePrice"])(updatedPriceHistory)
            };
        }
        const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
            url: scrapedProduct.url
        }, product, {
            upsert: true,
            new: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/products/${newProduct._id}`);
        return newProduct; // Return the new or updated product
    } catch (error) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}
async function getProductById(productId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            _id: productId
        });
        if (!product) return null;
        return product;
    } catch (error) {
        console.log(error);
    }
}
async function getAllProducts() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find();
        return products;
    } catch (error) {
        console.log(error);
    }
}
async function getSimilarProducts(productId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        const currentProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(productId);
        if (!currentProduct) return null;
        const similarProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
            _id: {
                $ne: productId
            }
        }).limit(3);
        return similarProducts;
    } catch (error) {
        console.log(error);
    }
}
async function addUserEmailToProduct(productId, userEmail) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$models$2f$product$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(productId);
        if (!product) return;
        const userExists = product.users.some((user)=>user.email === userEmail);
        if (!userExists) {
            product.users.push({
                email: userEmail
            });
            await product.save();
            const emailContent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateEmailBody"])(product, "WELCOME");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])(emailContent, [
                userEmail
            ]);
        }
    } catch (error) {
        console.log(error);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    scrapeAndStoreProduct,
    getProductById,
    getAllProducts,
    getSimilarProducts,
    addUserEmailToProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(scrapeAndStoreProduct, "40bc1459c2076a9e607ccaaff41c269fb635780e64", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductById, "40dfff62cfbd23af053109cd5e187e741f78989d79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllProducts, "000aad256e8fe23b4670b6969ef1cf5ab116aa10cf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSimilarProducts, "406e46d3d4c42d3a823918b606a2e2e3f531bd96f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addUserEmailToProduct, "60bbdb1bed9c0bd3d794ed7a615516ce78af0d65b2", null);
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000aad256e8fe23b4670b6969ef1cf5ab116aa10cf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProducts"],
    "406e46d3d4c42d3a823918b606a2e2e3f531bd96f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSimilarProducts"],
    "40bc1459c2076a9e607ccaaff41c269fb635780e64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scrapeAndStoreProduct"],
    "40d01e4a731a225be6c4fd8a0d17c4ebe3a2b37ffb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scrapeAmazonProduct"],
    "40dfff62cfbd23af053109cd5e187e741f78989d79",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"],
    "600b2cb237b6296c1508684f9ef6f30a1cd053485f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateEmailBody"],
    "60bbdb1bed9c0bd3d794ed7a615516ce78af0d65b2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addUserEmailToProduct"],
    "7f9619cfbff6a8374b5c8783f138557fc880104c0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/AmazonTracker-main/AmazonTracker-main/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$actions$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/actions/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$scraper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/scraper/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AmazonTracker$2d$main$2f$AmazonTracker$2d$main$2f$lib$2f$nodemailer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AmazonTracker-main/AmazonTracker-main/lib/nodemailer/index.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__938c5854._.js.map