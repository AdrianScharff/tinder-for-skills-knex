/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('skill').del()
  await knex('skill').insert([
    { skill_name: "Graphic Design", skill_description: "The skill of creating visual content to communicate messages or ideas." },
    { skill_name: "Web Development", skill_description: "The skill of building and maintaining websites and web applications." },
    { skill_name: "Yoga Instruction", skill_description: "The skill of guiding individuals through yoga poses and breathing techniques for physical and mental well-being." },
    { skill_name: "Carpentry", skill_description: "The skill of working with wood to construct, install, and repair structures and furnishings." },
    { skill_name: "Writing and Editing", skill_description: "The skill of producing written content and refining it for clarity, accuracy, and effectiveness." },
    { skill_name: "Project Management", skill_description: "The skill of planning, organizing, and overseeing projects to achieve specific goals and objectives." },
    { skill_name: "Photography", skill_description: "The skill of capturing and editing images to convey messages, tell stories, or preserve memories." },
    { skill_name: "Personal Training", skill_description: "The skill of designing and implementing fitness programs tailored to individual needs and goals." },
    { skill_name: "Interior Design", skill_description: "The skill of creating functional and aesthetically pleasing interior spaces." },
    { skill_name: "Electrical Services", skill_description: "The skill of installing, repairing, and maintaining electrical systems and components." },
    { skill_name: "Makeup Artistry", skill_description: "The skill of applying cosmetics to enhance facial features or create special effects." },
    { skill_name: "Financial Planning", skill_description: "The skill of analyzing financial situations and providing strategies for achieving financial goals." },
    { skill_name: "Event Planning", skill_description: "The skill of organizing and coordinating events, from weddings and parties to conferences and festivals." },
    { skill_name: "Plumbing Services", skill_description: "The skill of installing, repairing, and maintaining plumbing fixtures and systems." },
    { skill_name: "Brand Identity Design", skill_description: "The skill of creating visual elements and messaging to establish and differentiate a brand." },
  ]);
};
