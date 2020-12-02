import React from 'react'

import { Menu, MenuItem, Content } from 'scroll-spy'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Menu>
        {sections.map((section) => (
          <MenuItem title={section.title} toId={section.id} />
        ))}
      </Menu>
      <Content>
        <div style={{ maxWidth: '50%', marginLeft: '25%' }}>
          <h1>What is Primer?</h1>
          {sections.map((section) => (
            <div id={section.id}>
              <h2>{section.title}</h2>
              {section.text.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}

const sections = [
  {
    id: 'what-is-primer-launching',
    title: 'What is Primer launching?',
    text: [
      "This fall, we're releasing an online community for homeschooling kids, where we host interest-based clubs. Our clubs connect academic lessons to the real world through projects that kids explore on their own or with their families. In our current clubs, students are building vehicles using rubber bands, writing stories with original characters, designing computer games from scratch, and exploring the natural world around them.",
      "When students create accounts on Primer's website, they can join clubs right away and pick a few projects to work on independently from our library.",
      'As learners progress through a project, they can post updates on their progress, ask questions, and request feedback from Primer admins and other club members.',
      'At any point in their project, they can browse Community projects from other kids for inspiration.'
    ]
  },
  {
    id: "who-writes-primer's-projects",
    title: "Who writes Primer's Projects?",
    text: [
      "Primer's education team has experience building rockets at SpaceX, designing high schools, teaching in New York's public schools, accelerating the Girls Who Code movement, building robots, teaching programming at Berkeley, and building worlds in VR. As passionate lifelong learners, we play-test every single project that we publish, so we get excited every time a student approaches a project in their own unique way."
    ]
  },
  {
    id: 'which-clubs-will-be-available-at-launch',
    title: 'Which clubs will be available at launch?',
    text: [
      '📘 Storytellers Club',
      ' Storytellers craft fables, building worlds, and designing characters. Storytellers try different genres and formats including journalism, fables, and podcasting.',
      '🎮 Game Makers Club',
      "Game Makers make video games for themselves and their friends by learning how to design and build games using Scratch and Javascript (but don't need to know how to code before joining!).",
      '🍃 Naturalists Club',
      'Naturalists explore the world around them by building homes for animals, cultivating plant life, and becoming life scientists.',
      '🛠 Inventors Club',
      'Inventors build machines and structures by exploring materials and mechanics. They can build rockets, repair spacesuits, and design rubber-band cars.'
    ]
  },
  {
    id: 'which-clubs-are-right-for-my-kids',
    title: 'Which clubs are right for my kids?',
    text: [
      "In short, all of them! We work to make sure that every student feels seen and celebrated in all of our clubs. Students are welcome to explore Primer's clubs freely, try a project and meet other club members, and adjust their involvement in different clubs over time.",
      "Students don't need any relevant experience before checking out any of Primer's clubs. Students can preview a club and explore its projects before joining, or try a project and decide to focus elsewhere. As we grow our product, we look forward to expanding our list of clubs to include activities like cooking, entrepreneurship, and art."
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing',
    text: [
      'Our pricing structure is $49/mo for the first student, then $19/mo for each additional student. To stay true to our commitment to design for everyone, we will offer scholarships to families from the outset, so please join our email list for updates on this front.'
    ]
  },
  {
    id: 'when-can-i-join',
    title: 'When can I join?',
    text: [
      'After wrapping up our private beta, Primer has transitioned into sending out invites to thousands of families each week. To join our waitlist, sign up at the link below and confirm your email. We’ll contact you as soon as your invite is ready!'
    ]
  },
  {
    id: 'faq',
    title: 'FAQ',
    text: [
      'Why project-based learning?',
      'For parents, projects are an open-ended delivery system for a meaningful, buildable, hands-on education. For kids, projects are introductions to the world and a first taste at making their mark on it. For families, projects are adventures that everyone can contribute to and celebrate together. As we build for the long term, our curricula will expand to include other styles of learning and content delivery.',

      'Can I use this as my core curriculum?',
      "Primer's clubs are a rich supplement to core curricula, but we're working on building a complete curriculum.",

      'What ages is Primer for?',
      'Primer is ideal for students ages 7 - 14, but older and younger students can enjoy Primer too. Younger students may need help from a family member to navigate the projects, and older students may want to augment the projects for an additional challenge. We’ll have dedicated content for younger and older students coming out soon!',

      'Is this program religious or secular?',
      'We get this question a lot. The short answer is that we don’t take any religious stances in Primer content and we’re pro-science. We believe that, for every decision around your child’s education, parents are best equipped to decide if or when to introduce religion within the context of education.',

      'Wait, were any of you actually homeschooled?',
      'Funny you should ask! We are built by homeschoolers for homeschoolers. Ryan, our CEO and Co-Founder was homeschooled for 9 years from Kindergarten through 8th grade. Maksim, our CTO, skipped traditional school in high school so that he could study as much physics as he wanted.',

      'Okay, I love it. How can I help?',
      'Thank you! We’ve been blown away by how many families have reached out asking how they can help. Spreading the word about Primer within your homeschooling communities — on Facebook, Instagram, via email, and in person — is incredibly valuable. We’re a small team and we rely heavily on word of mouth. We so appreciate you spreading the word!',

      'We’re also hiring! If you see a role that seems like a fit, we’d love to chat with you.',

      'Have something else in mind? Email us! we’re always happy to chat and hear ideas!',

      'How long is the waitlist ?',
      'We have more than 30,000 families on the waitlist as of October 20, 2020.',

      'More questions?',
      'Email us! You can find us at hi@withprimer.com. (We read every email!)'
    ]
  }
]

export default App
