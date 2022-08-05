// Business background para text
let biz_history = `Group of entrepreneur from India were launched "Thor" in 2010 with a seed capital of Rs. 500,000, ten employees, a few rented computers, borrowed furniture, and rented Office.
In 2015, Its first web version for the Internet and mobile app was launched. 
It listed in Indian stock market with NSE and BSE in 2016 at a price between INR 104/- with the total 10 million shares, 3.5 million of them were offered to the public, while the rest were given to fifteen previous investors at INR 30 per share. To encourage retail investment, 
Part of the strategy's success is derived from recreating the bustling and diverse experiences of India's Market online. To sell products to non-metro buyers, Thor identified a need to engage and entertain, just like in physical bricks-and-mortar settings.`

// contact us para text
let feel_free_to_contact = `We are always like to hear from our customers and always happy to help you at any given point of time. click on the link below to get in touch with us, we are opened on week days at following schedule timings, if not reachable
email us. Our concept of 'shop on stop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 900000009 and the fact that we own a strong hold on local business information`

// tagline for the business appearing on the header
let tag_line = "The Delivery Solutions Redefined"

// alert text on submit button clicked.
let alert_message = "Your request has been successfully submitted and form has been sent. Thank you."
let alert_nav_to_contact_us = "Thanks for expressing your interest, You will be navigated to 'Contact us' page."
let cancel_contact_form = "Regret that we have not met your requirements, we are updating ourselves, you will be navigated to 'Thor Home page'"
let helpline = +919000000009
let emailId = "customercare@thor.com"

// Array of services offered by the business. it can be incremented from here to add any new services.
let service_offered = [
    ["order_groceries",
        "With changing time, tightening schedules of working individuals in the country, 'Order Groceries' gives one the freedom to skip the tiresome grocery shopping and have it delivered instead.",
        "Order Groceries",
    ],
    ["order_food_online",
        "You are just few clicks away from placing an order and exploring a wide range of exotic cuisines. Now, order food online with Thor and get your favourite food delivered at your doorstep. Search for restaurants, view reviews and ratings, avail discounts and order your food.",
        "Order Food Online"
    ],
    ["shop_online",
        "This online shopping feature brings forth a lots of gadgets like phones, refrigerators, washing machines, cameras, etc. for you to choose from and make a smart buy.",
        "Shop Online"
    ],
    ["order_medicine",
        "From finding your nearest chemist to those that are opened round the clock, this service let's you place an order for your required medication with the nearest chemist and have it delivered to your doorstep.",
        "Order Medicine"
    ],
    ["online_bil_recharge",
        "With the help of this service you can stay on track in making your bill payments and recharges without having to wait in a queue. This includes bill payments for gas, electricity, data card, DTH, landline, etc.",
        "Online Recharge/Bill Payment"]
]

/**
 * calling the element to set the inner html on loading the page.
 */
window.onload = function () {
    let page = null;
    switch (document.title) {
        case 'Thor-contact us':
            page = "contact_us.html";
            break;
        default:
            page = "index.html";
    }
    pull_contents(service_offered, page);
};

/**
 * The initial loading of the element with the passed string variable serving for the text of the para's.
 * param page will decide which element should load and which should be ignored on loading.
 * @param {*} services 
 * @param {*} page 
 */
function pull_contents(services, page) {
    // generally load all the common elements on the page, irrespective of the page /file name.
    document.getElementById("tag_line").innerHTML = tag_line
    document.getElementById("feel_free_to_contact").innerHTML = feel_free_to_contact
    // if page is main page/index then load all the element related to the main page.
    if (page == "index.html") {
        let ul = document.getElementById("services_offered_");
        document.getElementById("our_history").innerHTML = "&emsp;" + biz_history
        services.forEach((node) => {
            let name = node[2];
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(name));
            let services_p = document.createElement('p')
            li.appendChild(services_p)
            ul.appendChild(li);
            li.setAttribute("class", "services-li")
            services_p.setAttribute("class", "services_p")
            services_p.innerHTML = node[1]
        })
    }

    if (page == "contact_us.html") {
        let sub_list = document.getElementById("subjects-list");
        services.push(["", "", "Others"])
        services.forEach((node) => {
            let name = node[2];
            let opts = document.createElement('option');
            sub_list.appendChild(opts);
            opts.setAttribute("value", name)
        })
    }
}