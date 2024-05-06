/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hirer').del()
  await knex('hirer').insert([
    { hirer_name: "Tech Solutions Inc.", hirer_description: "We are a technology company seeking skilled professionals to join our development team." },
    { hirer_name: "Bright Ideas Marketing Agency", hirer_description: "We are a marketing agency looking for creative individuals to collaborate on exciting projects." },
    { hirer_name: "Healthy Living Gym", hirer_description: "We are a fitness center searching for certified trainers to help our members achieve their fitness goals." },
    { hirer_name: "Cozy Homes Construction", hirer_description: "We are a construction company in need of experienced carpenters to work on residential projects." },
    { hirer_name: "WordCraft Publishing House", hirer_description: "We are a publishing house seeking talented writers and editors to contribute to our publications." },
    { hirer_name: "Future Innovations Startup", hirer_description: "We are a startup company looking for innovative thinkers to join our dynamic team." },
    { hirer_name: "Event Excellence Planner", hirer_description: "We are an event planning company specializing in creating memorable experiences for our clients." },
    { hirer_name: "Dream Homes Realty", hirer_description: "We are a real estate agency seeking skilled interior designers to stage and decorate our properties." },
    { hirer_name: "Eco-Friendly Energy Solutions", hirer_description: "We are a renewable energy company hiring licensed electricians to install and maintain solar panels." },
    { hirer_name: "Glamourous Occasions Events", hirer_description: "We are an event management company looking for talented makeup artists to beautify our clients." },
    { hirer_name: "Financial Freedom Advisors", hirer_description: "We are a financial advisory firm seeking experienced advisors to provide personalized financial planning services to our clients." },
    { hirer_name: "Creative Concepts Design Studio", hirer_description: "We are a design studio specializing in brand identity and website design seeking creative designers to join our team." },
    { hirer_name: "HealthFirst Medical Clinic", hirer_description: "We are a medical clinic in need of skilled project managers to oversee the implementation of new healthcare initiatives." },
    { hirer_name: "Luxury Living Property Management", hirer_description: "We are a property management company seeking skilled event planners to organize tenant events and community gatherings." },
    { hirer_name: "TechGenius Software Solutions", hirer_description: "We are a software development company looking for talented software engineers to build cutting-edge applications." },
    { hirer_name: "DesignDreams Interior Design", hirer_description: "We are an interior design firm searching for skilled plumbers to assist with kitchen and bathroom renovations." },
    { hirer_name: "StyleMe Fashion Boutique", hirer_description: "We are a fashion boutique hiring experienced graphic designers to create captivating visuals for our marketing campaigns." },
    { hirer_name: "FitFusion Wellness Center", hirer_description: "We are a wellness center seeking certified yoga instructors to lead classes and workshops." },
    { hirer_name: "GreenThumb Landscaping", hirer_description: "We are a landscaping company looking for skilled carpenters to build custom outdoor structures and features." },
    { hirer_name: "WriteWise Content Agency", hirer_description: "We are a content agency hiring talented writers and editors to produce engaging content for our clients." },
  ]);
};
