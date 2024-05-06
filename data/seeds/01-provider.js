/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE provider RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE skill RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE hirer RESTART IDENTITY CASCADE')

  await knex('provider').insert([
    { name: "Emma", last_name: "Smith", age: 28, description: "Experienced graphic designer specializing in branding and logo design." },
    { name: "David", last_name: "Johnson", age: 35, description: "Professional software engineer with expertise in full-stack web development." },
    { name: "Sophia", last_name: "Williams", age: 30, description: "Certified yoga instructor offering personalized yoga sessions for all levels." },
    { name: "James", last_name: "Brown", age: 45, description: "Skilled carpenter and furniture maker with over 20 years of experience." },
    { name: "Olivia", last_name: "Jones", age: 26, description: "Freelance writer and editor specializing in content creation and proofreading." },
    { name: "Liam", last_name: "Miller", age: 33, description: "Experienced project manager proficient in Agile methodologies and team leadership." },
    { name: "Ava", last_name: "Davis", age: 38, description: "Professional photographer specializing in portraits, weddings, and events." },
    { name: "Noah", last_name: "Garcia", age: 31, description: "Certified personal trainer offering customized workout plans and nutrition guidance." },
    { name: "Isabella", last_name: "Martinez", age: 29, description: "Experienced interior designer with a passion for creating functional and stylish spaces." },
    { name: "William", last_name: "Rodriguez", age: 40, description: "Licensed electrician providing reliable electrical services for residential and commercial projects." },
    { name: "Mia", last_name: "Lopez", age: 27, description: "Professional makeup artist specializing in bridal, editorial, and special effects makeup." },
    { name: "Ethan", last_name: "Gonzalez", age: 32, description: "Certified financial advisor offering personalized financial planning and investment strategies." },
    { name: "Charlotte", last_name: "Hernandez", age: 34, description: "Experienced event planner with a keen eye for detail and a passion for creating memorable occasions." },
    { name: "Alexander", last_name: "Walker", age: 36, description: "Skilled plumber providing high-quality plumbing services for residential and commercial properties." },
    { name: "Amelia", last_name: "Perez", age: 25, description: "Talented graphic designer specializing in brand identity and digital marketing materials." },
    { name: "Natalie", last_name: "Smith", age: 31, description: "Experienced graphic designer with a focus on web design and user experience." },
    { name: "Daniel", last_name: "Brown", age: 38, description: "Skilled software engineer specializing in front-end development and UI/UX design." },
    { name: "Luna", last_name: "Hernandez", age: 29, description: "Certified yoga instructor offering group and private sessions for all levels." },
    { name: "Jack", last_name: "Thompson", age: 42, description: "Experienced carpenter specializing in custom furniture and woodworking projects." },
    { name: "Sophie", last_name: "Martin", age: 28, description: "Freelance writer and editor with expertise in blog writing and SEO optimization." }
  ]);
};
